import Vue from 'vue'
import App from './App.vue'
import store from './store'
import MyButton from './components/MyButton.vue'

Vue.config.productionTip = false
Vue.component('MyButton', MyButton)

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
