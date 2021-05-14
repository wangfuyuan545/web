<template>
  <div class="tabbar">
    <div class="tabbar-item"><router-link to='/home'>首页</router-link></div>
    <div class="tabbar-item"><router-link to='/catagory'>分类</router-link></div>
    <div class="tabbar-item"><router-link to='/cart'>购物车</router-link></div>
    <div class="tabbar-item"><router-link to='/profile'>我的</router-link></div>
  </div>
</template>

<script>
export default {
  name:'Tabbar'
}
</script>

<style scoped>
.tabbar{
  display: flex;/*学会使用弹性盒子*/ 
  background-color: rgb(224, 224, 202);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.tabbar-item{
  flex: 1;/*占满*/
  line-height: 78px;
  text-align: center;
  font-size: 20px;
}
.tabbar-item a{
  display: inline-block;
}
.router-link-active{
  color:red;
}
a{
  text-decoration: none;
}

</style>