const colors = ["red", "blue", "green", "yellow"];
const color1 = colors.at(0);


// console.log(colors);
const popedColor = colors.pop();
// console.log(popedColor);
// console.log(colors);
colors.push("brown");
// console.log(colors);
const shiftedColor = colors.shift();
// console.log(shiftedColor);
// console.log(colors);
colors.unshift("black");
// console.log(colors);
colors.splice(1, 0, "purple", "pink");
// console.log(colors);
colors.splice(2, 3, "cyan", "magenta");
// console.log(colors);
colors.splice(0, 1);
// console.log(colors);

const asianCars = ["Toyota", "Honda", "Suzuki"];
const europeanCars = ["BMW", "Audi", "Mercedes"];
const americanCars = ["Ford", "Chevrolet", "Dodge"];
const allAsianEuropenCars = asianCars.concat(europeanCars);
const allCars = asianCars.concat(europeanCars, americanCars);

allCars.forEach((carBrand, index) => {
    // console.log(`${index}: ${carBrand}`);
    // console.log("This is a " + carBrand + " car");
});

const numebers1 = [100, 200, 300, 400, 500];
const result1 = numebers1.map((price) => price - 50);
// console.log(result1);

const numebers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result2 = numebers2.filter((num) => num % 2 === 0);
// console.log("result2", result2);

const numebers3 = [1, 7, 89, 9, 100, 4];
const result3 = numebers3.find((num) => num > 80);
// console.log(result3);

const numebers4 = [1, 2, 3, 4, 5];
const result4 = numebers4.reduce((total, num) => total + num, 0);
// console.log(result4);

for (const car of allCars) {
    console.log(car);
}