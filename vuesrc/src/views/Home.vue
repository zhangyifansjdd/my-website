<template>
  <div class="home">
    <MyNest></MyNest>
    <div>
      <a  href="https://beian.miit.gov.cn">备案号 （豫ICP备19046396号）</a>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyNest from "@/components/MyNest";

export default {
  name: 'Home',
  components: {
    HelloWorld,MyNest
  },
}
</script>

<style scoped>
.home{
}
</style>
