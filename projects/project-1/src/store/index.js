import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fruit: [
            { id: 1, name: 'Pear', quantity: 0 },
            { id: 2, name: 'Orange', quantity: 0 },
            { id: 3, name: 'Apple', quantity: 0 },
            { id: 4, name: 'Pineapple', quantity: 0 },
            { id: 5, name: 'Tangerina', quantity: 0 },
            { id: 6, name: 'Watermelon', quantity: 0 },
            { id: 7, name: 'Grapes', quantity: 0 },
            { id: 8, name: 'Strawberries', quantity: 0 },
        ]
    },
    mutations: {
        increase(state, idx) {
            state.fruit[idx].quantity++
        },
        resetFruit(state) {
            for (let i = 0; i < state.fruit.length; i++)
                state.fruit[i].quantity = 0

        }

    },
    actions: {},
    modules: {}
})