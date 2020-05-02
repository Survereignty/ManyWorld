<template>
    <content click="closeAll">
        <Nav></Nav>
        <section>
            <Users v-show="tag === 'users'"></Users>
        </section>
    </content>
</template>

<script>
import Nav from '@/components/Admin/Nav'
import Users from '@/components/Admin/Users'

    export default {
        name: "Admin",
        metaInfo() {
            return {
                title: this.$t('nav.settings'),
            }
        },
        data() {
            return {
                tag: ''
            }
        },
        components: {
            Nav,
            Users
        },
        watch: {
            $route (toR) {
                this.tag = toR.params['id']
            }
        },
        methods: {
            closeAll() {
                this.$store.commit('CHANGE_MENU', false);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .flex {
        display: flex;
        flex-direction: column;
    }
</style>