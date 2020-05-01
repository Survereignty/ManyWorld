<template>
    <content>
        <section>
            <div class="login-card">
                <div class="login-title">
                        {{$t('login.title')}}
                </div>
                <form class="login-form" @submit.prevent="login">
                    <div class="login-row">
                        <label for="email">{{$t('login.email')}}</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            :class="{'is-invalid' : $v.email.$error}"
                            @input="$v.email.$touch()"
                            v-model="email"
                        >
                    </div>
                    <div class="login-row">
                        <label for="password">{{$t('login.password')}}</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            :class="{'is-invalid' : $v.password.$error}"
                            @input="$v.password.$touch()"
                            v-model="password"
                        >
                    </div>
                    <div class="login-row">
                        <button
                            type="submit"
                            :disabled="$v.$invalid"
                        >
                        {{$t('login.next')}}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </content>
</template>

<script>
import {required, email, minLength} from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    metaInfo() {
        return {
            title: this.$t('login.title')
        }
    },
    data () {
        return {
            email: 'dio@gmail.com',
            password: '123456'
        }
    },
    methods: {
        login() {
            const date = {
                lang: this.$i18n.locale,
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('Login', date)
            .then(() => {
                if(this.$store.state.login) this.$router.push(`/${this.$i18n.locale}`)
            })
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6)
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        padding: 30px;
        background: #121212;
        box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,1);
        border: 1px solid #1d1d1d;
        font-family: -apple-system,Ubuntu,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        .login-title {
            padding-bottom: 30px;
            font-weight: 700;
            font-size: 28px;
        }
        .login-form {
        display: inherit;
        flex-direction: inherit;
        align-items: inherit;
        .login-row {
                display: inherit;
                flex-direction: inherit;
                padding: 20px;
                .invalid-feedback {
                    color:rgb(170, 0, 0);
                }
                .is-invalid {
                    border: 1px solid rgb(170, 0, 0);
                }
                label {
                    font-weight: 500;
                    font-size: 20px;
                    padding: 10px;
                }
                input {
                    color: #f9f9f9;
                    background: #252525;
                    border: 1px solid #252525;
                    border-radius: 5px;
                    font-size: 20px;
                    padding: 10px;
                    box-shadow: inset 0px 0px 2px 0px rgba(0,0,0,1);
                }
                button[disabled] {
                    background: #414644;
                    color: #5c5c5c;
                    cursor: default;
                    &:hover {
                        background: #414644;
                    }
                    &:active {
                        background: #414644;
                    }
                }
                button {
                    font-weight: 600;
                    background: #42b983;
                    border: 1px solid #1d1d1d;
                    color: #f9f9f9;
                    border-radius: 5px;
                    font-size: 20px;
                    padding: 10px 20px 10px 20px;
                    box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
                    cursor: pointer;
                    &:hover {
                        background: #5ce2a6;
                    }
                    &:active {
                        background: #349167;
                    }
                }
            }
        }
    }
</style>