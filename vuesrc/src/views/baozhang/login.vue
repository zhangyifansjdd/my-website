<template>
  <div class="login">
    <div class="login_block">
      <Input v-model="userName" prefix="ios-contact"
             placeholder="请输入姓名"
             style="width: 80%;margin-top: 40px"
      />
      <br/>
      <Input v-model="password" prefix="md-key" placeholder="请输入密码"
             type="password"
             style="width: 80%;margin-top: 30px"/>

      <Input v-model="confirmPassword" prefix="md-key" placeholder="请确认密码"
             type="password"
             v-if="showConfirmPassword"
             style="width: 80%;margin-top: 30px"/>
      <br/>
      <Button type="primary" style="width: 80%;margin-top: 30px" @click="login">{{
          showConfirmPassword ? '注册并登录' : '登录'
        }}
      </Button>
      <br/>
      <button class="register" @click="goRegister">{{ showConfirmPassword ? '只登录' : '注册' }}</button>
    </div>
  </div>
</template>

<script>
  import Http from "@/libs/Http";

  export default {
    name: "login",
    data() {
      return {
        userName: '',
        password: '',
        confirmPassword: '',
        showConfirmPassword: false
      }
    },
    methods: {
      login() {
        let interfaceUrl = '';
        if (this.showConfirmPassword) {
          if (this.confirmPassword == this.password) {
            interfaceUrl = '/api/logon';
          } else {
            this.$Notice.open({
              title: '结果',
              desc: '两次输入密码不一致'
            });
            return;
          }
        } else {
          interfaceUrl = '/api/login';
        }

        Http.get(interfaceUrl, {
          userName: this.userName,
          password: this.password
        })
          .then(response => {
            this.$Notice.open({
              title: '结果',
              desc: this.confirmPassword ? '注册成功' : '登录成功'
            });
            localStorage.setItem('userName', this.userName);

            let callbackUrl = response.callbackurl;
            if (callbackUrl) {
              setTimeout(() => {
                this.$router.push(callbackUrl)
              }, 2000);
            }
          })
          .catch(e => {
            console.log(e);
            this.$Notice.open({
              title: '结果',
              desc: `${this.confirmPassword ? '注册' : '登录'}失败，姓名或密码输入错误`
            });
          })
        // this.$router.push('/baozhang')
      },
      goRegister() {
        this.showConfirmPassword = !this.showConfirmPassword;
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
    right: 20%;
    top: 35%;
    background-color: white;
    width: 300px;
    /*height: 200px;*/
    border-radius: 8px;

    text-align: center;
  }

  .register {
    font-size: 14px;
    margin-top: 14px;
    margin-bottom: 14px;
    background: transparent;
    outline: none;
    border: 0;
  }
</style>