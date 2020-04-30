<template>
    <section>
        <div class="img"></div>
        <p>{{$t("notFound.title")}}</p>
    </section>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 10% 0px 10%;
        text-align: center;
        .img {
            width: 256px;
            height: 256px;
            background-image: url("../../assets/fox.svg");
            background-color: initial;
        }
        p {
            font-size: 22px;
            font-weight: 600;
        }
    }
</style>