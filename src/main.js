// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './App'
import router from './router'
import Content from './Content'
import VueAxios from 'vue-axios'
import axios from 'axios'
import '../static/font/iconfont.css'
import '../static/font/iconfont'
import '../static/css/common.css'
//import '../static/css/mui.css'
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: `
  					<div>
  						<Content></Content>
  						<Index></Index>
  					</div>
  					`,
  components: { Index,Content }
})
