<template>
  <div id="cart">
    <div class="left">商品名称
      <div>{{obj.name}}</div>
    </div>
    <div class="mid">商品单价
      <div>{{obj.price}}</div>
    </div>
    <div class="right">商品数量
      <div>
        <button v-on:click="minus(count)">-</button>
        <span>{{count}}</span>
        <button v-on:click="plus(count)">+</button>
      </div>
    </div>
    <div class="bottom">结算价格：{{total}}</div>
    <button class="pay">支付</button>
  </div>
</template>

<script>
export default {
  name:'Cart',
  data(){
    return{
      obj:this.$store.state.obj,
      count:1
    }
  },
  methods:{
    minus(count){
      this.count--;
      if(this.count<0){
        this.count=0;
      }
    },
    plus(count){
      this.count++;
    }
  },
  computed:{
    total(){
      let sum=this.count*this.obj.price
      return sum
    }
  }
}
</script>

<style scoped>
.left{
  position: absolute;
  left: 200px;
}
.mid{
  position: absolute;
  left:600px;
}
.right{
  position: absolute;
  left: 1000px;
}
#cart{
  font-size: 20px;
}
.bottom{
  position: absolute;
  left: 400px;
  top: 500px;
}
.pay{
  position: absolute;
  left: 700px;
  top: 500px;
}
</style>