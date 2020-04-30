<template>
  <content class="home">
    <section><img alt="Vue logo" src="../assets/logo.png"></section>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </content>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  metaInfo() {
      return {
        title: this.$t('nav.home')
      }
  },
  components: {
    HelloWorld,
  }
}
</script>
