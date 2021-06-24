import Vue from 'vue'
import App from './App.vue'

import store from './store'   //加這行

new Vue({
  store, //store:store,
  el: '#app',
  render: h => h(App)
})
