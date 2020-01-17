/*let lang1 = "js"
 console.log(`lang1: ${lang1}`);

 let lang2 = lang1
 console.log(`lang2: ${lang2}`);

 lang1 = "java"
 console.log(`lang1: ${lang1}`);
 console.log(`lang2: ${lang2}`);
 */

let user1 = {
    name: "Vik",
    address: {town: "Lvov", street: "V Velykogo"},
    hobbies: ["reading", "swimming"],
}

let user2 = user1;
let user3 = Object.assign({}, user1);

let user4 = {
    name: "Vik",
    address: {town: "Lvov", street: "V Velykogo"},
    hobbies: ["reading", "swimming"],
}
let user5 = {...user1, gen: 'male'};
let myHobbies = [...user1.hobbies, '']

user1.name = "Dik";

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user1 === user2);
console.log(user1 === user3);
console.log(user1.hobbies === user3.hobbies);
console.log(user1 === user4);
//console.log(global);

console.log(typeof user1.address)
console.log(typeof [1])
console.log(user5)
console.log(myHobbies)
console.log(user1);


/*
let obj = {};
let some = 6;
some = "fefe";
console.log(some);
*/

const obj2 = {name: ''}