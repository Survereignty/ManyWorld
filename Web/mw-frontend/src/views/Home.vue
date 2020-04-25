<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloI18n></HelloI18n>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import HelloI18n from '@/components/HelloI18n.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    HelloI18n,
  }
}
</script>
