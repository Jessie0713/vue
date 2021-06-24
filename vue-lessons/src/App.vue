<template>
    <div> <!--HTML DOM template-->
        <button @click = "addCount">Add</button>
        <h1>{{count}}</h1>
    </div>
</template>
<script>
import store from './store'
export default {
  methods: {
  addCount(){
    store.commit('addCount');
  },
},
computed:{
  count(){
    return store.state.count;
  },
},
}
</script>