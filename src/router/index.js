import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Search from '@/components/Search'
import Choice from '@/components/choice/Choice'
import Discovery from '@/components/discovery/Discovery'
import Details from '@/components/details/Details'

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
      path: '/details/:id/:imgUrl/:msg',
      name: 'Details',
      component: Details
    },
  ]
})
