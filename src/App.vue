<template>
  <div id="main-warp" >
    <!--路由匹配到的组件将渲染到这里-->
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#main-warp {
}
</style>
