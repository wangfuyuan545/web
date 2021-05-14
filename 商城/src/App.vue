<template>
  <div id="app">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>

import Footer from '../src/components/Footer.vue'
import Tabbar from '../src/components/Tabbar.vue'
export default {
  name:'app',
  components:{
    'imooc-footer':Footer,
    'tabbar':Tabbar
  }
}
</script>

<style lang="scss">
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
</style>
