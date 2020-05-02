<template>
    <content click="closeAll">
        <section>
            <h1>Gallery</h1>
        </section>
    </content>
</template>

<script>
    export default {
        name: "Gallery",
        metaInfo() {
            return {
                title: this.$t('nav.gallery')
            }
        },
        methods: {
            closeAll() {
                this.$store.commit('CHANGE_MENU', false);
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>