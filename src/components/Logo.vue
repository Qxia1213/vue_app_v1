<template>
    <div class="logo"><img src="../assets/CommercialLogo.png"><span>领丰PMS系统</span></div>
</template>
<script>
export default {
    name:'Logo'
}
</script>
<style>
.logo{
    padding: 10px;
    height: 60px;
    position: fixed;
    top: 0;
    background: #002140;
    width: 300px;
    box-sizing: border-box;
    color:white;
    font-size: 18px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}
.logo img{
  width: 30px;
  height: 30px;
  margin:0 20px;
}
</style>