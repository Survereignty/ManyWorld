<template>
    <content>
        <section>
            <div class="flex-card">
                <div class="title">
                        {{$t(`nav.create`)}}
                </div>
                <form @submit.prevent="setItem">
                    <div class="row">
                        <label for="img">Картинка</label>
                        <input @change="previewFiles" id="img" type="file" name="img">
                    </div>
                    <div class="row">
                        <label for="size">Размер</label>
                        <input v-model="size" id="size" type="number" name="size">
                    </div>
                    <div class="row">
                        <label for="x">X</label>
                        <input v-model="x" id="x" type="number" name="x">
                    </div>
                    <div class="row">
                        <label for="y">Y</label>
                        <input v-model="y" id="y" type="number" name="y">
                    </div>
                    <div class="row">
                        <label for="name">Имя</label>
                        <input v-model="name" id="name" type="text" name="name">
                    </div>
                    <div class="row">
                        <label for="tag">Тег</label>
                        <input v-model="tag" id="tag" type="text" name="tag">
                    </div>
                    <div class="row">
                        <button
                            type="submit"
                        >
                        {{$t('nav.create')}}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </content>
</template>

<script>

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
        methods: {
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