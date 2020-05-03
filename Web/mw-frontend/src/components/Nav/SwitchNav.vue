<template>
    <div @click="event">
        <i>
            <svg v-show="!NAV" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="#f9f9f9" d="M0 0h7v7H0V0zM9 0h7v7H9V0zM0 9h7v7H0V9zM9 9h7v7H9V9z"/></svg>
            <svg v-show="NAV" xmlns="http://www.w3.org/2000/svg" fill="#f9f9f9" width="25" height="25" viewBox="0 0 612.043 612.043"><path d="M397.503 306.011L593.08 110.434c25.27-25.269 25.27-66.213 0-91.482-25.269-25.269-66.213-25.269-91.481 0L306.022 214.551 110.445 18.974c-25.269-25.269-66.213-25.269-91.482 0s-25.269 66.213 0 91.482L214.54 306.033 18.963 501.61c-25.269 25.269-25.269 66.213 0 91.481 25.269 25.27 66.213 25.27 91.482 0l195.577-195.576 195.577 195.576c25.269 25.27 66.213 25.27 91.481 0 25.27-25.269 25.27-66.213 0-91.481L397.503 306.011z"/></svg>
        </i>
    </div>
</template>

<script>
    export default {
        name: "SwitchNav",
        methods: {
            event() {
                this.$store.commit("CHANGE_NAV", !this.NAV)
            }
        },
        computed: {
            NAV() {
                return this.$store.state.app.NAV
            },
        }
    }
</script>

<style lang="scss" scoped>
    div {
        z-index: 8;
        @include position(0, null, null, 0);
        i {
            @include flex(null, null, center, center);
            margin: 10px;
            padding: 10px;
            border-radius: 30px;
            &:active {
                background: $color-main-dark;
            }
        }
    }
</style>