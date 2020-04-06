<style>
    .login-input input{
        border:none;
        border-radius: 0;
        border-bottom:1px solid #DCDFE6;
    }
    .login-button{
        width: 100%;
    }
</style>
<style lang="scss" scoped>
    .login-box{
        width:350px;
        margin:0 auto;
        text-align: center;
        position: relative;
        margin-top: -100px;
        top: 50%;
    }
    .forget-password{
        float:right;
        text-align: right;
        font-size: 12px;
        cursor: pointer;
    }
</style>
<template>
<div class="login-box"> 
    <div>logo</div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" size="medium">
    <el-form-item  prop="userName">
        <el-input type="text" v-model.number="ruleForm.userName" autocomplete="off" placeholder="手机号" class="login-input"></el-input>
    </el-form-item>
    <el-form-item  prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码" class="login-input"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="login-button">提交</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
    </el-form-item>
    </el-form>
    <el-link class="forget-password">忘记密码？</el-link>
</div>
</template>
<script>
  export default {
    name:'Login',
    data() {
      var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
          if (!Number.isInteger(value) || !reg.test(value)) {
            callback(new Error('请输入正确的手机号'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          userName:'',
          pass: ''
        },
        rules: {
          userName:[{
              validator: checkUserName, trigger: 'blur'
          }],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {      
      submitForm(formName) {
          const _self=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            sessionStorage.setItem("loginInfo","come in");
            _self.$router.push({path: '/'})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>