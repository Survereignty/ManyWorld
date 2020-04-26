import store from '../store'

export default function (to, from, next) {
    if (store.state.login) {
        next()
    } else {
        next('/ru/login')
    }
}