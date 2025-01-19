// let a = Number(prompt("Enter a num : "))
let a = 10

// let fact = 1
// for (let i=1; i<=a; i++){
//     fact *= i
// }

// console.log(fact)

// using reduce function

// let fact = Array.from(Array(a+1).keys()).slice(1,).reduce((a,b)=>{
//     return a*b
// })
// console.log(arr.slice(1,))
// let fact = arr.reduce((a,b)=>{
    //     return a*b
    // })
    
let fact = Array.from(Array(a+1).keys()).slice(1,).reduce((a,b)=>a*b)

console.log(fact)