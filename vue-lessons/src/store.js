import Vue from 'vue'


// 1.不修改main.js
import Vuex,{Store} from 'vuex'
Vue.use(Vuex);

const store = new Store({
  state:{//類似new Vue() 裡的 data
    count:0,
  },
  mutations:{//類似new Vue() 裡的 methods
            // Vuex 裡面只有mutatioms 可以修改state 裡面的值
    addCount(state){
      state.count +=1;
    },
  },
});

export default store;









// //2. 修改 main.js
// import Vuex from 'vuex'
// Vue.use(
