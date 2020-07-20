<template>
    <b-navbar type="dark" toggleable="lg" variant="dark" :router="true">
            <b-navbar-brand to="/">Pizza</b-navbar-brand>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :active="1 === activeLink" to="/home">Home</b-nav-item>
                    <b-nav-item :active="2 === activeLink" to="/cart">Cart</b-nav-item>
                    <b-nav-item :active="4 === activeLink" v-if="isAuth" to="/orders">Orders</b-nav-item>

                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown :text="user == null ? 'User': user.name" right>
                        <b-dropdown-item v-if="!isAuth" to="/login">Login</b-dropdown-item>
                        <b-dropdown-item v-if="isAuth" @click="logout">Logout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
    </b-navbar>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "AppHeader",
        computed: {
            ...mapGetters({
                isAuth: 'isAuth',
                user: 'user',
            }),
            routes() {
                return this.$router.options.routes[0].children;
            },
            activeLink() {
                return _.findIndex(this.routes, ['path', this.$route.path]);
            }
        },
        methods: {
            logout() {
                this.exit();
                this.$router.replace({ name: 'home' })
            },
            ...mapActions({
                exit: 'exit',
            }),
        }
    }
</script>
