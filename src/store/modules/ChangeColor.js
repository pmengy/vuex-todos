export default {
  namespaced: true,
  state: {
    color: [
      'red',
      'blue',
      'pink',
      'yellow',
      'black',
      'green',
      'purple',
      'gray',
      'orange',
      'skyblue',
      'brown'
    ],
    index: null
  },
  getters: {},
  mutations: {
    SET_INDEX(state, index) {
      state.index = index
    }
  },
  actions: {
    setIndex({ commit }, index) {
      commit('SET_INDEX', index)
    }
  }
}
