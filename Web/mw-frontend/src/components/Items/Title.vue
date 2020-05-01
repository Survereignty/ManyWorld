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
    display: flex;
    justify-content: center;
    .grid {
        display: grid;
        width: 1170px;
        grid-template-columns: 2fr 1fr 2fr;
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