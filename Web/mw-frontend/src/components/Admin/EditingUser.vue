<template>
    <div class="back">
            <div class="back-drop" @click="close"></div>
            <div class="flex-card main-card small">
                <div class="title">
                    {{$t('nav.update')}}
                </div>
                <div class="row">
                    <label for="loginfull">{{$t('login.login')}}</label>
                    <input
                        id="loginfull"
                        type="login"
                        name="login"
                        :class="{'is-invalid' : $v.login.$error}"
                        @input="$v.login.$touch()"
                        v-model="login"
                    >
                </div>
                <div class="row">
                    <label for="emailfull">{{$t('login.email')}}</label>
                    <input
                        id="emailfull"
                        type="email"
                        name="email"
                        v-model="email"
                    >
                </div>
                <div class="row">
                    <label for="passwordfull">{{$t('login.password')}}</label>
                    <input
                        id="passwordfull"
                        type="password"
                        name="password"
                        :class="{'is-invalid' : $v.password.$error}"
                        @input="$v.password.$touch()"
                        v-model="password"
                    >
                </div>
                <div class="row">
                    <label for="rolefull">{{$t('login.role')}}</label>
                    <select
                        id="rolefull"
                        name="role"
                        :class="{'is-invalid' : $v.role.$error}"
                        v-model="role"
                        @input="$v.role.$touch()"
                    >
                    <option value="1">{{$t('role.1')}}</option>
                    <option value="2">{{$t('role.2')}}</option>
                    <option value="3">{{$t('role.3')}}</option>
                    </select>
                </div>
                <div class="column btns">
                    <button
                        class="yellow"
                        type="submit"
                        :disabled="$v.$invalid"
                        @click="put"
                        >
                        {{$t('nav.update')}}
                    </button>
                    <button
                        class="red"
                        type="submit"
                        @click="deleteEl"
                    >
                    {{$t('nav.delete')}}
                    </button>
                    <button
                        type="submit"
                        @click="close"
                    >
                    {{$t('nav.close')}}
                    </button>
                </div>
            </div>
        </div>
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'

    export default {
        name: "EditingUser",
        created() {
            this.login = this.SELECT_USER.login
            this.email = this.SELECT_USER.email
            this.password = this.SELECT_USER.password
            this.role = this.SELECT_USER.role
        },
        data() {
            return {
                login: "",
                email: "",
                password: "",
                role: "3"
            }
        },
        methods: {
            close() {
                this.$store.commit('CHANGE_EDIT_USER', false);
            },
            deleteEl() {
                const obj = {
                    name: 'DELETE_USER',
                    obj: {
                        lang: this.$i18n.locale,
                        login: this.login
                    }
                }
                this.$store.commit('SET_WARNING', obj)
                this.$store.commit('CHANGE_EDIT_USER', false);
            },
            put() {
                this.$store.dispatch('PUT_USER', {
                    lang: this.$i18n.locale,
                    login: this.login,
                    email: this.email,
                    password: this.password,
                    role: this.role,
                    Creator: this.USER_NAME,
                })
                this.$store.commit('CHANGE_EDIT_USER', false);
            },
        },
        computed: {
            USER_NAME() {
                return this.$store.state.user.USER_NAME
            },
            SELECT_USER() {
                return this.$store.state.app.SELECT_USER
            },
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
    }
</script>