var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

// function addAllFamilyLuckyNumbers(anArray){
//   var arr = [person.lucky_numbers, person2.lucky_numbers, person3.lucky_numbers]
  
//     var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    
//   // Running the for loop
//   for (let i = 0; i < arr.length; i++) {
//         sumOfAllLuckyNumbers += arr[i];
//     }
//     return sumOfAllLuckyNumbers;


//   //To-Do: loop and add; consider nested loops
//   //Hint: use the anArray variable to get all of the lucky numbers
  
// }

//Enter all your code here:
// THIS CHANGED 17 to 33 person1 lucky numbers//////////////
person.lucky_numbers[3] = 33;
// console.log(family.members[0].lucky_numbers[3]);
// THIS CREATED AND ADD THE NEW PERSON3 OBJECT TO FAMILY///////////

var person3 = {
    name: "Jimmy", 
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
}
family.members.push(person3);

// console.log(family.members);
// console.log(person3.lucky_numbers.reduce(function (previousValue, currentValue)));

// const array1 = [1, 2, 3, 4];

// THIS WORKS///////////////////////////////////////////////////////////////
let initialValue = 0;
let sumWithInitial = person.lucky_numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

let sumWithInitial2 = person2.lucky_numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

let sumWithInitial3 = person3.lucky_numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial + sumWithInitial2 + sumWithInitial3);

//Do not make changes below:
// console.log(addAllFamilyLuckyNumbers(family.members)); 