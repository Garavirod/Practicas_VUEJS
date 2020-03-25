import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: {
            title: '',
            status: false,
            color: ''
        }
    },
    mutations: {
        showLoading(state, payload) { //Where payload is an object which is sended like a param
            state.loading.title = payload.title;
            state.loading.status = true;
            state.loading.color = payload.color
        },
        hideLoading(state) {
            state.loading.status = false;
        }
    },
    actions: {},
    modules: {}
})