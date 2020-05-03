<template>
    <nav>
        <router-link exact  active-class="active" :to="`/${$i18n.locale}/admin`">  {{$t('nav.settings')}} </router-link>
        <router-link active-class="active" :to="`/${$i18n.locale}/admin/users`">   {{$t('nav.users')}}    </router-link>
    </nav>
</template>

<script>
    export default {
        name: "AdminNav",
    }
</script>

<style lang="scss" scoped>
    nav {
        @include flex(null, null, center, center);
        a {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            padding: 10px;
            background: $color-bg;
            box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,1);
            border: 1px solid $color-border-dark;
            color: $color-text-main-dark;
            cursor: pointer;
            &:hover {
                background: rgba($color: #000000, $alpha: .5);
                color: $color-text-main;
            }
        }
        .active {
            background: rgba($color: #000000, $alpha: .5);
            color: $color-text-main;
            border-bottom: none;
        }
    }
</style>