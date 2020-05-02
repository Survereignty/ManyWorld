<template>
    <div>
        <h3>{{login}}</h3>
    </div>
</template>

<script>
    export default {
        name: "User",
        props: {
            login:      String,
        },
    }
</script>

<style lang="scss" scoped>
    div {
        display: flex;
        padding: 10px;
        width: 300px;
        justify-content: center;
        align-items: center;
        background: #121212;
        border: 1px solid #7e633b;
        border-radius: 10px;
    }
</style>