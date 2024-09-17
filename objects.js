let x1 = 123;
console.log(x1.toString()); // returns 123 from variable x
console.log((123).toString());
console.log((100 + 23).toString());

let y = 9.656;
console.log(y.toFixed(2), typeof y.toFixed(2)) 
console.log(y.toFixed(4)) // returns 9.6560
console.log(y.toFixed(6))
console.log("===============")
console.log(y.toPrecision(), typeof y.toPrecision())
console.log(y.toPrecision(2)) // returns 9.7
console.log(y.toPrecision(4))
console.log(y.toPrecision(6))
console.log("===============")
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33")); // NaN
console.log(Number("10 33")); // NaN
console.log(Number("John")); // NaN
console.log(Number(new Date("2024-07-21")));
console.log("========ARRAYS=======")
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars.length);   // Returns the number of elements
console.log(cars.sort());  // Sorts the array

const cars2 = [];
cars2[0]= "Saab";
cars2[1]= "Volvo";
cars2[2]= "BMW";

const cars3 = new Array("Saab", "Volvo", "BMW");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
fruits.push("Lemon"); // Adds a new element (Lemon) to fruits

console.log("Array.isArray",Array.isArray(fruits));

// WARNING !!
// If you use named indexes, JavaScript will redefine the array to an object.

// After that, some array methods and properties will produce incorrect results.
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined

// Create an array with one element ???
const points = new Array(40);  

const x = 100;
console.log(x.toString());
// // let y = 7.3452;
// // console.log(y.toFixed(3)); // rounds to 7.345
// // console.log(y.toPrecision(8));

// // console.log(Number("10"));
// // console.log(Number("24"));
// // console.log(Number("1.893843"));
// // console.log(Number(true));
// // console.log(Number(false));
// // console.log(Number(new Date("2024-08-26")));
// //               0       1      2       3         4     5               6               
const colors = ["red", "blue", "green", "yellow", 89, { name: "max" }, true];
const colors2 = new Array("red", "blue", "green", "yellow", 89, { name: "max" }, true);

console.log(colors[0]);
colors[0] = "black";
console.log(colors[0]);
console.log(colors[1]);

console.log(colors.length);

const fruitsTwo = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Pineapple"];
console.log(fruitsTwo.sort());
console.log(fruitsTwo.toString());


const nums1 = [10];
console.log(nums1, typeof nums1);
const nums2 = new Array(10);
console.log(nums2);