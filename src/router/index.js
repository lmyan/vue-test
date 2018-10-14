import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: Home
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
