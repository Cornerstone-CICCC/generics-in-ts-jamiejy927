"use strict";
// Develop a generic function named `customMap` that takes an array of type `T[]` and a mapping function `mapper: (item: T) => U`, and returns a new array of type `U[]`.
// Test the function with arrays of different types and custom mapping functions.
Object.defineProperty(exports, "__esModule", { value: true });
function customMap(array, mapper) {
    const result = [];
    for (const item of array) {
        result.push(mapper(item));
    }
    return result;
}
// Test cases
// 1. Convert numbers to strings
const numbers = [1, 2, 3];
const stringNumbers = customMap(numbers, (num) => `Number: ${num}`);
console.log(stringNumbers); // Output: ["Number: 1", "Number: 2", "Number: 3"]
// 2. Extract names from objects (Ashley & Ben!)
const users = [{ name: "Ashley", age: 25 }, { name: "Ben", age: 30 }];
const namesOnly = customMap(users, (user) => user.name);
console.log(namesOnly); // Output: ["Ashley", "Ben"]
// 3. Double the numbers
const doubled = customMap([10, 20, 30], (n) => n * 2);
console.log(doubled); // Output: [20, 40, 60]
//# sourceMappingURL=ex10.js.map