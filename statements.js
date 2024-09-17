const person1 = {
    name: 'John',
    age: 30,
    gender: 'M'
};

const person2 = {
    name: 'Sandy',
    age: 75,
    gender: 'F'
};

const person3 = {
    name: 'Peter',
    age: 65,
    gender: 'M'
};

const person4 = {
    name: 'Sarah',
    age: 12,
    gender: 'jfifu'
};

const checkGender = (person) => {
    if (person.gender === 'M') {
        console.log("This is a Male");
    } else if (person.gender === 'F') {
        console.log("This is a Female");
    } else {
        console.log("Unknown")
    }
};

const checkNumber = (num) => {
    const numType = typeof num;
    if (numType === 'number') {
        console.log("This is a number");
    } else {
        console.log("This is not a number");
    }
};

const checkTimeOfDay = (time) => {
    if (time < 12) {
        console.log("Good Morning");
    } else if (time < 18) {
        console.log("Good Afternoon");
    } else {
        console.log("Good Evening");
    }
};

// Operators
//  && # AND
//  || # OR
//  ! # NOT
//  ==

const checkAge = (person) => {
    if (person.age >= 18 && person.age <= 50) {
        console.log("This person is an adult");
    } else if (person.age < 18) {
        console.log("This person is a minor");
    } else if (person.age > 50) {
        console.log("This person is a senior citizen");
    } else {
        console.log("Unknown");
    }
}

// if (person1.gender === 'M' || person1.gender === 'F') {
//     console.log("person has a set gender");
// }

// if (person2.gender === 'M' && person2.age >= 60) {
//     console.log("This is a Male Senior Citizen");
// }

const checkValid = (value) => {
    if (!value) {
        return false;
    } else {
        return true;
    }
};

const values = [3, "", 45, "Jake", null, 0, undefined, { name: "Max" }, NaN];
const validValues = [];
for (let i = 0; i < values.length; i++) {
    const result = checkValid(values[i]);
    if (result) {
        console.log("Valid");
        validValues.push(values[i]);
    } else {
        console.log("Not Valid");
    }
}

console.log(values);
console.log(validValues);