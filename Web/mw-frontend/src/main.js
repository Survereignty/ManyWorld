import '@/styles/index.scss';
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'
import i18n from './i18n'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {

    let language = localStorage.getItem('lang') || to.params.lang;
    if (!language) {
        language = 'ru'
    }

    i18n.locale = language
    next()
})

Vue.use(Vuelidate);
Vue.use(VueMeta);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
