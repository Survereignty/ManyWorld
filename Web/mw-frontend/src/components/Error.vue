<template>
    <div class="back">
        <div class="back-drop" @click="close"></div>
        <div class="flex-card main-card">
            <div class="title">
                {{$t('error.title')}}
            </div>
            <div class="row">
                {{ERROR_MASSAGE}}
            </div>
            <div class="row">
                <button
                    type="submit"
                    @click="close"
                >
                {{$t('error.next')}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Error',
    methods: {
        close() {
            this.$store.commit('CLOSE_ERROR')
        }
    },
    computed: {
        ERROR_MASSAGE() {
            let status = this.$store.state.app.ERROR_MASSAGE;
            if (status === 400) status = this.$t('errors.400');
            if (status === 401) status = this.$t('errors.401');
            if (status === 500) status = this.$t('errors.500');
            if (status === 503) status = this.$t('errors.503');
            return status
        },
    }
}
</script>