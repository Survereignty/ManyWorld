<template>
    <div class="grid">
        <Item style="grid-area: one"    :tag="items[0].tag" :description="items[0].description"    :title="items[0].name" :path="items[0].img" :size="items[0].portrait.size" :x="items[0].portrait.x" :y="items[0].portrait.y"></Item>
        <Item style="grid-area: two"    :tag="items[1].tag" :description="items[1].description"    :title="items[1].name" :path="items[1].img" :size="items[1].portrait.size" :x="items[1].portrait.x" :y="items[1].portrait.y"></Item>
        <Item style="grid-area: three"  :tag="items[2].tag" :description="items[2].description"  :title="items[2].name" :path="items[2].img" :size="items[2].portrait.size" :x="items[2].portrait.x" :y="items[2].portrait.y"></Item>
        <Item style="grid-area: four"   :tag="items[3].tag" :description="items[3].description"   :title="items[3].name" :path="items[3].img" :size="items[3].portrait.size" :x="items[3].portrait.x" :y="items[3].portrait.y"></Item>
        <Item style="grid-area: five"   :tag="items[4].tag" :description="items[4].description"   :title="items[4].name" :path="items[4].img" :size="items[4].portrait.size" :x="items[4].portrait.x" :y="items[4].portrait.y"></Item>
    </div>
</template>

<script>
    import Item from '@/components/Items/Item.vue'

    export default {
        name: "Section",
        components: {
            Item
        },
        props: {
            items: Array
        }
    }
</script>

<style lang="scss" scoped>
    .grid {
        display: grid;
        grid-template-columns: 300px 300px 600px;
        grid-template-areas:
        "one two five"
        "three four five";
    }

@media screen and (max-width: 1350px) {
    .grid {
        grid-template-columns: 350px 350px;
        grid-template-areas:
        "one two"
        "three four"
        "five five";
    }
}
@media screen and (max-width: 750px) {
    .grid {
        grid-template-columns: 300px;
        grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five";
    }
}
@media screen and (max-width: 400px) {
    .grid {
        grid-template-columns: 250px;
        grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five";
    }
}
</style>