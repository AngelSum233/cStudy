import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import my from '../views/my.vue'
import edit from '../views/edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    /* redirect重定向到某个组件 */
    { path: '/', redirect: '/Home' },
    {
      path: '/Home',
      component: Home
    },
    { path: '/edit', component: edit },
    { path: '/my', component: my }
  ]
})
