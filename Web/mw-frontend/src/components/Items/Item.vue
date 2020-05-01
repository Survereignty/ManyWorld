<template>
    <div class="item">
        <div
        class="image"
        :style="img"
        >
        <h4>{{tag}}</h4>
        </div>
        <span class="bottom">
            <h2>{{title}}</h2>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: {
            title:      String,
            path:       String,
            size:       Number,
            x:          Number,
            y:          Number,
            tag:        String,
            description: String
        },
        data() {
            return {
                show: false,
                img: {
                    backgroundImage:    `url('${this.path}')`,
                    backgroundSize:     `${this.size}%`,
                    backgroundPosition: `${this.x}% ${this.y}%`,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .item {
        display: grid;
        grid-template-rows: 5fr 1fr;
        cursor: pointer;
        margin: .5em;
        border: 1px solid #32281f;
        -moz-transition: all 0.2s ease-out;
        -o-transition: all 0.2s ease-out;
        -webkit-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
        background-color: #101217;
        &:hover {
            -webkit-transform: scale(1.05);
            -moz-transform: scale(1.05);
            -o-transform: scale(1.05);
            transform: scale(1.05);
            border: 1px solid #7c5b08;
        }
        .image {
            display: flex;
            flex-direction: column;
            box-shadow: inset 0 30px 24px 20px rgba(0,0,0,.6);
            background-repeat: no-repeat;
            opacity: 1;
            border-bottom: 1px solid #7e633b;
            h4 {
                text-align: center;
                padding: 10px;
            }
        }
        .bottom {
            overflow:hidden;
            font-size: 14px;
            text-align: center;
            padding: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media screen and (max-width: 1350px) {
        .item {
            grid-template-rows: 6fr 1fr;
        }
    }

    @media screen and (max-width: 750px) {
        .item {
            grid-template-rows: 5fr 1fr;
        }
    }

    @media screen and (max-width: 400px) {
        .item {
            grid-template-rows: 4fr 1fr;
        }
    }
</style>