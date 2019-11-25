import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/Top.vue'
 
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  }
]
 
export default new Router({
  routes,
  mode: 'history'
})