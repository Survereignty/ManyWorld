<template>
  <main>

    <!-- Меню -->
    <Menu       v-if="LOGIN"/>
    <Settings   v-if="LOGIN"/>

    <!-- Навигация -->
    <Nav        v-if="LOGIN"/>
    <SwitchNav  v-if="LOGIN"/>

    <!-- Блок загрузки -->
    <Loading    v-show="LOADING"/>

    <!-- Блок ошибки -->
    <Error      v-show="ERROR"/>

    <BackDrop   v-show="NAV & APP_MOBILE"/>

    <router-view/>
  </main>
</template>

<script>
import Menu from '@/components/Settings/Menu.vue'
import Settings from '@/components/Settings/Settings.vue'

import Nav from '@/components/Nav/Nav.vue'
import SwitchNav from '@/components/Nav/SwitchNav.vue'

import BackDrop from '@/components/BackDrop.vue'
import Loading from '@/components/Loading.vue'
import Error from '@/components/Error.vue'

export default {
    components: {
        Menu,
        Settings,
        Nav,
        SwitchNav,
        Loading,
        Error,
        BackDrop
    },
    computed: {
        LOGIN() {
            return this.$store.state.user.LOGIN
        },
        LOADING() {
            return this.$store.state.app.LOADING
        },
        ERROR() {
            return this.$store.state.app.ERROR
        },
        MENU() {
            return this.$store.state.app.MENU
        },
        NAV() {
            return this.$store.state.app.NAV
        },
        APP_MOBILE() {
            return this.$store.state.app.APP_MOBILE
        },
    }
}
</script>