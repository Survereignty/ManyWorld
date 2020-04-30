<template>
    <div class="menu" @click="dropMenu">
      <div class="name">
        {{login}}
      </div>
      <i>
        <svg :class="{'up': menu}" xmlns="http://www.w3.org/2000/svg" fill="#f9f9f9" width="10" height="10" viewBox="0 0 284.929 284.929"><path d="M282.082 76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856-2.471 0-4.661.95-6.563 2.856L142.466 174.441 30.262 62.241c-1.903-1.906-4.093-2.856-6.567-2.856-2.475 0-4.665.95-6.567 2.856L2.856 76.515C.95 78.417 0 80.607 0 83.082c0 2.473.953 4.663 2.856 6.565l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854L282.082 89.647c1.902-1.903 2.847-4.093 2.847-6.565 0-2.475-.945-4.665-2.847-6.571z"/></svg>
      </i>
    </div>
</template>

<script>

export default {
  name: 'Menu',
  methods: {
    dropMenu() {
      this.$store.dispatch('DropMenu')
    }
  },
  computed: {
    menu() {
        return this.$store.state.settingsMenu
    },
    login() {
        return this.$store.state.user.login
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    cursor: pointer;
    z-index: 2;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    &:active {
        background: #349167;
    }
    .name {
      font-weight: 700;
      font-size: 16px;
      color: #f9f9f9;
    }
    i {
      padding-left: 5px;
      .up {
        transform: rotate(180deg);
      }
    }
  }
</style>
