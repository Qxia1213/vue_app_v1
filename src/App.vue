<template>
  <div id="app">
    <Base/>
  </div>
</template>

<script>
import Base from '@/layouts/Base'
export default {
  components:{Base},
  name: 'App'
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