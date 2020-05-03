<template>
    <nav :class="{'open' : nav}">
        <div class="title">

        </div>
        <div class="nav" v-if="role">
            <router-link active-class="active" :to="`/${$i18n.locale}/create`">     {{$t('nav.create')}}    </router-link>
        </div>
        <div class="nav">
            <router-link exact  active-class="active" :to="`/${$i18n.locale}`">     {{$t('nav.home')}}      </router-link>
            <router-link active-class="active" :to="`/${$i18n.locale}/worlds`">     {{$t('nav.worlds')}}    </router-link>
            <router-link active-class="active" :to="`/${$i18n.locale}/fractions`">  {{$t('nav.fractions')}} </router-link>
            <router-link active-class="active" :to="`/${$i18n.locale}/races`">      {{$t('nav.races')}}     </router-link>
            <router-link active-class="active" :to="`/${$i18n.locale}/characters`"> {{$t('nav.characters')}}</router-link>
            <router-link active-class="active" :to="`/${$i18n.locale}/stories`">    {{$t('nav.stories')}}   </router-link>
            <router-link active-class="active" :to="`/${$i18n.locale}/projects`">   {{$t('nav.projects')}}  </router-link>
            <router-link active-class="active" :to="`/${$i18n.locale}/gallery`">    {{$t('nav.gallery')}}  </router-link>
            <router-link active-class="active" :to="`/${$i18n.locale}/login`">    login  </router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
        computed: {
            nav() {
                return this.$store.state.app.NAV
            },
            role() {
                return this.$store.state.user.ROLE === 1
            }
        }
    }
</script>

<style lang="scss" scoped>
    .open {
        transform:          translate(220px,0);
        -webkit-transform:  translate(220px,0);
        -o-transform:       translate(220px,0);
        -moz-transform:     translate(220px,0);
    }
    nav {
        z-index:7;
        @include position(0, null, 0, 0);
        @include flex(column, null, null, null);
        overflow-y: hidden;

        margin-left: -220px;

        @include size(220px, null);

        background: $color-bg;
        box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,1);

        transition: all 0.5s ease-in-out;
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;

        .title {
            border-bottom: 3px solid #1d1d1d;
            @include size(100%, 70px);
        }

        .nav {
            padding: 0px 0px 20px 0px;
            @include flex(column, null, null, null);
            @media screen and (max-height: 400px) {
                overflow-y: scroll;
            }
            .active {
                background: rgba($color: #000000, $alpha: .5);
                color: $color-text-main;
            }
            a {
                padding: 10px 20px 10px 20px;
                @include font(20px, null);
                color: $color-text-main-dark;
                cursor: pointer;
                &:hover {
                    background: rgba($color: #000000, $alpha: .5);
                    color: $color-text-main;
                }
            }
        }
    }



</style>