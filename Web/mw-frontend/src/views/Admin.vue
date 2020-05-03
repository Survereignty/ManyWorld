<template>
    <content>
        <Title :title="$t(`nav.${tag}`)"></Title>
        <AdminNav/>
        <Users          v-show="tag === 'users'"/>
        <EditingUser    v-if="EDIT_USER"/>
        <TableUsers     v-show="tag === 'users'"/>
        <Settings       v-show="tag === 'settings'"/>
    </content>
</template>

<script>
import AdminNav     from '@/components/Admin/AdminNav'
import Users        from '@/components/Admin/Users'
import Title        from '@/components/Title'
import TableUsers   from '@/components/Admin/TableUsers.vue'
import Settings   from '@/components/Admin/Settings.vue'
import EditingUser   from '@/components/Admin/EditingUser.vue'

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
            Title,
            Settings,
            EditingUser
        },
        watch: {
            $route (toR) {
                this.tag = toR.params['id']
                if (!this.tag) this.tag = "settings"
            }
        },
        computed: {
            EDIT_USER() {
                return this.$store.state.app.EDIT_USER
            }
        }
    }
</script>