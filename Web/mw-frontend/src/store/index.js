import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import i18n from '../i18n'

Vue.use(Vuex);

Vue.use(VueResource);

//Vue.http.options.root = "http://192.168.1.242:3000/";
Vue.http.options.root = "http://localhost:3000/";

// Vue.http.interceptors.push(request => {
//   request.headers.set('Kirill', 'XYI')
// })

export default new Vuex.Store({
  state: {
    mobile: /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent),
    user: {
      login: 'Noname',
      role: 0
    },
    login: false,
    urlLogin: Vue.resource('authorization'),
    loading: false,
    error: false,
    errorMassage: '',
    settingsMenu: false,
    nav: false,
  },
  mutations: {
    changeLoginTrue() {
      this.state.login = true;
    },
    changeLoginFalse() {
      this.state.login = false;
    },
    changeLoadingTrue() {
      this.state.loading = true;
    },
    changeLoadingFalse() {
      this.state.loading = false;
    },
    changeErrorTrue() {
      this.state.error = true;
    },
    changeErrorFalse() {
      this.state.error = false;
    },
    changeSettingsMenu() {
      this.state.settingsMenu = !this.state.settingsMenu;
    },
    changeNavMenu() {
      this.state.nav = !this.state.nav;
    }
  },
  actions: {
    async Login ({commit}, {lang, email, password}) {
      commit('changeLoadingTrue')
      await this.state.urlLogin.save({}, {
        lang,
        email,
        password
      })
      .then(response => {
        if (response.body.result) {
          this.state.user.login = "Noname"
          this.state.user.role = 1
          commit('changeLoginTrue');
          commit('changeLoadingFalse');
          if(!this.state.mobile) commit('changeNavMenu');
        } else {
          this.dispatch("SetError", response);
          commit('changeLoadingFalse');
        }
      })
      .catch(error => {
        this.dispatch("SetError", error);
        commit('changeLoadingFalse');
      })
    },
    // Установка ошибки
    SetError({commit}, massage) {
      commit('changeErrorTrue');
      if(massage.status === 0 || massage.status === 404) {
        if (i18n.locale === "ru") {
          this.state.errorMassage = "Сервер не доступен";
        } else {
          this.state.errorMassage = "The Server is not available";
        }
      } else {
        this.state.errorMassage = massage.body.massage;
      }
    },
    Logout({commit}) {
      this.state.user.login = 'Noname';
      this.state.user.role = 0;
      commit('changeLoginFalse');
    },
    CloseError({commit}) {
      commit('changeErrorFalse');
    },
    DropMenu({commit}) {
      commit('changeSettingsMenu');
    },
    SwitchNav({commit}) {
      commit('changeNavMenu');
    },
  },
  modules: {
  }
})