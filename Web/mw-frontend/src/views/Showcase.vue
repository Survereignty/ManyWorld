<template>
    <content @click="closeAll">
        <NotFound v-if="notFound"/>
        <section v-else>
        </section>
    </content>
</template>

<script>
    import NotFound from '@/components/Items/NotFound.vue'

    export default {
        name: "Showcase",
        metaInfo() {
            return {
                title: this.$t(`nav.${this.tag}`)
            }
        },
        components: {
            NotFound
        },
        data () {
            return {
                tag: this.$router.currentRoute.params['id'],
                notFound: true,
                items: []
            }
        },
        watch: {
            $route (toR) {
                this.tag = toR.params['id']
            }
        },
        methods: {
            getItems() {
                this.resource.get()
                .then(response => {response.json()})
                .then(items => {
                    if (items) {
                        this.notFound = false
                        this.items = items
                    } else {
                        this.notFound = true
                    }
                })
                .catch(error => this.$store.dispatch('SetError', error))
            },
            closeAll() {
                if (this.menu) this.$store.dispatch('DropMenu');
            }
        },
        computed: {
            menu() {
                return this.$store.state.settingsMenu
            }
        },
        created() {
            this.resource = this.$resource('items', {tag: this.tag});
            this.getItems();
        },
        updated() {
            this.resource = this.$resource('items', {tag: this.tag});
            this.getItems();
        }
    }
</script>

<style lang="scss" scoped>

</style>