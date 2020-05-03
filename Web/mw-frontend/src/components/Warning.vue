<template>
    <div class="back">
        <div class="back-drop" @click="no"></div>
        <div class="flex-card main-card">
            <div class="title">
                {{$t('error.warning')}}
            </div>
            <div class="row">
                {{$t('error.warning_text')}}
            </div>
            <div class="column btns">
                <button
                    type="submit"
                    @click="yes"
                >
                {{$t('error.yes')}}
                </button>
                <button
                    class="yellow"
                    type="submit"
                    @click="no"
                >
                {{$t('error.no')}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Warning',
    methods: {
        yes() {
            this.$store.dispatch(this.$store.state.app.WARNING_FUNC.name, this.$store.state.app.WARNING_FUNC.obj);
            this.$store.commit('CHANGE_WARNING', false)
        },
        no() {
            this.$store.commit('CHANGE_WARNING', false)
        }
    },
}
</script>