Vue.component('saludo', {
    template: '<h1> {{saludo}}</h1>',
    data() {
        return {
            saludo: 'Hi from vue!!'
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
        saludo: 'HI BITCH',
    }
});