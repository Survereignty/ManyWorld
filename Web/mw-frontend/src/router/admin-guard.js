import store from '../store'

export default function (to, from, next) {
    if (store.state.user.LOGIN) {
        if (store.state.user.ROLE === 1) {
            next()
        } else {
            next(from)
        }
    } else {
        next('/ru/login')
    }

}