const app = new Vue({
    el: '#app',
    data: {
        message: 'Hi my name is Rodrigo',
        counter: 0
    },
    computed: {
        invertido() {
            return this.message.split('').reverse().join('');
        },
        color() {
            return {
                'bg-success': this.counter <= 20,
                'bg-warning': this.counter > 20 && this.counter <= 50,
                'bg-danger': this.counter > 50
            }
        }
    },
});