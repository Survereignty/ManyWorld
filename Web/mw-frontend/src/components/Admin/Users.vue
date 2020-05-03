<template>
    <section>
        <div class="flex-card">
                <form @submit.prevent="CreateUser">
                    <div class="row">
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
                    <div class="row">
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
                    <div class="row">
                        <label for="role">{{$t('login.role')}}</label>
                        <select
                            id="role"
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
                    <div class="row">
                        <button
                            type="submit"
                            :disabled="$v.$invalid"
                        >
                        {{$t('nav.create')}}
                        </button>
                    </div>
                </form>
            </div>
    </section>
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'

    export default {
        name: "Users",
        data() {
            return {
                login: '',
                password: '',
                role: '3'
            }
        },
        methods: {
            CreateUser() {
                this.$store.dispatch('SET_USER', {
                    lang: this.$i18n.locale,
                    login: this.login,
                    password: this.password,
                    role: this.role
                })
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
    }
</script>