<template>
  <div>
    <router-link :to="{'path':'/'}">
        <el-menu-item>
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
        </el-menu-item>        
    </router-link>
    <el-submenu v-for="item in routes" :key="item.name" :index="item.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{item.meta.title}}</span>
      </template>
      <router-link
        v-for="child in item.children"
        :key="child.name"
        :to="{'path':`${item.path}/${child.path}`,'query':{'name':child.meta.title}}"
      >
        <el-menu-item>{{child.meta.title}}</el-menu-item>
      </router-link>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "sidebarItem",
  props: {
    routes: {
      type: Array
    }
  }
};
</script>