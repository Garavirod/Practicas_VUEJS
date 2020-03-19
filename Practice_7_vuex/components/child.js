Vue.component('child', {
    template: `
        <div class="bg-primary p-3 text-white m-3">
            <h3>Im the son and shared number is {{sharedNumber2}}</h3>
            <p>Other data from store : <i>'{{sharedData}}'</i></p>
            <button class="btn btn-danger" @click="increase">+</button>
            <button class="btn btn-dark" @click="less">-</button>
            <button class="btn btn-success" @click="lessN(3)"> - 3</button>
        </div>
    
    `,
    computed: {
        //W're mapping all 'state' of the store.
        //Inside of array goes all you want to use of 'state' in this component
        //DESTRUCTURATION
        ...Vuex.mapState(['sharedNumber2', 'sharedData']) //In this case we are going to use 'sharedNumber2' in our tamplate
    },
    //We can mapping the mutattions too using destructuration
    methods: {
        ...Vuex.mapMutations(['increase', 'less', 'lessN'])
    },
});