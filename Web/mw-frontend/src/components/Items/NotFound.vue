<template>
    <section>
        <h1>{{$t("title")}}</h1>
    </section>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<i18n>
{
    "ru": {
        "title": "По данному запросу мы ничего не нашли :("
    },
    "en": {
        "title": "We didn't find anything :("
    }
}
</i18n>

<style lang="scss" scoped>

</style>