import AlertComponent from './Alert.vue'
const Alert={}
Alert.install=(Vue)=>{
  const AlertConstructor=Vue.extend(AlertComponent)
  const instance=new AlertConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  Vue.prototype.$alert=(msg)=>{
    instance.msg=msg
    instance.isShow=true
  }
}
export default Alert