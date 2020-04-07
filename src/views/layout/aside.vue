<template>
<div class="aside-box">
    <Logo />
<el-menu default-active="1-4-1" 
class="el-menu-noborder" 
@open="handleOpen" 
@close="handleClose" 
:collapse="isCollapse"
background-color="#001529"
border-color="red"
text-color="#fff"
active-text-color="#ffd04b"
:router="false"
>
<sidebarItem :routes="routeItem" />
</el-menu>
</div>
</template>
<script>
import Logo from '@/components/Logo.vue'
import sidebarItem from '@/components/sidebarItem.vue'
import {mapState} from 'vuex'

import routeItem from '@/router/modules/task'

  export default {
    components:{Logo,sidebarItem},
    name:'Aside',
    data:function(){
      return{
        routeItem:[...routeItem]
      }
    },
    mounted() {
      console.log("routeItem=")
      console.log(routeItem)
    },
    computed:mapState(["isCollapse"]),
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss">
.el-menu-noborder{border:none!important;}
.aside-box{
  overflow: auto;
  height:calc(100% - 60px);
  margin-top:60px
}
</style>