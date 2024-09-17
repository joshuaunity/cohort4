// const car = { brand: 'Toyota', color: 'Red', speed: 200, model: 'Camry' };

class Car {
    #radio;

    constructor(brand, color, speed, model, radio) {
        this.brand = brand;
        this.color = color;
        this.speed = speed;
        this.model = model;
        this.#radio = radio;
    }

    carDetails() {
        let details;
        if (this.#radio) {
            details = `This is a ${this.color} ${this.brand} ${this.model} with a top speed of ${this.speed} km/h and a radio`;
        } else {
            details = `This is a ${this.color} ${this.brand} ${this.model} with a top speed of ${this.speed} km/h`;
        }
        return details;
    }

    drive() {
        return `The ${this.color} ${this.brand} ${this.model} is driving`;
    }

    stop() {
        return `The ${this.color} ${this.brand} ${this.model} has stopped`;
    }
};

class SportCar extends Car {
    constructor(brand, color, speed, model, radio, spoiler) {
        super(brand, color, speed, model, radio);
        this.spoiler = spoiler;
    }

    useNitro() {
        return `The ${this.color} ${this.brand} ${this.model} is using nitro`;
    }
}

const car = new Car('Toyota', 'Red', 200, 'Camry', false);
console.log(car.radio);
// console.log(car.carDetails());
// console.log(car.drive());
// console.log(car.stop());
// const ToyotaSportCar = new SportCar(true);
// console.log(ToyotaSportCar.carDetails());
// console.log(ToyotaSportCar.useNitro());

// // const car2 = new Car('Toyota', 'Blue', 180, 'Corolla');
// // console.log(car2.carDetails());
// // console.log(car2.drive());
// // console.log(car2.stop());
// // car3 = new Car('Nissan', 'Black', 250, 'Maxima');
// // console.log(car3.carDetails());
// // console.log(car3.drive());
// // console.log(car3.stop());