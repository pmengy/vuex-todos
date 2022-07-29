<template>
  <header class="header">
    <h1 :style="{ color: color }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      v-model="task"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="add"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('todos')

export default {
  data() {
    return {
      task: ''
    }
  },
  methods: {
    ...mapActions(['asyncAdd']),
    add() {
      if (!this.task) {
        return alert('任务不能为空')
      }
      this.asyncAdd(this.task)
      this.task = ''
    }
  },
  computed: {
    index() {
      return this.$store.state.ChangeColor.index
    },
    color() {
      return this.$store.state.ChangeColor.color[this.index]
    }
  }
}
</script>
