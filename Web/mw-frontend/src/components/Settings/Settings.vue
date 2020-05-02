<template>
    <div :class="{'show' : MENU}" class="settings">
        <div v-show="!lang">
            <div class="row" @click="panel" v-if="ROLE">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#f9f9f9" width="20" height="20" viewBox="0 0 24 24"><path d="M20 19V7H4v12h16m0-16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l3.99-4z"/></svg>
                </i>
                <div>
                    {{$t('nav.settings')}}
                </div>
            </div>
            <div class="row" @click="langShow">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#f9f9f9" width="20" height="20" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 015.08 16zm2.95-8H5.08a7.987 7.987 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                </i>
                <div>
                    {{$t('settings.lang')}}
                </div>
                <i>
                    <svg class="right" xmlns="http://www.w3.org/2000/svg" fill="#f9f9f9" width="10" height="10" viewBox="0 0 284.929 284.929"><path d="M282.082 76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856-2.471 0-4.661.95-6.563 2.856L142.466 174.441 30.262 62.241c-1.903-1.906-4.093-2.856-6.567-2.856-2.475 0-4.665.95-6.567 2.856L2.856 76.515C.95 78.417 0 80.607 0 83.082c0 2.473.953 4.663 2.856 6.565l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854L282.082 89.647c1.902-1.903 2.847-4.093 2.847-6.565 0-2.475-.945-4.665-2.847-6.571z"/></svg>
                </i>
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
        <div v-show="lang">
            <div class="row lang" @click="langShow">
                <i>
                    <svg class="left" xmlns="http://www.w3.org/2000/svg" fill="#f9f9f9" width="10" height="10" viewBox="0 0 284.929 284.929"><path d="M282.082 76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856-2.471 0-4.661.95-6.563 2.856L142.466 174.441 30.262 62.241c-1.903-1.906-4.093-2.856-6.567-2.856-2.475 0-4.665.95-6.567 2.856L2.856 76.515C.95 78.417 0 80.607 0 83.082c0 2.473.953 4.663 2.856 6.565l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854L282.082 89.647c1.902-1.903 2.847-4.093 2.847-6.565 0-2.475-.945-4.665-2.847-6.571z"/></svg>
                </i>
            </div>
            <div class="row lang" @click="switchLang('en')">
                English
            </div>
            <div class="row lang" @click="switchLang('ru')">
                Русский
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "settings",
        data () {
            return {
                lang: false
            }
        },
        methods: {
            exit() {
                this.$store.commit('CHANGE_MENU', false);
                this.$store.commit('LOGOUT_USER');
                this.$router.push(`/${this.$i18n.locale}/login`);
            },
            langShow() {
                this.lang = !this.lang
            },
            switchLang(lang) {
                this.lang = !this.lang
                this.$i18n.locale = lang
                this.$router.push({
                    params: {lang: lang}
                })
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
        .lang {
            justify-content: center;
            padding: 5px 30px 10px 30px;
        }
    }
</style>