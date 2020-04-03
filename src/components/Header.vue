<template>
    <div class="header-box">     
      <el-dropdown>
        <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
        <el-dropdown-menu slot="dropdown" size="medium">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="el-icon-lock" />
    </div>
</template>
<script>
export default {
    name:'Header'
}
</script>
<style lang="scss">
.header-box{
    display: flex;
    vertical-align: inherit;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;
}
.el-dropdown{
    margin:0 20px;
}

// div {color:$color;}
</style>
