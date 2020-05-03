<template>
    <section>
        <div class="flex-card">
            <div class="column">
                <div>
                    <label for="lang">{{$t('settings.lang')}}:</label>
                    <select v-model="lang" @change="switchLang" name="lang" id="lang">
                        <option value="ru">Русский</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Settings",
        data() {
            return {
                lang: this.$i18n.locale
            }
        },
        methods: {
            switchLang() {
                this.$i18n.locale = this.lang
                localStorage.setItem('lang', this.lang);
                this.$router.push({
                    params: {lang: this.lang}
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>