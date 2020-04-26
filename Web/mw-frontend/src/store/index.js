import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    loading: false,
    error: false,
    errorMassage: ''
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
    SetErrorMassage(text) {
      this.state.errorMassage = text
    }
  },
  actions: {
    async Login ({commit}, {lang, email, password}) {
      commit('changeLoadingTrue')
      await Vue.http.post('http://127.0.0.1:3000/authorization', {
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
          commit('SetErrorMassage', response.body.massage)
          commit('changeLoadingFalse')
        }
      })
      .catch(error => {
        commit('changeErrorTrue')
        commit('SetErrorMassage', error)
        commit('changeLoadingFalse')
      })
    }
  },
  modules: {
  }
})