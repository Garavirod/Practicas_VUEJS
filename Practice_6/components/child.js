Vue.component('child', {
    template: `
        <div class="bg-warning text-white p-5">
        <!--al ser un bind el dato que recibe es dinamico cambia desde el padre hasta el hijo-->
            <h4>I'm the child and my dad says: <i>{{message}}</i></h4>
            <h2>{{sonMessage}}</h2>
        </div>
    `,
    props: ['message'], //This is for recive information from other compoennt outside
    data() {
        return {
            sonMessage: 'I need money'
        }
    },
    //it is executed when whole DOM and it's data have been loaded
    mounted() {
        // Let's emmit an event
        this.$emit('messageFromSon', this.sonMessage); //'message' can be any name you want
    },
});