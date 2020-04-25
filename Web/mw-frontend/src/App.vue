<template>
  <div id="app">
    <Settings></Settings>
    <div id="nav">
      <router-link :to="`/${$i18n.locale}`">Home</router-link> |
      <router-link :to="`/${$i18n.locale}/about`">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Settings from '@/components/Settings/Settings.vue'

export default {
  components: {
    Settings
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
</style>
