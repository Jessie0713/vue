const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        addCount(state){
            state.count += 1;
        },
    },
});

export default store;