// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* reset.css初始化浏览器默认样式 */
import './assets/styles/reset.css'
/* border.css一像素边框解决方案 */
import './assets/styles/border.css'
/* 解决移动端点击事件三百毫秒延迟事件 */
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

fastClick.attach(document.body)
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
