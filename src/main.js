// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/index.js'
import './assets/css/global.css'
import axios from 'axios'
import qs from 'qs'

// 指定格式，form格式
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.defaults.baseURL = 'http://127.0.0.1:9000/'
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => response,
  ({response}) => {
    const {status, data} = response
    const {message} = data
    this.$message.error(message)
    if (status === 401) router.push('/login')
    return Promise.reject(response)
  }
)

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype['$ajax'] = axios
// qs这块是用来指定axios传参的参数形式，默认是json的，而不是form的格式进行参数的传递！不然会报错400
Vue.prototype['$qs'] = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
