export default [{
    path:'login',
    name:'login',
    alias:'/user',
    component:resolve=>require(['@/views/user/login'],resolve)
  },
  {
    path:'register',
    name:'register',
    component:resolve=>require(['@/views/user/register'],resolve)
  }]