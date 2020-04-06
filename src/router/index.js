import Vue from 'vue'
import Router from 'vue-router'


// 公共页面的路由文件
import TASK from './modules/task' 
import USER from './modules/user' 

import Home from '@/views/home'
import Main from '@/views/Main.vue'
import User from '@/views/user/user.vue'
import NotFound from '@/views/error/404'

import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

Router.prototype.goBack=function(){
  this.isBack=true;
  window.history.go(-1)
}
const routes=new Router({
  mode:'history',
  routes: [
    ...TASK,
    {
      path: '/',
      name: 'home',
      component: Home,      
      children:[    
        {
          path:'index',
          name:'main',
          component:Main,
          alias:'/',
          meta:{
            requireAuth:true
          }
        },{
          path:'hello',
          name:'hello',
          component:HelloWorld
        }
      ],
      meta:{
        requireAuth:true
      }
    },{
      path:'/user',
      name:'user',
      component:User,
      children:[
       ...USER         
      ]
    },
    {
      path:'/404',
      name:'NotFound',
      component:NotFound
    },
    {
      path:'*',
      redirect:'/404'
    }
  ]
})
routes.beforeEach((to, from, next) => {
  if(to.meta.requireAuth && to.meta.requireAuth===true){
     if(sessionStorage.getItem('loginInfo')){
        next()
     }else{
       next({
         name:'login'
       })
     }
  }else{
    next()
  }
})
export default routes
