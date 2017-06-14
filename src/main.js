// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Content from './Content'
import VueAxios from 'vue-axios'
import Axios from 'axios'


Vue.use(VueAxios,Axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `
  					<div>
  						<Content></Content>
  						<App></App>
  					</div>
  					`,
  components: { App,Content }
})
