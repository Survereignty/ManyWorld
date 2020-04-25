<template>
    <div class="login-card">
        <div class="login-title">
                Вход
        </div>
        <div class="login-form">
            <div class="login-row">
                <label for="login">Login</label>
                <input id="login" v-model.lazy="login" type="text">
            </div>
            <div class="login-row">
                <label for="password">Пароль</label>
                <input id="password" v-model.lazy="password" type="password">
            </div>
            <div class="login-row">
                <button>Далее</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            login: '',
            password: ''
        }
    }
}
</script>

<i18n>
{
  "en": {
    "title": "Login"
  },
  "ru": {
    "title": "Вход"
  }
}
</i18n>

<style lang="scss">
    .login-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        padding: 30px;
        background: #121212;
        box-shadow: 0 16px 16px -16px rgba(0,0,0,.7);
        border: 1px solid #1d1d1d;
        font-family: -apple-system,Ubuntu,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        .login-title {
            padding-bottom: 30px;
            font-weight: 700;
            font-size: 24px;
        }
        .login-form {
        display: inherit;
        flex-direction: inherit;
        align-items: inherit;
        .login-row {
                display: inherit;
                flex-direction: inherit;
                padding: 20px;
                label {
                    font-weight: 500;
                    font-size: 20px;
                    padding: 10px;
                }
                input {
                    color: #f9f9f9;
                    background: #252525;
                    border: none;
                    border-radius: 5px;
                    font-size: 20px;
                    padding: 10px;
                }
                button {
                    font-weight: 600;
                    background: #42b983;
                    border: 1px solid #1d1d1d;
                    color: #f9f9f9;
                    border-radius: 5px;
                    font-size: 20px;
                    padding: 10px 20px 10px 20px;
                    cursor: pointer;
                    &:hover {
                        background: #5ce2a6;
                    }
                    &:active {
                        background: #349167;
                    }
                }
            }
        }
    }
</style>