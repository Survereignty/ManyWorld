<template>
    <div>
        <NotFound v-if="notFound"/>
        <section v-else>
        </section>
        <h1>{{tag}}</h1>
    </div>
</template>

<script>
    import NotFound from '@/components/Items/NotFound.vue'

    export default {
        name: "Showcase",
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

<style lang="sccs" scoped>

</style>