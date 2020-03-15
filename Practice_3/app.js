const app = new Vue({
    el: '#app',
    data: {
        title: 'GYM with Vuejs',
        task: [],
        newTask: ''
    },
    methods: {
        addTask: function() {
            console.log("You cliked", this.addTask);
            this.task.push({
                name: this.newTask,
                status: false,
            });
            this.newTask = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.task)); //We save on Gym-vue list the array 'task'
            console.log(this.task);

        },
        editTask: function(index) {
            console.log('Task index', index);
            this.task[index].status = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.task)); //We save on Gym-vue list the array 'task'

        },

        deleteTask: function(index) {
            console.log('Delete task', index);
            this.task.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.task)); //We save on Gym-vue list the array 'task'

        }
    },

    // This method is going to be executed when the app.js get load
    created: function() {
        let dataDB = JSON.parse(localStorage.getItem('gym-vue'));
        console.log("THIS IS DATA", dataDB);
        if (dataDB === null)
            this.task = [];
        else
            this.task = dataDB;
    }
});