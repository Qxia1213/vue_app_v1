<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {

  name: 'App',
  data:function(){
    return{
      isLogin:this.$store.isLogin
    }
  },
  mounted() {
    console.log(this)
  },
}
</script>

<style>
body,html{
  margin:0;
  padding:0;
  text-align: left;
    height: 100%;
  width:100%;
  background: #fff;
}
#app{
  height: 100%;
  width:100%;
  position: relative;

}
</style>