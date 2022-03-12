import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/icon/iconfont.css'

import {Button,Tabbar, TabbarItem,Swipe, SwipeItem,Dialog,PullRefresh,Toast,List} from 'vant'
Vue.use(Button).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Dialog).use(PullRefresh).use(Toast).use(List)

Vue.config.productionTip = false

Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
