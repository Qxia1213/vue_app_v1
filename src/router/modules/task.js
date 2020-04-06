
export default  [{        
        path: '/task/index',        
        name: 'taskIndex',        
        // component: resolve => require(['@/components/HelloWorld'], resolve),  
        component:()=>import(/* webpackChunkName: "task" */ '@/components/HelloWorld'), 
        meta: {            
            title: '任务首页'        
        }    
    },    
    {        
    path: '/task/task1',        
    name: 'task1',        
    // component: resolve => require(['@/components/Logo'], resolve),
    component:()=>import(/* webpackChunkName: "task" */ '@/components/Logo'),
    meta: {            
        title: '任务一'        
    }    
}]
