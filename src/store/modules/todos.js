export default {
  namespaced: true,
  state: {
    todoList: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  getters: {},
  mutations: {
    // 初始化数据
    delete(state, payload) {
      state.todoList.splice(payload, 1)
    },
    toggle(state, payload) {
      state.todoList[payload].done = !state.todoList[payload].done
    },
    add(state, payload) {
      state.todoList.unshift({
        id:
          state.todoList.length === 0
            ? 1
            : state.todoList[state.todoList.length - 1].id + 1,
        name: payload,
        done: false
      })
    }
  },
  actions: {
    asyncDelete({ commit }, payload) {
      commit('delete', payload)
    },
    asyncToggle({ commit }, payload) {
      commit('toggle', payload)
    },
    asyncAdd({ commit }, payload) {
      commit('add', payload)
    }
  }
}
