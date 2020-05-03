<template>
    <div :class="{'show' : MENU}" class="settings">
        <div>
            <div class="row" @click="panel" v-if="ROLE">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#f9f9f9" width="20" height="20" viewBox="0 0 24 24"><path d="M20 19V7H4v12h16m0-16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l3.99-4z"/></svg>
                </i>
                <div>
                    {{$t('nav.settings')}}
                </div>
            </div>
            <div class="row" @click="exit">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#f9f9f9" width="20" height="20" viewBox="0 0 533.333 533.333"><path d="M416.667 333.333v-66.666H250V200h166.667v-66.667l100 100-100 100zM383.333 300v133.333H216.667v100l-200-100V0h366.667v166.667H350V33.333H83.333L216.667 100v300H350V300h33.333z"/></svg>
                </i>
                <div>
                    {{$t('settings.exit')}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "settings",
        methods: {
            exit() {
                this.$store.commit('CHANGE_MENU', false);
                this.$store.commit('LOGOUT_USER');
                this.$router.push(`/${this.$i18n.locale}/login`);
            },
            panel() {
                this.$store.commit('CHANGE_MENU', false);
                this.$router.push(`/${this.$i18n.locale}/admin`);
            }
        },
        computed: {
            MENU() {
                return this.$store.state.app.MENU
            },
            ROLE() {
                return this.$store.state.user.ROLE === 1
            }
        }
    }
</script>

<style lang="scss" scoped>
    .settings.show {
        visibility: visible;
        opacity: 1;
        top: 48px;
        pointer-events: auto;
    }
    .settings {
        z-index: 2;
        display: flex;
        background: #121212;
        box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,1);
        border: 1px solid #1d1d1d;
        visibility: hidden;
        border-radius: 5px;
        flex-direction: column;
        position: fixed;
        top: 40px;
        right: 0;
        padding: 5px;
        opacity: 0;
        transition: opacity 100ms linear,top 100ms linear,visibility 100ms linear;
        &:active {
            visibility: visible;
        }
        .row {
            display: flex;
            align-items: center;
            font-weight: 700;
            font-size: 16px;
            color: #f9f9f9;
            border-radius: 5px;
            padding: 10px 20px 10px 0px;
            cursor: pointer;
            &:active {
                background: #349167;
            }
            i {
                padding-right: 15px;
                padding-left: 15px;
            }
            .right {
                transform: rotate(270deg);
            }
            .left {
                transform: rotate(90deg);
            }
        }
    }
</style>