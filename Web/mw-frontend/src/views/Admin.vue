<template>
    <content>
        <Title :title="$t(`nav.${tag}`)"></Title>
        <AdminNav/>
        <Users      v-show="tag === 'users'"/>
        <TableUsers v-show="tag === 'users'"/>
    </content>
</template>

<script>
import AdminNav     from '@/components/Admin/AdminNav'
import Users        from '@/components/Admin/Users'
import Title        from '@/components/Title'
import TableUsers   from '@/components/Admin/TableUsers.vue'

    export default {
        name: "Admin",
        metaInfo() {
            return {
                title: this.$t(`nav.${this.tag}`)
            }
        },
        data() {
            return {
                tag: this.$router.currentRoute.params['id'] || 'settings',
            }
        },
        components: {
            AdminNav,
            Users,
            TableUsers,
            Title
        },
        watch: {
            $route (toR) {
                this.tag = toR.params['id']
                if (!this.tag) this.tag = "settings"
            }
        },
    }
</script>