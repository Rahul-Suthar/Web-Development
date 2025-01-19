/* Create a Faulty calculator using Js

This Calculator does following:
1. Takes two nums as input from user.
2. It performs wrong operations as follows:
    +  --> -
    * --> +
    - --> /
    / --> **

It performs wrong operation 10% of the times
*/

const prompt = require('prompt-sync')();

let prob = Math.random()
let b = prompt("Enter second num : ")
let a = prompt("Enter first num : ")
let c = prompt("Enter operation : ")

let obj = {
    '+': '-',
    '-': '/',
    '*': '+',
    '/': '**',
}

if (prob < 0.1){
    console.log(`The result is : ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
    console.log(`The result is : ${eval(`${a} ${c} ${b}`)}`)
}

// let sum, sub, mul, div;

// if (prob < 0.1){
//     sum = (a,b)=> { console.log(a-b) }
//     sub = (a,b)=> { console.log(a/b) }
//     mul = (a,b)=> { console.log(a+b) }
//     div = (a,b)=> { console.log(a**b) }
// }
// else{
//     sum = (a,b) => { console.log(a+b) }
//     sub = (a,b) => { console.log(a-b) }
//     mul = (a,b) => { console.log(a*b) }
//     div = (a,b) => { console.log(a/b) }
// }

// let op = prompt("Enter operation :- sum, sub, mul, div : ")

// if (op=='sum') sum(a,b)
// else if (op=='sub') sub(a,b)
// else if (op=='mul') mul(a,b)
// else if (op=='div') div(a,b)
// else console.log("Wrong operation selected!")
