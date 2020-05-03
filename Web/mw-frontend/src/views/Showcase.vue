<template>
    <content>
        <NotFound v-if="notFound"/>
        <transition-group v-if="!notFound" name="anim" tag="section">
            <Title :key="1" :title="$t('section.new')"></Title>
            <Section :key="2" :items="items_one"></Section>
        </transition-group>
        <transition-group v-if="!notFound" name="anim" tag="section">
            <Title :key="1" :title="$t('section.favorite')"></Title>
            <Section :key="2" :items="items_two"></Section>
        </transition-group>
        <transition-group v-if="!notFound" name="anim" class="all" tag="section">
            <Title :key="1" :title="$t('section.collection')"></Title>
            <AllItems :key="2" :items="items_all"></AllItems>
        </transition-group>
    </content>
</template>

<script>
    import NotFound from '@/components/Items/NotFound.vue'
    import Section  from '@/components/Items/Section.vue'
    import Title    from '@/components/Title.vue'
    import AllItems from '@/components/Items/AllItems.vue'

    import img  from '@/assets/ahri.jpg'
    import img1 from '@/assets/ahri_1.jpg'
    import img2 from '@/assets/ahri_2.jpg'
    import img3 from '@/assets/ahri_3.jpg'
    import img4 from '@/assets/ahri_4.jpg'
    import img5 from '@/assets/ahri_5.jpg'
    import img6 from '@/assets/ahri_6.jpg'
    import img7 from '@/assets/ahri_7.jpg'
    import img8 from '@/assets/ahri_8.jpg'
    import img9 from '@/assets/ahri_9.jpg'

    export default {
        name: "Showcase",
        metaInfo() {
            return {
                title: this.$t(`nav.${this.tag}`),
            }
        },
        components: {
            NotFound,
            Section,
            Title,
            AllItems
        },
        data () {
            return {
                tag: this.$router.currentRoute.params['id'] || 'home',
                notFound: false,
                items_one: [
                    {
                        id: 1, name: "Ари", img: img,
                        portrait: {size: 400, x:90, y: 0},
                        tag: "Персонаж"
                    },
                    {
                        id: 2, name: "Ари", img: img1,
                        portrait: {size: 400, x:30, y: 10},
                        tag: "Персонаж"
                    },
                    {
                        id: 3, name: "Ари", img: img2,
                        portrait: {size: 400, x:75, y: 0},
                        tag: "Персонаж"
                    },
                    {
                        id: 4, name: "Ари", img: img4,
                        portrait: {size: 400, x:30, y: 0},
                        tag: "Персонаж"
                    },
                    {
                        id: 5, name: "Пошленькая Ари", img: img3,
                        portrait: {size: 200, x:60, y: 0},
                        tag: "Персонаж"
                    }
                ],
                items_two: [
                    {
                        id: 1, name: "Ари", img: img5,
                        portrait: {size: 150, x:35, y: 0},
                        tag: "Персонаж"
                    },
                    {
                        id: 2, name: "Ари", img: img6,
                        portrait: {size: 400, x:50, y: 5},
                        tag: "Персонаж"
                    },
                    {
                        id: 3, name: "Ари", img: img7,
                        portrait: {size: 400, x:75, y: 0},
                        tag: "Персонаж"
                    },
                    {
                        id: 4, name: "Ари", img: img8,
                        portrait: {size: 400, x:50, y: 5},
                        tag: "Персонаж"
                    },
                    {
                        id: 5, name: "Ари", img: img9,
                        portrait: {size: 200, x:50, y: 30},
                        tag: "Персонаж"
                    }
                ],
                items_all: [
                    {
                        id: 1, name: "Ари", img: img5,
                        portrait: {size: 150, x:35, y: 0},
                        tag: "Персонаж"
                    },
                    {
                        id: 2, name: "Ари", img: img6,
                        portrait: {size: 400, x:50, y: 5},
                        tag: "Персонаж"
                    },
                    {
                        id: 3, name: "Ари", img: img7,
                        portrait: {size: 400, x:75, y: 0},
                        tag: "Персонаж"
                    },
                    {
                        id: 4, name: "Ари", img: img8,
                        portrait: {size: 400, x:50, y: 5},
                        tag: "Персонаж"
                    },
                    {
                        id: 5, name: "Ари", img: img9,
                        portrait: {size: 200, x:50, y: 30},
                        tag: "Персонаж"
                    },
                    {
                        id: 6, name: "Ари", img: img,
                        portrait: {size: 400, x:90, y: 0},
                        tag: "Персонаж"
                    },
                    {
                        id: 7, name: "Ари", img: img1,
                        portrait: {size: 400, x:30, y: 10},
                        tag: "Персонаж"
                    },
                    {
                        id: 8, name: "Ари", img: img2,
                        portrait: {size: 400, x:75, y: 0},
                        tag: "Персонаж"
                    },
                    {
                        id: 9, name: "Ари", img: img4,
                        portrait: {size: 400, x:30, y: 0},
                        tag: "Персонаж"
                    },
                    {
                        id: 10, name: "Пошленькая Ари", img: img3,
                        portrait: {size: 200, x:60, y: 0},
                        tag: "Персонаж"
                    }
                ]
            }
        },
        watch: {
            $route (toR) {
                this.tag = toR.params['id']
                if (!this.tag) this.tag = "home"
            }
        },
        methods: {
            getItems() {
                this.resource.get()
                .then(response => {response.json()})
                .then(items => {
                    if (items) {
                        this.notFound = false
                        //this.items = items
                    } else {
                        this.notFound = true
                    }
                })
                .then(() => {
                    this.show = true;
                })
                .catch(error => this.$store.dispatch('SetError', error))
            }
        },
        created() {
            //this.resource = this.$resource('items', {tag: this.tag});
            //this.getItems();
        },
        updated() {
            //this.resource = this.$resource('items', {tag: this.tag});
            //this.getItems();
            //this.getItemsOfline();
        }
    }
</script>

<style lang="scss" scoped>
    .anim-enter-active, .anim-leave-active {
        transition: opacity .5s;
    }
    .anim-enter, .anim-leave-to {
        opacity: 0;
    }
</style>