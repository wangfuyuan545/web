<template>
  <div id="login">
    <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link to="/profile/reg">注册</router-link>
          </li>
        </ul>
    <form class="layui-form layui-form-pane">
      <div class="layui-form-item" v-bind:class="{'form-group--error':$v.name.$error}">
        <label class="layui-form-label">账号</label>
        <div class="layui-input-inline">
          <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input" v-model="name" v-on:input="setName($event.target.value)">
          <div class="error layui-form-mid" v-if="!$v.name.required">用户名不得为空</div>
          <div class="error layui-form-mid" v-if="!$v.name.email">用户名输入格式错误</div>
        </div>
      </div>
      <div class="layui-form-item" v-bind:class="{'form-group--error':$v.password.$error}">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-block">
          <input type="password" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input" v-model="password" v-on:input="setPassword($event.target.value)">
          <div class="error layui-form-mid" v-if="!$v.password.minLength">密码格式错误</div>
        </div>
      </div>
      <div class="layui-form-item" v-bind:class="{'form-group--error':$v.code.$error}">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-block">
          <input type="text" name="title" required  lay-verify="required" placeholder="" autocomplete="off" class="layui-input" v-model.trim="$v.code.$model">
          <div class="error layui-form-mid" v-if="!$v.code.minLength">验证码最低4位</div>
        </div>
      </div>
      <div class="layui-btn"><a href="http://localhost:8081/#/home/1">点击登录</a></div>
      <div class="layui-btn layui-btn-primary"><router-link v-bind:to="{name:'Forget'}">忘记密码</router-link></div>
    </form>
  </div>
</template>

<script>
import {required,email,minLength} from 'vuelidate/lib/validators'
export default {
  name:'login',
  data(){
    return{
      name:'',
      password:'',
      code:''
    }
  },
  validations:{
    name:{
      required,
      email
    },
    password:{
      required,
      minLength:minLength(6)
    },
    code:{
      required,
      minLength:minLength(4)
    }
  },
  methods:{
    setName(value){
      this.name=value
      this.$v.name.$touch()
    },
    setPassword(value){
      this.password=value
      this.$v.password.$touch()
    }
  },
  mounted(){
    window.vue=this
  }
}
</script>

<style lang="scss" scoped>
input{
  width: 190px;
}
#login{
  margin: 50px 100px;
}
.error{
    display: none;
  }
.form-group--error{
  .error{
    display: block;
    color: red;
  }
}
</style>