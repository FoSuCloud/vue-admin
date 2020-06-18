<template>
  <div id="login">
    <el-form ref="form" :rules="rules" :model="ruleForm" class="form">
      <el-row class="top">
        <span
          @click="toggle"
          class="lb-btn"
          :class="{ active: isActive == item.index }"
          :data-index="item.index"
          v-for="item in logins"
          :key="item.id"
          >{{ item.text }}</span
        >
      </el-row>
      <!-- 注册 -->
      <el-form-item prop="nickname" v-show="isActive==1">
        <label for="nickname">昵称</label>
        <el-input
          id="nickname"
          v-model="ruleForm.nickname"
          placeholder="请输入昵称"
        ></el-input>
      </el-form-item>
      <el-form-item prop="phone" v-show="isActive==0">
        <label for="phone">账号</label>
        <el-input
          id="phone"
          v-model="ruleForm.phone"
          placeholder="请输入手机号码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <label for="pass">密码</label>
        <el-input
          id="pass"
          type="password"
          v-model="ruleForm.pass"
          placeholder="请输入8-13位包含数字和字母的密码"
          autocomplete="off"
          maxlength="13"
          ref="password"
        >
        </el-input>
        <img src="../../assets/imgs/eye.png" alt="密码" @click="showPassword(0)">
      </el-form-item>
      <!-- 再输入一次密码 -->
      <el-form-item prop="rePass" v-show="isActive==1">
        <label for="rePass">确认密码</label>
        <el-input
          id="rePass"
          type="password"
          v-model="ruleForm.rePass"
          placeholder="请再输入一次密码"
          autocomplete="off"
          maxlength="13"
          ref="rePassword"
        >
        </el-input>
        <img src="../../assets/imgs/eye.png" alt="密码" @click="showPassword(1)">
      </el-form-item>
      <el-form-item prop="email" v-show="isActive==1">
        <label for="email">邮箱</label>
        <el-input
          id="email"
          v-model="ruleForm.email"
          placeholder="请输入邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item prop="check" class="check">
        <label for="check">验证码</label>
        <div class="check-div">
          <el-input
            id="check"
            v-model="ruleForm.check"
            autocomplete="off"
            maxlength="6"
          ></el-input>
          <el-button type="primary">验证码</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="sub-btn" @click="submitForm" v-if="isActive==0">
          登录
        </el-button>
        <el-button type="primary" class="sub-btn" @click="submitForm" v-if="isActive==1">
          注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {testPhone,testEmail,testPassword,testCheck} from '@utils/validate.js'
export default {
  name: "login",
  data() {
    var validatePhone = (rule, value, callback) => {
      var phone=testPhone(value)
      if (value === "") {
        callback(new Error("请输入账户"));
      }else if(phone){
        this.ruleForm.phone=value
        callback()
      }else {
        callback(new Error("格式有误"));
      }
    };
    var validateNickName = (rule, value, callback) => {
      var phone=testPhone(value)
      if (value === "") {
        callback(new Error("请输入昵称"));
      }else if(phone){
        this.ruleForm.nickname=value
        callback()
      }else {
        callback(new Error("昵称有误"));
      }
    };
    var validatePass = (rule, value, callback) => {
      var reg=testPassword(value)
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if(value.length<8){
        callback(new Error("密码格式有误"))
      }else if(!reg){
        callback(new Error("密码格式有误"))
      }else{
        callback()
      }
    };
    var validateRePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if(value.length<8){
        callback(new Error("密码格式有误"))
      }else if(value!=this.ruleForm.pass){
        callback(new Error("密码错误"))
      }else{
        callback()
      }
    };
    var validatorCheck = (rule, value, callback) => {
      var reg=testCheck(value)
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if(!reg){
        callback(new Error("验证码格式错误"))
      }else {
        callback();
      }
    };
    var validatorEmail = (rule, value, callback) => {
      var reg=testEmail(value)
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if(!reg){
        callback(new Error("邮箱格式错误"))
      }else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        rePass:"",
        check: "",
        nickname: "",
        phone:"",
        email:""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: validatePhone, trigger: "blur" }],
        check: [{ validator: validatorCheck, trigger: "blur" }],
        rePass: [{ validator: validateRePass, trigger: "blur" }],
        niackname: [{ validator: validateNickName, trigger: "blur" }],
        email: [{ validator: validatorEmail, trigger: "blur" }]
      },
      logins: [
        { text: "登录", index: 0 },
        { text: "注册", index: 1 }
      ],
      isActive: 0
    };
  },
  methods: {
    showPassword(num){
      if(num==0){
        if(this.$refs.password.type!="text"){
          this.$refs.password.type="text"
        }else{
          this.$refs.password.type="password"
        }
      }else if(num==1){
        if(this.$refs.rePassword.type!="text"){
          this.$refs.rePassword.type="text"
        }else{
          this.$refs.rePassword.type="password"
        }
      }
    },
    toggle(e) {
      this.isActive = e.target.dataset.index;
    },
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
#login {
  background-color: #344a5f;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 36px;
  .form {
    width: 30%;
    border-radius: 2px;
    color: white;
    .top {
      width: 50%;
      margin: 10px auto 20px;
    }
    .el-row {
      display: flex;
      justify-content: center;
      .lb-btn {
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
        flex: 1;
        color: gainsboro;
      }
      .lb-btn:last-child {
        margin-left: 20px;
      }
      .lb-btn:hover,
      .active {
        color: white;
        background: #409eff;
      }
    }
    .el-form-item {
      width: 100%;
      position: relative;
      img{
        position: absolute;
        bottom: -5px;
        width: 3rem;
        right: -5px;
      }
      .sub-btn {
        width: 100%;
      }
      .check-div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        .el-input {
          width: 60%;
        }
        button {
          width: 30%;
        }
      }
    }
    label {
      color: white;
      text-align: left;
      display: block;
    }
  }
}
</style>
