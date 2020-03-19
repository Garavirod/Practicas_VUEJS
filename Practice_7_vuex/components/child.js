Vue.component('child', {
    template: `
        <div class="bg-primary p-3 text-white m-3">
            <h3>Im the son and shared number is {{$store.state.sharedNumber}}</h3>
            <button class="btn btn-danger" @click="$store.commit('increase')">+</button>
        </div>
    
    `
});