<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="item in todoList"
      :key="item.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" @click="done(item.id)" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('todos')
export default {
  data() {
    return {}
  },
  computed: {
    todoList() {
      return this.$store.state.todos.todoList
    }
  },
  methods: {
    ...mapActions(['asyncDelete', 'asyncToggle']),
    del(id) {
      const index = this.todoList.findIndex((item) => item.id === id)
      this.asyncDelete(index)
    },
    done(id) {
      const index = this.todoList.findIndex((item) => item.id === id)
      this.asyncToggle(index)
    }
  }
}
</script>
