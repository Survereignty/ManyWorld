<template>
    <nav>
        <div>
            <router-link exact  active-class="active" :to="`/${$i18n.locale}/admin`">  {{$t('nav.settings')}} </router-link>
            <router-link active-class="active" :to="`/${$i18n.locale}/admin/users`">   {{$t('nav.users')}}    </router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavAdmin",
    }
</script>

<style lang="scss" scoped>
    nav {
        display: flex;
        justify-content: center;
    }
</style>