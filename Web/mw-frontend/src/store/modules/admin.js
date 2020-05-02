import {HTTP} from '../axios/http'

export default {
    state: {
        USERS: [],
    },
    mutations: {
        // Обновить пользователей
        UPDATE_USERS(state, users) {
            state.USERS = users;
        },
        ADD_USER(state, user) {
            state.USERS.unshift(user);
        }
    },
    actions: {
        // Создать пользователя
        async SET_USER({commit}, {lang, login, password, role}) {
            commit('CHANGE_LOADING', true);
            await HTTP.post('user', {
                lang, login, password, role
            })
            .then(({data}) => {
                if (data.result) {
                    commit('ADD_USER', {login})
                } else {
                    commit('SET_ERROR', data.massage);
                }
                commit('CHANGE_LOADING', false);
            })
            .catch((error) => {
                commit('SET_ERROR', error.response.status);
                commit('CHANGE_LOADING', false);
            })
            .catch(() => {
                commit('SET_ERROR', 503);
                commit('CHANGE_LOADING', false);
            })
        },
        // Получить пользователей
        GET_USERS() {

        },
    }
}