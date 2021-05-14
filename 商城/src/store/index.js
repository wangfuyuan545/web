import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj:{}
  },
  mutations: {
    setObj(state,value){
      state.obj=value
    }
  },
  actions: {
  },
  modules: {
  }
})
