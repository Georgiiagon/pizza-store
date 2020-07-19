<template>
    <div>
        <b-navbar id="header" toggleable="lg" type="dark" :router="true" variant="dark">
            <b-navbar-brand to="/">Pizza</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :active="1 === activeLink" to="/home">Home</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :active="2 === activeLink" right to="/cart">Cart</b-nav-item>
                    <b-nav-item :active="3 === activeLink" right to="/login">Login</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        computed: {
            routes() {
                return this.$router.options.routes[0].children;
            },
            activeLink() {
                return _.findIndex(this.routes, ['path', this.$route.path]);
            }
        }
    }
</script>
