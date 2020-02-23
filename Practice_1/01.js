const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hello world with VUEjs',
        fruts: ['Pear', 'Watermelon', 'Orange', 'Apple'],
        cars: [
            { nameCar: 'Mazda', quantity: 10 },
            { nameCar: 'Kia', quantity: 10 },
            { nameCar: 'Mustang', quantity: 0 },
            { nameCar: 'Chevelle', quantity: 10 },
            { nameCar: 'Corla 86', quantity: 10 }
        ],
        newCar: '',
        total: 0
    },
    methods: {
        addingCars() {
            console.log("you've cliked addingCars Method !!");
            // With 'this' we can access to many properties on the same instance
            this.cars.push({ nameCar: this.newCar, quantity: 0 });
            this.newCar = '';
            this.newquantity = '';
        }
    },
    computed: {
        additionCars() {
            /** 
             * This function is going to be executed each time 'quantity'
             * gets canhge.
             * Each time you modify app's property this function is going to be executed
             */
            this.total = 0;
            for (car of this.cars)
                this.total += car.quantity;

            return this.total;
        }
    },
});