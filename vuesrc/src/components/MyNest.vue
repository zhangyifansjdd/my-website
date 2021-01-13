<template>
  <div class="vue-canvas-nest-element">
  </div>
</template>
<script>
  import CanvasNest from 'canvas-nest.js';

  export default {
    name: 'MyNest',
    props: {
      config: {
        type: Object,
        default() {
          return {
            color: '204,204,204',
            count: 260,
            opacity: 0.7,
            zIndex: -1
          }
        }
      },
      el: {
        type: String,
        default: '.vue-canvas-nest-element'
      }
    },
    mounted() {
      this.createCanvasNest()
    },
    methods: {
      createCanvasNest() {
        const elm = document.querySelector(this.el)
        this.cn = new CanvasNest(elm, this.config)
      }
    },
    beforeDestroy() {
      const elm = document.querySelector(this.el)
      this.cn.destroy()
    }
  }
</script>
<style scoped>
  .vue-canvas-nest-element {
    background: white;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
    /*opacity: 0.7;*/
  }
</style>