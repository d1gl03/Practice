function calculate (a, b, operator) {
    if (operator === "+") {
        return a + b
    }else if (operator === "-") {
        return a - b
    }else if (operator === "/") {
        return a / b
    }else if (operator === "*") {
        return a * b
    }
}

const res = calculate.apply(null, [2, 3, "+"])
console.log(res)