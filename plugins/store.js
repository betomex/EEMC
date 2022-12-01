import Vue from 'vue'
import { Store } from 'vuex'
import { state, mutations } from '~/store'

const store = new Store({
  state,
  mutations
})

Vue.use(store)