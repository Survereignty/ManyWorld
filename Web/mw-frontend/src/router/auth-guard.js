import store from '../store'

export default function (to, from, next) {
    if (store.state.user.LOGIN) {
        next()
    } else {
        next('/ru/login')
    }
}