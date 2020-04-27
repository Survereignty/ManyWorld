import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    loading: false,
    error: false,
    errorMassage: '',
    settingsMenu: false
  },
  mutations: {
    changeLoginTrue() {
      this.state.login = true
    },
    changeLoginFalse() {
      this.state.login = false
    },
    changeLoadingTrue() {
      this.state.loading = true
    },
    changeLoadingFalse() {
      this.state.loading = false
    },
    changeErrorTrue() {
      this.state.error = true
    },
    changeErrorFalse() {
      this.state.error = false
    },
    changeSettingsMenu() {
      this.state.settingsMenu = !this.state.settingsMenu
    }
  },
  actions: {
    async Login ({commit}, {lang, email, password}) {
      commit('changeLoadingTrue')
      await Vue.http.post('http://localhost:3000/authorization', {
        lang,
        email,
        password
      })
      .then(response => {
        if (response.body.result) {
          commit('changeLoginTrue')
          commit('changeLoadingFalse')
        } else {
          commit('changeErrorTrue')
          this.state.errorMassage = response.body.massage
          commit('changeLoadingFalse')
        }
      })
      .catch(() => {
        commit('changeErrorTrue')
        commit('changeLoadingFalse')
      })
    },
    Logout({commit}) {
      commit('changeLoginFalse')
    },
    CloseError({commit}) {
      commit('changeErrorFalse')
    },
    DropMenu({commit}) {
      commit('changeSettingsMenu')
    }

  },
  modules: {
  }
})