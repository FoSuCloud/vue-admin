<template>
  <div id="login">
    <el-form ref="form" :model="ruleForm" class="form">
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
      <el-form-item prop="username">
        <label for="user">账号</label>
        <el-input
          id="user"
          v-model="ruleForm.username"
          placeholder="请输入用户名或者手机号码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <label for="pass">密码</label>
        <el-input
          id="pass"
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="check" class="check">
        <label for="check">验证码</label>
        <div class="check-div">
            <el-input
            id="check"
            v-model="ruleForm.check"
            autocomplete="off"
            ></el-input>
            <el-button type="primary">验证码</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        username: ""
      },
      logins: [
        { text: "登录", index: 0 },
        { text: "注册", index: 1 }
      ],
      isActive: 0
    };
  },
  methods: {
    toggle(e) {
      this.isActive = e.target.dataset.index;
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
      }
      .lb-btn:last-child {
        margin-left: 20px;
      }
      .lb-btn:hover,
      .active {
        background: cornflowerblue;
        color: gainsboro;
      }
    }
    .el-form-item{
        width: 100%;
        .check-div{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0;
            margin: 0;
            .el-input{
                width:60%;
            }
            button{
                width:30%;
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
