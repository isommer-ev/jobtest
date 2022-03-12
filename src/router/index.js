import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

//点击同一个路由跳转造成报错的解决办法
const routerPush=VueRouter.prototype.push
VueRouter.prototype.push=function push(location){
  return routerPush.call(this,location).catch(error=>error)
}

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/user',
    name:'User',
    component:()=>import ('../views/User/index.vue')
  },
  {
    path:'/detail',
    name:'Detail',
    component:()=>import ('../views/Detail/index.vue')
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  routes
})

export default router
