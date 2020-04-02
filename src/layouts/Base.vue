<template>  


<!-- <el-container style="height: 100%; border: 1px solid #eee">
    
    <el-header>header</el-header>
    <el-main>main</el-main>
    <el-footer>footer</el-footer>
  <el-container>
      <Header />
    <router-view/>
  </el-container>
</el-container> -->


<el-container class="container">
  <el-aside class="aside"><Sider /></el-aside>
  <el-container class="right-side">
    <el-header class="header"><Header /></el-header>
    <el-main class="main"><router-view/></el-main>
  </el-container>
</el-container>


</template>
<script>
import Sider from '@/components/Sider'
import Header from '@/components/Header'
  export default {
      components:{Sider,Header},
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
<style>
.container{
    height: 100%;
    position: relative;
}
.aside{
    height: calc(100% - 60px);
    width:260px;
    margin-top: 60px;
    background: #001529;
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