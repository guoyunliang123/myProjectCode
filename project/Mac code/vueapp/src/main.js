// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/js/rem.js'
import store from '@/vuex/store'
import VueTouch from 'vue-touch'

Vue.config.productionTip = false
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='
Vue.use(VueTouch, { name: 'v-touch' })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})