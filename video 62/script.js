
let adjectives={
    1:"crazy",
    2:"amazing",
    3:"fire"
}

let shop_name={
    1:"engine",
    2:"foods",
    3:"garments"
}

let another_word={
    1:"bros",
    2:"limited",
    3:"hub"
}
console.log(`your brand name is ${adjectives[Math.ceil(Math.random()*3)] } ${shop_name[Math.ceil(Math.random()*3)] } ${another_word[Math.ceil(Math.random()*3)] } `)


console.log(Object.keys(adjectives).length);