<template>
    <b-container>
        <b-row class="justify-content-md-center">
            <b-col class="mt-5" cols="12" md="auto">
                <b-card
                    class="text-center"
                    style="max-width: 25rem;"
                >
                    <template v-slot:header>
                        <h3 v-if="!showRegister">Sign in</h3>
                        <h3 v-if="showRegister">Registration</h3>
                    </template>
                    <b-card-body>
                        <div v-if="!showRegister">
                            <b-form-group
                                id="input-group-1"
                                label="Email"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    v-model="form.email"
                                    type="email"
                                    required
                                    placeholder="Enter email"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group
                                id="input-group-2"
                                label="Password"
                                label-for="input-2"
                            >
                                <b-form-input
                                    id="input-2"
                                    v-model="form.password"
                                    required
                                    type="password"
                                    placeholder="Enter password"
                                ></b-form-input>
                            </b-form-group>

                            <b-button class="btn-auth" @click="submit()" variant="primary">Sign in</b-button>
                        </div>

                        <div v-if="showRegister">
                            <b-form-group
                                id="input-group-3"
                                label="Email*"
                                label-for="input-3"
                            >
                                <b-form-input
                                    id="input-3"
                                    v-model="form.email"
                                    type="email"
                                    required
                                    placeholder="Enter email"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-5" label="Name*" label-for="input-5">
                                <b-form-input
                                    id="input-5"
                                    v-model="form.name"
                                    required
                                    placeholder="Enter name"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-6" label="Surname*" label-for="input-6">
                                <b-form-input
                                    id="input-6"
                                    v-model="form.surname"
                                    required
                                    placeholder="Enter surname"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-7" label="Address*" label-for="input-7">
                                <b-form-input
                                    id="input-7"
                                    v-model="form.address"
                                    placeholder="Enter address"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-4" label="Password*" label-for="input-4">
                                <b-form-input
                                    id="input-4"
                                    v-model="form.password"
                                    required
                                    type="password"
                                    placeholder="Enter password"
                                ></b-form-input>
                            </b-form-group>

                            <b-button class="btn-auth" @click="registration()" variant="primary">Register</b-button>
                        </div>
                    </b-card-body>
                    <template v-slot:footer>
                        <small class="text-muted" v-if="!showRegister">
                            Not a member?
                            <b-link @click="showRegister = !showRegister">Join now</b-link>
                        </small>
                        <small class="text-muted" v-if="showRegister">
                            Already registered?
                            <b-link @click="showRegister = !showRegister">Sign in</b-link>
                        </small>
                    </template>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        data() {
            return {
                form: {
                    name: '',
                    surname: '',
                    address: '',
                    email: '',
                    password: '',
                },
                showRegister: false
            }
        },
        computed: {
            ...mapState({
                user: state => state.user,
            }),
        },
        mounted() {
            if (this.$store.getters.isAuth) {
                this.$router.replace({ name: 'home' })
            }
        },
        methods: {
            ...mapActions({
                login: 'login',
            }),
            async submit () {
                await this.login({email: this.form.email, password: this.form.password});
                this.$router.replace({ name: 'home' });
            },
            async registration () {
                let that = this;
                await this.$store.dispatch('register', this.form).then(response => {

                }).catch((error) => {
                    console.log(error);
                    that.$appNotify.error(error.response.data);
                });
                await that.submit();
            },
            async reset() {
                this.form = {
                    name: '',
                    surname: '',
                    address: '',
                    email: '',
                    password: '',
                };
            }
        }
    }
</script>

<style>
    .btn-auth {
        width: 100%;
    }
</style>
