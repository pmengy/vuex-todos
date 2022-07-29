<template>
  <div>
    <button @click="changeColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <my-button type="info" color="red">登录</my-button>
    <my-button type="danger" background="pink">删除</my-button>
    <my-button type="success" :border="false">新增</my-button>
    <my-button type="warning" round disabled>注册</my-button>
  </div>
</template>

<script>
import './styles/base.css'
import './styles/index.css'
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import { createNamespacedHelpers } from 'vuex'
import MyButton from './components/MyButton.vue'
const { mapActions } = createNamespacedHelpers('ChangeColor')
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    MyButton
  },

  created() {},

  methods: {
    ...mapActions(['setIndex']),
    changeColor() {
      // 生成0-10随机正整数
      this.setIndex(Math.floor(Math.random() * 10 + 1))
    }
  }
}
</script>

<style scoped></style>
