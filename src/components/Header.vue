<template>
    <div class="header-box">   
      <el-dropdown>
        <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
        <el-dropdown-menu slot="dropdown" size="medium">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="el-icon-lock" />
      <i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']" @click="handleWidth" class="icon-collapse hidden-sm-and-down"/>      
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import axios from '../axios.js'
export default {
    name:'Header',
    computed:mapState(['isCollapse']),
    methods:{...mapMutations(['changeCollapse','changeWidth']),
      handleWidth(){
          this.changeCollapse();
          this.changeWidth();
      }     
    },
    mounted() {
      console.log('axios.fetchGet')
      axios.fetchGet('/apis/server/sys.role.page').then((data) => {
            debugger
              this.base.token = data.data.token　　　　
              // console.log("this.base.tokenthis.base.token",this.base.token)
              
          }).catch(err=>{
                  console.log(err)
              }
          )
    },
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
.icon-collapse{
    flex-grow: 1;
    padding-left: 10px;
    font-size: 25px;
    opacity: .4;
    border: none;
}
</style>
