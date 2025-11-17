function uniquesort(array) {
    return Array.from(new Set(array)).sort((a, b) => a - b);
}
console.log(uniquesort([1,3,3,4,2,2]));