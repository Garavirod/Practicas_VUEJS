Vue.component('parent', {
    template: `
        <div class="p-5 bg-dark text-white">            
            <h2>This is the parent: {{dadMessage}}</h2>
            <button class="btn btn-danger" @click="dadMessage++">push me</button>
            <h4>My son says : {{sonMessage}}</h4>
            <!--se ponen los puntos porque es un bind (propiedad del componente), de lo contrario se quitan-->
            <!--We recive an event using @ we called the event-->
            <!--sobreescribumos el valor de la data del padre, en ese caso sonMess con lo que $vent retorne-->
            <child :message="dadMessage" @messageFromSon="sonMessage = $event"></child>
        </div>    
    `,
    data() { //Data propoerties of the component
        return {
            dadMessage: 0,
            sonMessage: ''
        }
    },
});