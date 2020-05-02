<template>
    <div class="flex-card ">
        <Title :title="$t('nav.users')"></Title>
            <form class="login-form" @submit.prevent="CreateUser">
                <div class="login-row">
                    <label for="login">{{$t('login.login')}}</label>
                    <input
                        id="login"
                        type="login"
                        name="login"
                        :class="{'is-invalid' : $v.login.$error}"
                        @input="$v.login.$touch()"
                        v-model="login"
                    >
                </div>
                <div class="login-row">
                    <label for="password">{{$t('login.password')}}</label>
                    <input
                        id="password"
                        type="text"
                        name="password"
                        :class="{'is-invalid' : $v.password.$error}"
                        @input="$v.password.$touch()"
                        v-model="password"
                    >
                </div>
                <div class="login-row">
                    <label for="role">{{$t('login.role')}}</label>
                    <select
                        id="role"
                        name="role"
                        :class="{'is-invalid' : $v.role.$error}"
                        v-model="role"
                        @input="$v.role.$touch()"
                    >
                    <option value="1">Администратор</option>
                    <option value="2">Творец</option>
                    <option value="3">Гость</option>
                    </select>
                </div>
                <div class="login-row">
                    <button
                        type="submit"
                        :disabled="$v.$invalid"
                    >
                    {{$t('nav.create')}}
                    </button>
                </div>
            </form>
            <AllUsers :users="USERS"></AllUsers>
    </div>
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'
import Title    from '@/components/Items/Title.vue'
import AllUsers    from '@/components/Admin/AllUsers.vue'

    export default {
        name: "Users",
        metaInfo() {
            return {
                title: this.$t('nav.users'),
            }
        },
        components: {
            Title,
            AllUsers
        },
        data() {
            return {
                login: '',
                password: '',
                role: 3
            }
        },
        computed: {
            USERS() {
                return this.$store.state.admin.USERS
            },
        },
        methods: {
            CreateUser() {
                this.$store.dispatch('SET_USER', {
                    lang: this.$i18n.locale,
                    login: this.login,
                    password: this.password,
                    role: this.role
                })
            },
            GetUsers() {

            }
        },
        validations: {
            login: {
                required,
            },
            password: {
                required,
                minLength: minLength(6)
            },
            role: {
                required,
            }
        },
        created() {
            this.GetUsers();
        }
    }
</script>

<style lang="scss" scoped>
    .flex-card {
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #121212;
        border: 1px solid #7c5b08;
        border-radius: 10px;

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
                input, select {
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