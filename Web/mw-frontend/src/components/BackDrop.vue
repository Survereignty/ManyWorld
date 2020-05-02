<template>
    <div class="back-drop" @click="closeAll"></div>
</template>

<script>
    export default {
        name: "BackDrop",
        methods: {
            closeAll() {
                this.$store.commit('CHANGE_MENU', false);
                this.$store.commit('CHANGE_NAV', false);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .back-drop {
        z-index: 1;
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: .5);
    }
</style>