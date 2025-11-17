const users = [
    {
        name: "broly",
        age: 23
    },
    {
        name: "adam",
        age: 17,
    },
    {
        name: "korey",
        age: 26
    }
];

const grownUsers = [];
const usernames = [];
for (let user of users) {
    if (user.age >= 18) {
        grownUsers.push(user)
    }
}

for (let name of users) {
    usernames.push(name.name)
}

console.log(grownUsers, usernames)