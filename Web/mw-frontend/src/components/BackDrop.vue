<template>
    <div class="back-drop" @click="closeAll"></div>
</template>

<script>
    export default {
        name: "BackDrop",
        methods: {
            closeAll() {
                this.$store.commit('CHANGE_NAV', false);
            }
        },
    }
</script>