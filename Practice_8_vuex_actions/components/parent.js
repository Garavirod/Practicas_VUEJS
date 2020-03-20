Vue.component('parent', {
    template: `
            <div class="p-3 bg-secondary text-white">
                <h1> Shared number is : {{getSharedData}}</h1>
                <!-- we use 'commit for acces mutations'and we use only '$' in tamplates -->
                <button class="btn btn-dark" @click="$store.commit('less')">-</button>
                <child></child>
            </div>
        `,
    computed: {
        getSharedData() {
            return store.state.sharedNumber;
        }
    },
});