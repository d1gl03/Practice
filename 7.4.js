function setFullName(fullName) {
    this.fullName = fullName;
}

const person = {
    name: "Alice",
    age: 25
};

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person.fullName);