<template>
    <div class="flex">
        <User v-for="item in users" :key="item.id" :login="item.login"></User>
    </div>
</template>

<script>
    import User from '@/components/Admin/User.vue'

    export default {
        name: "AllUsers",
        components: {
            User
        },
        props: {
            users: Array
        }
    }
</script>

<style lang="scss" scoped>
    .flex {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10% 0 10%;
        justify-content: center;
    }
</style>