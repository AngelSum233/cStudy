import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import my from '../views/my.vue'
import edit from '../views/Edit.vue'
import login from '../views/login.vue'
import Achieve from '../views/Achieve'

Vue.use(Router)
/* push  */
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

/* replace */
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
export default new Router({
  routes: [
    /* redirect重定向到某个组件 */
    { path: '/', redirect: '/Home' },
    {
      path: '/Home',
      component: Home
    },
    { path: '/edit', component: edit },
    { path: '/my', component: my },
    { path: '/login', component: login },
    { path: '/achieve', component: Achieve }
  ]
})
