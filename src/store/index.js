import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import items from './modules/items'

Vue.use(Vuex)
export default new Vuex.Store({
  mutations: {
    ...vuexfireMutations
  },
  modules: {
    items,
  },
})
