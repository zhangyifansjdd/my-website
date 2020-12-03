<template>
  <div class="login">
    <div class="login_block">
      <Input v-model="userName" prefix="ios-contact"
             placeholder="请输入账户名"
             style="width: 80%;margin-top: 20px"
      />
      <br/>
      <Input v-model="password" prefix="md-key" placeholder="请输入密码"
             type="password"
             style="width: 80%;margin-top: 30px"/>
      <br/>
      <Button type="primary" style="width: 80%;margin-top: 30px" @click="login">登录</Button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        userName: '',
        password: ''
      }
    },
    methods: {
      login() {
        localStorage.setItem('userName',this.userName);
        this.$router.push('/baozhang')
      }
    }
  }
</script>

<style scoped>

  .login {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 0;
    background: url("../../assets/background.png");
    width: auto;
    height: 100%;
    overflow: hidden;
    background-size: cover;
  }

  .login_block {
    position: absolute;
    right: 15%;
    top: 35%;
    background-color: white;
    width: 300px;
    height: 200px;
    border-radius: 8px;

    text-align: center;
  }
</style>