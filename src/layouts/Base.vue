<template>  
  <el-container class="container">
    <el-aside class="aside" :width="asideWidth"><Sider /></el-aside>
    <el-container class="right-side">
      <el-header class="header"><Header /></el-header>
      <el-main class="main"><router-view/></el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sider from '@/components/Sider'
import Header from '@/components/Header'
import {mapState, mapMutations} from 'vuex'
  export default {
    components:{Sider,Header},
    data() {
      const item = {
        date: '2020-04-01',
        name: '谢小千',
        address: '中山中山中山中山中山'
      };
      return {
        tableData: Array(20).fill(item),
        screenWidth: document.body.clientWidth
      }
    },
    computed:mapState(["asideWidth"]),
    methods:mapMutations(['changeCollapse','changeWidth']),
    mounted() {  
      window.onresize=()=>{
        let screenWidth=document.body.clientWidth;
        if(screenWidth<1028){
          this.changeCollapse(true);
          this.changeWidth();
        }else{
          console.log(screenWidth)
        }
      }
    },
  };
</script>
<style>
.container{
    height: 100%;
    position: relative;
}
.aside{
    background: #001529;
    position: relative;
    overflow: hidden;
}
.right-side{
    height:100%;
    overflow: auto;
}
.header{
    width: 100%;
    padding:0px;
    border-bottom:1px solid #efefef;
    box-sizing: border-box;
}
.main{
    height: 100%;
    overflow: auto;
    background: #f0f2f5;
    padding:20px;
    box-sizing: border-box;
}
</style>