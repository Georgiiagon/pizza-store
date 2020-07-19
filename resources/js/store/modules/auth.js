import Cookie from 'js-cookie';
import api from '../../api/api';

export default {
    state: {
        user: {},
    },
    getters: {
        isAuth: state => !!state.user,
        user: state => state.user,
    },
    mutations: {
        setUser: (state, user) => {
            state.user = user;
        },
        setAuth (state, value) {
            state.isAuth = value
        },
    },
    actions: {
        async login ({ dispatch }, credentials) {
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('api/login', credentials);

            return dispatch('profile')
        },
        profile ({ commit }) {
            return axios.get('/api/profile').then((response) => {
                commit('setAuth', true);
                commit('setUser', response.data);
            }).catch(() => {
                commit('setAuth', false);
                commit('setUser', null);
            })
        },
        async register ({ dispatch }, credentials) {
            console.log(credentials);
            await axios.post('api/register', credentials);

            return dispatch('profile')
        },
        exit({commit}) {
            return new Promise((resolve, reject) => {
                // Cookie.remove('access_token');
                api.get('/api/logout')
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        reject(error);
                    })
                    .finally(function () {
                        commit('setUser', {});
                    });
            });
        },
    },
};
