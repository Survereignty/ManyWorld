<template>
    <span
    @click="event"
    class="btn-dropdown"
    aria-haspopup="true"
    data-toggle="dropdown"
    >
    {{text}}
    </span>
</template>

<script>

export default {
  name: 'Settings',
  props: {
    text: String,
    event: Function
  }
}
</script>

<style lang="scss">
  .btn-dropdown {
    cursor: pointer;
  }
</style>
