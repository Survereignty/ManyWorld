<template>
    <div class="item">
        <div
        class="image"
        :style="img"
        ></div>
        <span class="bottom">
            <div class="title">
                <h2>{{title}}</h2>
                <p>{{tag}}</p>
            </div>
            <div class="description">
                <p>{{description}}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, et. Doloribus, ea consequuntur modi eveniet quisquam asperiores ut. Ab eveniet voluptatum, voluptate quia sapiente repellat sequi accusantium minus quos assumenda.
                </p>
            </div>
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
        display: flex;
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
            height: 200px;
            width: 200px;
            box-shadow: inset 0 0 24px 20px rgba(0,0,0,.5);
            background-repeat: no-repeat;
            opacity: 1;
            border-right: 1px solid #7e633b;
        }
        .bottom {
            width: 330px;
            overflow:hidden;
            font-size: 14px;
            text-align: center;
            padding: 15px;
            display: flex;
            flex-direction: column;
            .title {
                h2 {
                    padding-bottom: 10px;
                }
                padding-bottom: 30px;
            }
            .description {
                text-align: justify;
                text-indent: 1.5em;
            }
        }
    }

@media screen and (max-width: 600px) {
    .item {
        .image {
            width: 100px;
            height: 100px;
        }
        .bottom {
            width: 180px;
            .title {
                h2 {
                    padding-bottom: 10px;
                }
                padding-bottom: 0px;
            }
            .description {
                display: none;
            }
        }
    }
}
</style>