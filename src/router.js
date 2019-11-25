import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/Top.vue'
import Foo from './components/Foo.vue'
 
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/foo',
    name: 'Foo',
    component: Foo
  },
  {
    path: "*",
    component: Top
  }
]
 
export default new Router({
  routes,
  mode: 'history'
})