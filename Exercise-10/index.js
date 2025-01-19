/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
    Crazy
    Amazing
    Fire

Shop name:
    Engine
    Foods
    Garments

Another Word:
    Bros
    Limited
    Hub
*/

let adj = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
}

let shop = {
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
}

let word = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

let a1 = Math.floor(Math.random() * 3) + 1
let s1 = Math.floor(Math.random() * 3) + 1
let w1 = Math.floor(Math.random() * 3) + 1

console.log(`Business Name is : ${adj[a1]} ${shop[s1]} ${word[w1]}`)
