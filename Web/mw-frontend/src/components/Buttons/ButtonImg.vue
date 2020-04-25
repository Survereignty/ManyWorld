<template>
    <span
    @click="event"
    class="btn-dropdown"
    aria-haspopup="true"
    data-toggle="dropdown"
    >
    <slot></slot>
    
    </span>
</template>

<script>

export default {
  name: 'Settings',
  props: {
    svg: String,
    event: Function
  }
}
</script>

<style lang="scss">
  .btn-dropdown {
    cursor: pointer;
  }
</style>
