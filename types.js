let name = "Mike"; // String
let age = 25; // Number
let isValid = true; // Boolean
let isCar = false; // Boolean
let emptyValue = null; // Null
let notDefined = undefined; // Undefined
let notDefinedV2; // Undefined
let person = {
    firstName: "Mike",
    lastName: "Samson"
} // Object
let person2 = {
    "firstName": "Mike",
    "lastName": "Samson"
} // Object
let today = new Date(); // Date
let aDate = new Date("2024-01-14"); // Date
let fruits = ["PawPaw", "Mango", "Orange"];
let random = [1, "Mike", true, null, undefined, { firstName: "Mike", lastName: "Samson" }, new Date()];
let random2 = [name, age, isValid, isCar, emptyValue, notDefined, person, today, aDate, fruits];

// Log Statments
console.log(name, "DType: ", typeof name);
console.log(age, "DType: ", typeof age);
console.log(isValid, "DType: ", typeof isValid);
console.log(isCar, "DType: ", typeof isCar);
console.log(emptyValue, "DType: ", typeof emptyValue);
console.log(notDefined, "DType: ", typeof notDefined);
console.log(notDefinedV2, "DType: ", typeof notDefinedV2);
console.log(person, "DType: ", typeof person);
console.log(person2, "DType: ", typeof person2);
console.log(today, "DType: ", typeof today);
console.log(aDate, "DType: ", typeof aDate);
console.log(fruits, "DType: ", typeof fruits);
console.log(random, "DType: ", typeof random);
console.log(random2, "DType: ", typeof random2);