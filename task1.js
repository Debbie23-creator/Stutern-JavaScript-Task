// task 1 //
const isOldEnoughToDrink = (age) => {

    const legalDrinkingAge = 18;
    if (age < legalDrinkingAge) {
        return false;
    } else {
        return true;
    }
}

var output = isOldEnoughToDrink(22);
console.log(output);


// task 2 //

const isOldEnoughToDrinkAndDrive = (age) => {
    const isOldEnoughToDrinkAndDrive = 21;
    let illegalToDrinkAndDrive = true;
    let legalDrinkingAge = 21;
    if (age >= legalDrinkingAge && illegalToDrinkAndDrive || age <= legalDrinkingAge && illegalToDrinkAndDrive) {
        return false
    } else {
        return true
    }

}


var output = isOldEnoughToDrinkAndDrive(22);
console.log(output);

//task 3 //

function getProperty(obj, key) {
    return obj[key];
}

var output = getProperty(phone, shoe);
console.log(output)


// task 4 //
var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);

function addProperty(obj, key); {

}


const getAllKeys = (obj) => {

    return Object.keys(obj);

}

// Task 5 //

const isPersonOldEnoughToDrinkAndDrive = (obj, key) => {


    let legalAgeToDrive = 18;
    let illegalToDrinkAndDrive = true;

    if (person.age >= legalAgeToDrive && illegalToDrinkAndDrive || person.age <= legalAgeToDrive && illegalToDrinkAndDrive) {
        return false
    } else {

        return true;

    }


}

let person = {
    age: 45
}
var output = isPersonOldEnoughToDrinkAndDrive(person);
console.log(output);

// task 6 //

const computeAverageLengthOfWords = (x, y) => {

    return ((x.length) + (y.length)) / 2

}
let output = computeAverageLengthOfWords("code", "programs")
console.log(output);


// task 7 //
const transformFirstAndLast = (arr) => {

    let first = arr[0];

    let n = arr.length;

    let last = arr[n - 1];

    newObj = {

    }

    newObj[first] = last;

    return newObj


}

var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
let output = transformFirstAndLast(input)

console.log(output);

// task 8 //

let output = getAllKeys(input = {
    name: 'Sam',
    age: 25,
    hasP: ""
})

console.log(output);