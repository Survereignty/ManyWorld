<template>
  <main>

    <!-- Меню -->
    <Menu       v-if="login"/>
    <Settings   v-if="login"/>

    <!-- Навигация -->
    <Nav        v-if="login"/>
    <SwitchNav  v-if="login"/>

    <!-- Блок загрузки -->
    <Loading    v-show="loading"/>

    <!-- Блок ошибки -->
    <Error      v-show="error"/>

    <BackDrop   v-show="nav & mobile"/>

    <router-view/>

    <Footer v-if="login"/>
  </main>
</template>

<script>
import Menu from '@/components/Settings/Menu.vue'
import Settings from '@/components/Settings/Settings.vue'

import Nav from '@/components/Nav/Nav.vue'
import SwitchNav from '@/components/Nav/SwitchNav.vue'

import Footer from '@/components/Footer.vue'
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
    BackDrop,
    Footer
  },
  computed: {
    login() {
        return this.$store.state.login
    },
    loading() {
        return this.$store.state.loading
    },
    error() {
        return this.$store.state.error
    },
    menu() {
        return this.$store.state.settingsMenu
    },
    nav() {
        return this.$store.state.nav
    },
    mobile() {
        return this.$store.state.mobile
    },
  },
  methods: {

  }
}
</script>

<style lang="scss">
  *{padding: 0; margin: 0;}
  button {
      background: none;
      &:focus {
          outline: none;
      }
  }
  button:active, button:focus {outline: none;}
  input { outline: none; }
  a {
      text-decoration: none;
      &:hover {
          text-decoration: none;
      }
      &:visited {
          color: none;
      }
  }
  input[type=text]::-ms-clear {  display: none; width : 0; height: 0; }
  input[type=text]::-ms-reveal {  display: none; width : 0; height: 0; }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration { display: none; }
  textarea:focus, input:focus{
  outline: none;
  }
  button:active, button:focus, select:focus, select:active {
  outline: none;
  }
  button::-moz-focus-inner, select::-moz-focus-inner  {
    border: 0;
  }
  ol, ul { list-style: none; }
  @font-face {
    font-family: Ubuntu;
    src: url(fonts/Ubuntu/Ubuntu-Medium.ttf);
  }
  h1, h2, h3, h4, h5 ,h6, a {
    font-family: -apple-system,Ubuntu,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }
  html {
      background: #0a0a0c;
      color: #c4b998;
      overflow: visible;
      overflow-x: hidden;
      box-sizing: border-box;
      font-family: -apple-system,Arial,Helvetica,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      font-weight: 400;
      font-size: 12pt;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  ::-webkit-scrollbar { width: 3px; height: 3px;}
  ::-webkit-scrollbar-button {  background-color: #121212; }
  ::-webkit-scrollbar-track {  background-color: #121212;}
  ::-webkit-scrollbar-track-piece { background-color: #121212;}
  ::-webkit-scrollbar-thumb { height: 50px; background-color: #121212; border-radius: 3px;}
  ::-webkit-scrollbar-corner { background-color: #121212;}
  ::-webkit-resizer { background-color: #121212;}

    content {
        width: 100%;
        padding-top: 60px;
        display: flex;
        justify-content: center;
        height: 100vh;
    }
</style>
