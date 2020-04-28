<template>
    <div>
        <section>
            <h1>{{tag}}</h1>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Showcase",
        data () {
            return {
                tag: this.$router.currentRoute.params['id'],
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
                .then(items => this.items = items)
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