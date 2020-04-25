<template>
    <div class="settings" @click="dropMenu">
      <div class="profile-name">Survereignty</div>
      <div class="drop-arrow"></div>
    </div>
</template>

<script>

export default {
  name: 'Settings',
  methods: {
    dropMenu() {
      console.log("hi")
    }
  },
}
</script>

<style lang="scss">
  .settings {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 20px;
    &:hover {
      border-bottom: 2px solid #5ce2a6;
    }
    .profile-name {
      font-weight: 700;
      font-size: 16px;
      color: #f9f9f9;
    }
    .drop-arrow {
      background-image: url(../../assets/icons/angle-arrow-down.svg);
      background-repeat: repeat-x;
      background-color: initial;
      background-position: right 0;
      margin: 4px 4px 4px 6px;
      width: 10px;
      height: 10px;
    }
  }
</style>
