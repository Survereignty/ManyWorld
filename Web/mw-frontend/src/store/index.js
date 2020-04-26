import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    loading: false
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
    }
  },
  actions: {
    Login ({commit}) {
      commit('changeLoadingTrue')
      setTimeout(() => {
        commit('changeLoginTrue')
        commit('changeLoadingFalse')
      }, 1000)
    }
  },
  modules: {
  }
})
