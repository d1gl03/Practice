function printInfo () {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}
const person = {
    name: "Арсений",
    age: "16"
}
printInfo.call(person)