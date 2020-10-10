<template>
    <div>
      <img class="cancelImg" src="../assets/cancel.png" alt="取消" @click="cancelBtn">
      <div class="login">
        <span style="font-size:28px;margin-bottom:20px;">密码登录</span>
        <input type="text" placeholder="请输入你的账号名称"/>
        <input type="password" placeholder="请输入密码"/>
        <button class="loginBtn" @click="Login">登 录</button>
        <div class="spanText">
          <span style="color:#c3c3c3">忘记密码</span>
          <span style="color:#539dfd">/注册</span>
        </div>
        <div class="otherLogin">
          <span>其他登录方式</span>
          <div class="otherLoginImge" style="display: flex;margin-top: 35px;">
            <img src="../assets/wechat.png" alt="微信" />
            <img src="../assets/qq.png" alt="qq" />
            <img src="../assets/webo.png" alt="微博" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    cancelBtn () {
      this.$router.push({ path: '/my' })
    },
    Login () {
      this.$router.push({ path: '/my', name: 'my', params: { loadingMes: 1 } })
      window.sessionStorage.setItem('name', 'soso')
      /* this.$router.push({ path: '/my' }) */
    }
  }
}
</script>

<style scoped>
.cancelImg{
  width: 32px;
  height: 32px;
  margin-left: 20px;
  margin-top: 20px;
}
.login{
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
}
.login input{
  border-top: 0;
  border-left: 0;
  border-right: 0;
  outline: none;
  margin-bottom: 30px;
  width: 65%;
  height: 35px;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);
}
.loginBtn{
  width: 67%;
  height: 40px;
  font-size: 16px;
  background-color: #539dfd;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 5%;
}
.spanText{
  margin-left: 180px;
  margin-top: 15px;
  font-size: 16px;
}
.otherLogin{
  color: #b1b1b1;
  font-size: 18px;
  margin-top: 180px;
  text-align: center;
}
.otherLoginImge img{
  margin-right: 16px;
  margin-left: 5px;
  width: 40px;
  height: 40px;
}
</style>
