<template>
    <div class="flex">
        <div class="grid">
            <div></div>
            <h2>{{title}}</h2>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props: {
            title: String
        }
    }
</script>

<style lang="scss" scoped>
.flex {
    @include flex(null, null, center, null);
    .grid {
        @include grid(2.5fr 1fr 2.5fr, null);
        @include size(1180px, null);
        text-align: center;
        div {
            border-bottom: 1px solid #7c5b08;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        h2 {
            margin-bottom: 10px;
        }
    }
}

</style>