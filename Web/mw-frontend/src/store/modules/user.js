import {HTTP} from '../axios/http'

export default {
    state: {
        LOGIN_NAME:     null,
        ROLE:           null,
        ACCESS_TOKEN:   null,
        REFRESH_TOKEN:  null,
        LOGIN:          false,
    },
    mutations: {
        // Авторизуем пользователя
        LOGIN_USER(state, {login, role, ac, rt}) {
            HTTP.defaults.headers.common['Authorization'] = ac;
            state.LOGIN_NAME        = login;
            state.ROLE              = role;
            state.ACCESS_TOKEN      = ac;
            state.REFRESH_TOKEN     = rt;
            state.LOGIN             = true
        },
        // Удаляем пользователя
        LOGOUT_USER(state) {
            delete HTTP.defaults.headers.common['Authorization'];
            state.LOGIN_NAME        = null;
            state.ROLE              = null;
            state.ACCESS_TOKEN      = null;
            state.REFRESH_TOKEN     = null;
            state.LOGIN             = false
        }
    },
    actions: {
        // Авторизуем пользователя на сервере
        async LOGIN({commit}, {login, password}) {
            commit('CHANGE_LOADING', true);
            await HTTP.post('authorization', {
                login, password
            })
            .then(({data}) => {
                commit('LOGIN_USER', {
                    login: login,
                    role: data.role,
                    ac: data.ac_token,
                    rt: data.ref_token
                })
                commit('CHANGE_NAV', true);
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
        }
    }
}