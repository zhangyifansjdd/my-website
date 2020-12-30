<template>
  <div style="font-size: 30px">
    <button style="margin: 10px" @click="test">按钮1</button>
    <button style="margin: 10px" @click="test1">按钮2</button>
  </div>
</template>

<script>
  export default {
    name: "Test",
    mounted() {
      setTimeout(() => {
        window.location.href = 'weixin://dl/business/?ticket=lec1d8be1ec4ebfa2ec97ed884d0d844e';
      }, 2000)
    },
    methods: {
      test() {
        window.location.href = 'weixin://dl/business/?ticket=lec1d8be1ec4ebfa2ec97ed884d0d844e';
      },
      test1() {
        window.location.href = 'alipays://platformapi/startapp?appId=2018112062226732&page=pages/newhome/newhome&query=alipay_msg_channel_id=template&alipay_msg_type=hby4q';
      }
    }
  }
</script>

<style scoped>

</style>