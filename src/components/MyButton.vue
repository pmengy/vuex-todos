<template>
  <div>
    <button
      class="my-button"
      :disabled="disabled"
      :class="[
        `my-button-${type}`,
        { 'is-round': round },
        { 'is-disabled': disabled }
      ]"
      :style="{
        color: color,
        backgroundColor: background,
        border: border ? '1px solid #c6e2ff' : 'unset'
      }"
    >
      <span><slot></slot></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  data() {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    color: {
      type: String,
      default: '#666'
    },
    background: {
      type: String,
      default: '#fff'
    },
    border: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  created() {},

  methods: {}
}
</script>

<style scoped lang="less">
.my-button {
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #ededed;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.my-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.my-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.my-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.my-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.my-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
.my-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.my-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.4;
}
</style>
