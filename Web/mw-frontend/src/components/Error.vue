<template>
    <div class="back">
        <div class="back-drop" @click="close"></div>
        <div class="login-card">
            <div class="login-title">
                {{$t('title')}}
            </div>
            <div class="login-text">
                {{error}}
            </div>
            <div class="login-row">
                <button
                    type="submit"
                    @click="close"
                >
                {{$t('next')}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Error',
    methods: {
        close() {
            this.$store.dispatch('CloseError')
        }
    },
    computed: {
        error() {
            return this.$store.state.errorMassage
        },
    }
}
</script>

<i18n>
{
    "en": {
        "title": "There was a mistake!",
        "next": "OK"
    },
    "ru": {
        "title": "Возникла ошибочка!",
        "next": "Хорошо"
    }
}
</i18n>

<style lang="scss" scoped>
    .back {
        z-index: 5;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .back-drop {
        z-index: 6;
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: .5);
    }
    .login-card {
        z-index: 7;
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        padding: 30px;
        background: #121212;
        box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,1);
        border: 1px solid #1d1d1d;
        font-family: -apple-system,Ubuntu,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        .login-title {
            padding-bottom: 30px;
            font-weight: 700;
            font-size: 28px;
        }
        .login-text {
            padding: 0px 10px 30px 10px;
            max-width: 500px;
            text-align: justify;
        }
        button {
            font-weight: 600;
            background: #42b983;
            border: 1px solid #1d1d1d;
            color: #f9f9f9;
            border-radius: 5px;
            font-size: 20px;
            padding: 10px 20px 10px 20px;
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
            cursor: pointer;
            &:hover {
                background: #5ce2a6;
            }
            &:active {
                background: #349167;
            }
        }
    }
    @media screen and (max-width: 600px) {
        .login-card {
            width: 80%;
            position:fixed;
            overflow: hidden;
            z-index: 7;
        }
    }
    @media screen and (max-width: 900px) {
        .login-card {
            width: 90%;
            position:fixed;
            overflow: hidden;
            z-index: 7;
            .login-title {
                padding: 0px;
            }
        }
    }
</style>
