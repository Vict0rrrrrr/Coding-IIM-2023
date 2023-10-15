let student = {
    name: "Thomas",
    favoriteFood: "Donut sucré au sucre",
    city: "Choucrouteland"
}

let totalCharacters = 0
Object.values(student).forEach(property => {
    totalCharacters += property.length
})

if (totalCharacters % 2 === 0) {
    console.log("pair")
} else {
    console.log("impair")
}