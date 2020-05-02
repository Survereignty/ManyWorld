<template>
    <content click="closeAll">
        <section>
            <Title :title="$t(`nav.create`)"></Title>
            <div class="flex">
                <label for="img">Картинка</label>
                <input @change="previewFiles" id="img" type="file" name="img">
                <label for="size">Размер</label>
                <input v-model="size" id="size" type="number" name="size">
                <label for="x">X</label>
                <input v-model="x" id="x" type="number" name="x">
                <label for="y">Y</label>
                <input v-model="y" id="y" type="number" name="y">
                <label for="name">Имя</label>
                <input v-model="name" id="name" type="text" name="name">
                <label for="tag">Тег</label>
                <input v-model="tag" id="tag" type="text" name="tag">
                <button @click="setItem">Готово</button>
            </div>
        </section>
    </content>
</template>

<script>
    import Title    from '@/components/Items/Title.vue'

    export default {
        name: "Create",
        metaInfo() {
            return {
                title: this.$t(`nav.create`),
            }
        },
        data() {
            return {
                name: '',
                tag: '',
                img: '',
                size: 0,
                x: 0,
                y: 0
            }
        },
        components: {
            Title
        },
        methods: {
            closeAll() {
                this.$store.commit('CHANGE_MENU', false);
            },
            previewFiles(event) {
                this.img = event.target.files;
            },
            setItem() {
                const date = {
                    lang: this.$i18n.locale,
                    name: this.name,
                    tag: this.tag,
                    img: this.img,
                    size: this.size,
                    x: this.x,
                    y: this.y
                }
                this.$store.dispatch('addItem', date)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .flex {
        display: flex;
        flex-direction: column;
    }
</style>