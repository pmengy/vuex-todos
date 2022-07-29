import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import ChangeColor from './modules/ChangeColor'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todos,
    ChangeColor
  },
  plugins: [createVuexPersisted()]
})
