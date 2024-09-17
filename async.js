// console.log("One");
// setTimeout(() => {
//     console.log("Two");
// }, 2000); // 2 seconds delay
// console.log("Three");

// console.log("One");
// const delay = Date.now() + 2000; // 2 seconds delay

// const delayFunc = () => {
//     console.log("Two");
// };

// while (Date.now() < delay) {
//     // Loop until the delay is over
// }

// delayFunc();

// console.log("Three");

const orderFood = (food) => {
    console.log("Ordering food...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food === "pizza") {
                resolve(`${food} is ready`);
            } else {
                reject(`${food} is not available`);
            }
        }, 2000);
    });
};

orderFood("pizza")
    .then((result) => {
        console.log("result", result);
    }).catch((error) => {
        console.log("error", error);
    });

console.log("Order placed");