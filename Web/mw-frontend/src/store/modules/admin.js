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
        },
        DEL_USER(state, login) {
            state.USERS = state.USERS.filter((item) => {
                return item.login !== login
            });
        },
        PUT_USER(state, {oldLogin, user}) {
            state.USERS = state.USERS.map((item) => {
                if (item.login === oldLogin) return user;
                return item;
            });
        }
    },
    actions: {
        // Создать пользователя
        async SET_USER({commit, dispatch}, {lang, login, password, role}) {
            commit('CHANGE_LOADING', true);
            const Creator = this.state.user.LOGIN_NAME
            await HTTP.post('user', {
                lang, login, password, role, Creator
            })
            .then(({data}) => {
                if (data.result) {
                    commit('ADD_USER', {login, password, role, Creator})
                } else {
                    commit('SET_ERROR', data.massage);
                }
                commit('CHANGE_LOADING', false);
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    dispatch('REFRESH')
                    .then(() => {
                        dispatch('SET_USER', {lang, login, password, role})
                    })
                    .catch((error) => {
                        commit('SET_ERROR', error.response.status);
                    })
                } else {
                    commit('SET_ERROR', error.response.status);
                }
                commit('CHANGE_LOADING', false);
            })
            .catch(() => {
                commit('SET_ERROR', 503);
                commit('CHANGE_LOADING', false);
            })
        },
        // Получить пользователей
        async GET_USERS({commit, dispatch}) {
            await HTTP.get('user')
            .then(({data}) => {
                commit('UPDATE_USERS', data.users);
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    dispatch('REFRESH')
                    .then(() => {
                        dispatch('GET_USERS')
                    })
                    .catch((error) => {
                        commit('SET_ERROR', error.response.status);
                    })
                } else {
                    commit('SET_ERROR', error.response.status);
                }
            })
            .catch(() => {
                commit('SET_ERROR', 503);
            })
        },
        // Удалить пользователей
        async DELETE_USER({commit, dispatch}, {lang, login}) {
            commit('CHANGE_LOADING', true);
            await HTTP.delete('user', {
                data: {lang, login}
            })
            .then(() => {
                commit('DEL_USER', login);
                commit('CHANGE_LOADING', false);
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    dispatch('REFRESH')
                    .then(() => {
                        dispatch('DELETE_USER', {lang, login})
                    })
                    .catch((error) => {
                        commit('SET_ERROR', error.response.status);
                    })
                } else {
                    commit('SET_ERROR', error.response.status);
                }
                commit('CHANGE_LOADING', false);
            })
            .catch(() => {
                commit('SET_ERROR', 503);
                commit('CHANGE_LOADING', false);
            })
        },
        // Обновить пользователей
        async PUT_USER({commit, dispatch}, {lang, login, oldLogin, email, password, role}) {
            commit('CHANGE_LOADING', true);
            await HTTP.put('user', {
                lang,
                login: oldLogin,
                update: {login, email, password, role}
            })
            .then(() => {
                commit('PUT_USER', {
                    oldLogin,
                    user: {login, email, password, role}
                });
                commit('CHANGE_LOADING', false);
            })
            .catch((error) => {
                if (error.response.status === 403) {
                    dispatch('REFRESH')
                    .then(() => {
                        commit('PUT_USER', {
                            oldLogin,
                            user: {login, email, password, role}
                        });
                    })
                    .catch((error) => {
                        commit('SET_ERROR', error.response.status);
                    })
                } else {
                    commit('SET_ERROR', error.response.status);
                }
                commit('CHANGE_LOADING', false);
            })
            .catch(() => {
                commit('SET_ERROR', 503);
                commit('CHANGE_LOADING', false);
            })
        },
    }
}