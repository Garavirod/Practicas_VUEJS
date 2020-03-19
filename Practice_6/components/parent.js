Vue.component('parent', {
    template: `
        <div class="p-5 bg-dark text-white">            
            <h2>This is the parent: {{dadMessage}}</h2>
            <button class="btn btn-danger" @click="dadMessage++">push me</button>
            <!--se ponen los puntos porque es un bind (propiedad del componente), de lo contrario se quitan-->
            <child :message="dadMessage"></child>
        </div>    
    `,
    data() { //Data propoerties of the component
        return {
            dadMessage: 0
        }
    },
});