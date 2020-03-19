Vue.component('child', {
    template: `
        <div class="bg-warning text-white p-5">
        <!--al ser un bind el dato que recibe es dinamico cambia desde el padre hasta el hijo-->
            <h4>I'm the child and my dad says: <i>{{message}}</i></h4>
        </div>
    `,
    props: ['message'] //This is for recive information from other compoennt outside
});