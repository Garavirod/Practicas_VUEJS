Vue.component('titulo', {
    template: `
            <div class="p-3 bg-secondary text-white">
                <h1> Shared number is : {{$store.state.sharedNumber}}</h1>
                <!-- we use 'commit for acces mutations'-->
                <button class="btn btn-dark" @click="$store.commit('less')">-</button>
                <child></child>
            </div>
        `
});