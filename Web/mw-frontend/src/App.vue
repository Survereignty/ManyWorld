<template>
  <div id="app">
    <Loading v-if="loading"></Loading>
    <Error v-if="error"></Error>
    <Settings v-if="login"></Settings>
    <DropSettings></DropSettings>
    <div v-if="login" id="nav">
      <router-link :to="`/${$i18n.locale}`">Home</router-link> |
      <router-link :to="`/${$i18n.locale}/about`">About</router-link> |
      <router-link :to="`/${$i18n.locale}/login`">Login</router-link>
      <button class="sss"></button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Settings from '@/components/Settings/Settings.vue'
import DropSettings from '@/components/Settings/DropSettings.vue'
import Loading from '@/components/Loading.vue'
import Error from '@/components/Error.vue'

export default {
  components: {
    Settings,
    Loading,
    DropSettings,
    Error
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
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .sss:hover #nav{
    widows: 500px;
    background: black;
  }
</style>
