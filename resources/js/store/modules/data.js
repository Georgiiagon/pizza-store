import Cookie from 'js-cookie';
import api from '../../api/api';

export default {
    namespaced: true,
    state: {
        products: [],
        orders: [],
        cart: JSON.parse((Cookie.get('cart') !== undefined ? Cookie.get('cart'): null) ) || {},
        currency: 0,
        currencies: [['$', 1], ['€', 0.87]], // [sign ,coefficient]
        deliveries: [
            {
                'value': 1,
                'text': 'Courier delivery',
                'price': 5,
            },
            {
                'value': 2,
                'text': 'Express delivery',
                'price': 8,
            },
            {
                'value': 3,
                'text': 'Pickup',
                'price':  0,
            },
        ],
        delivery: 1,
    },
    getters: {
        currency: state => state.currency,
        getCurrencyValue: (state) => {
            return state.currencies[state.currency];
        },
        products: state => state.products,
        orders: state => state.orders,
        cart: state => state.cart,
        deliveries: state => state.deliveries,
        delivery: state => state.delivery,
        getOrderStoreLink: (state, getters, rootState, rootGetters) => {
            return rootGetters.isAuth ? 'api/order' : 'api/order-no-register';
        },
        getProductById: state => id => {
            return state.products.find(product => product.id == id) || {price: 0, name: ''}
        },
        getCartArray: state => {
            return Object.entries(state.cart).filter(item => item[1] !== 0);
        },
        getDeliveryByValue: state => value => {
            return state.deliveries.find(delivery => delivery.value == value)
        },
        getDeliveryPrice: state => {
            return state.deliveries.find(delivery => delivery.value == state.delivery).price
        },
        getTotalPrice: (state, getters) => {
            let sum = 0;
            getters.getCartArray.forEach(item => {
                sum += getters.getProductById(item[0]).price * item[1];
            });
            sum += getters.getDeliveryByValue(state.delivery).price;

            return parseFloat(sum).toFixed(2)
        },
        getProductNames: () => order => {
            let products = [];

            order.items.forEach(item => {
                products.push(' name: ' + item.name + ', count: ' + item.pivot.count);
            });

            return products
        },
        getOrderTotalPrice: (state, getters) => order => {
            let sum = 0;
            order.items.forEach(item => {
                sum += item.price * item.pivot.count;
            });
            sum += getters.getDeliveryByValue(order.delivery).price;
            sum = sum * getters.getCurrencyValue[1];

            return parseFloat(sum).toFixed(2) + getters.getCurrencyValue[0]
        },
    },
    mutations: {
        set (state, {type, data}) {
            state[type] = data;
        },
        editDelivery(state, value) {
            state.delivery = value;
        },
    },
    actions: {
        changeCart({state}, payload = {}) {
            if ((state.cart[payload.product_id] + payload.count >= 0) || state.cart[payload.product_id] === undefined) {
                state.cart[payload.product_id] = (state.cart[payload.product_id] || 0) + payload.count;
                state.cart = JSON.parse(JSON.stringify(state.cart));
                Cookie.set('cart', state.cart);
            }
        },
        sendOrder({state, getters}, payload = {}) {
            return api.post(getters.getOrderStoreLink, {user_info: payload, items: state.cart, delivery: state.delivery})
                .then(function (response) {
                    Cookie.remove('cart');
                    state.cart = {};
                });
        },
        get ({commit}, payload = {}) {
            return new Promise((resolve, reject) => {
                api.get(payload.path)
                    .then(function (response) {
                        commit('set', {type: payload.type, data: response.data});
                        resolve(response);
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            });
        },
    },
}
