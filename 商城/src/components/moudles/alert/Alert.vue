<template>
  <div v-show="isShow">
    <div class="alert">
      <div>{{msg}}</div>
      <div class="btnCommon success" v-on:click="close()">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Alert',
  props:{
    msg:{
      type:String,
      default:''
    },
    isShow:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    close(){
      this.isShow=false
    }
  }
}
</script>

<style scoped>
.alert{
  width: 300px;
  height: 150px;
  position: fixed;
  background-color: #fff;
  border-radius: 6px;
  left: 50%;
  right: 50%;
  margin-left: -150px;
  margin-top: -75px;
  padding: 20px 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 3000;
}
.btnCommon{
  width: 105px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 6px;
}
.success{
  background-color: #009688;
  color: #fff;
}
</style>