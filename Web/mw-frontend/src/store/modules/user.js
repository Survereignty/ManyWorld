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
            HTTP.defaults.headers.common['Authorization'] = 'Bearer ' + ac;
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
        },
        // Устанавливаем в шапку токен обновления
        SET_REFRESH_TOKEN(state) {
            HTTP.defaults.headers.common['Authorization'] = 'Bearer ' + state.REFRESH_TOKEN;
        },
        // Обновляем токены
        REFRESH_TOKENS(state, {ac, rt}) {
            HTTP.defaults.headers.common['Authorization'] = 'Bearer ' + ac;
            state.ACCESS_TOKEN      = ac;
            state.REFRESH_TOKEN     = rt;
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
                if (!this.state.app.APP_MOBILE) commit('CHANGE_NAV', true);
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
        async REFRESH({commit}) {
            commit('SET_REFRESH_TOKEN');
            await HTTP.get('refresh')
            .then(({data}) => {
                commit('REFRESH_TOKENS', {
                    ac: data.ac_token,
                    rt: data.ref_token
                })
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