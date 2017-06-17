import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/public/Search'
import Choice from '@/components/choice/Choice'
import Discovery from '@/components/discovery/Discovery'
import Mine from '@/components/mine/Mine'
import Workshow from '@/components/mine/workshow'
import Collection from '@/components/mine/collection'
import Details from '@/components/details/Details'
import classifyList from '@/components/choice/classify_list'
import login from '@/components/login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/choice',
      name: 'Choice',
      component: Choice
    },
    {
      path: '/discovery',
      name: 'Discovery',
      component: Discovery
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      redirect: "/workshow",
      children : [
      	{
      		path: '/workshow',
      		component : Workshow
      	},
      	{
      		path: '/collection',
      		component : Collection
      	}
      ]
    },
    {
      path: '/details/:id/:imgUrl/:msg',
      name: 'Details',
      component: Details
    },
    {
      path: '/classify_list/:id/:name',
      name: 'classifyList',
      component: classifyList
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})
