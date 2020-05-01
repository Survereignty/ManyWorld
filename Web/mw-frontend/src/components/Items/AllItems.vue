<template>
    <div class="flex">
        <SmallItem v-for="item in items" :key="item.id" :title="item.name" :tag="item.tag" :description="item.description" :path="item.img" :size="item.portrait.size" :x="item.portrait.x" :y="item.portrait.y"></SmallItem>
    </div>
</template>

<script>
    import SmallItem from '@/components/Items/SmallItem.vue'

    export default {
        name: "AllItems",
        components: {
            SmallItem
        },
        props: {
            items: Array
        }
    }
</script>

<style lang="scss" scoped>
    .flex {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10% 0 10%;
        justify-content: center;
    }
</style>