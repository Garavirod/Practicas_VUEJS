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
});