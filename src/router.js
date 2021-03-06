import Vue from 'vue'
import Router from 'vue-router'
import Todos from './views/Todos'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todos
    }
  ]
})
