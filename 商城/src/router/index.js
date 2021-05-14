import Vue from 'vue'
import VueRouter from 'vue-router'

const Login=()=>import('../views/Login.vue')
const Forget=()=>import('../views/Forget.vue')
const Reg=()=>import('../views/Reg.vue')
const Profile=()=>import('../views/Profile.vue')
const Home=()=>import('../views/Home.vue')
const Goods=()=>import('../views/Goods.vue')
const Goods2=()=>import('../views/Goods2.vue')
const Goods3=()=>import('../views/Goods3.vue')
const Goods4=()=>import('../views/Goods4.vue')
const Goods5=()=>import('../views/Goods5.vue')
const Cart=()=>import('../views/Cart.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/profile'
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'',
        redirect:'1'
      },
      {
        path:'1',
        component:Goods
      },
      {
        path:'2',
        component:Goods2
      },
      {
        path:'3',
        component:Goods3
      },
      {
        path:'4',
        component:Goods4
      },
      {
        path:'5',
        component:Goods5
      }
    ]
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile,
    children:[
      {
        path:'',
        redirect:'login'
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'forget',
        name: 'Forget',
        component: Forget
      },
      {
        path:'reg',
        name:'Reg',
        component:Reg
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
