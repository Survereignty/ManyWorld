<template>
    <content>
        <section>
            <div class="flex-card">
                <div class="title">
                        {{$t('login.title')}}
                </div>
                <form @submit.prevent="auth">
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
import {required, minLength} from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    metaInfo() {
        return {
            title: this.$t('login.title')
        }
    },
    data () {
        return {
            login: 'Fucking Vladick Slave',
            password: '123456'
        }
    },
    methods: {
        auth() {
            this.$store.dispatch('LOGIN', {
                login: this.login,
                password: this.password
            })
            .then(() => {
                if (this.$store.state.user.LOGIN) this.$router.push(`/${this.$i18n.locale}`)
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
        }
    }
}
</script>