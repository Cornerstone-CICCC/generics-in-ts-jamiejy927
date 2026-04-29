"use strict";
// Implement a generic function called `filterByType` that takes an array of type `T[]` and a type `U`.
// It should return a new array containing only elements of type `U`.
// Test the function with arrays containing various types and different target types `U`.
Object.defineProperty(exports, "__esModule", { value: true });
function filterByType(array, type) {
    return array.filter((item) => typeof item === type);
}
// Test cases
const mixedArray = [1, "Ashley", 2, "Ben", true, 3];
// 1. Filter only numbers
const onlyNumbers = filterByType(mixedArray, "number");
console.log(onlyNumbers); // Output: [1, 2, 3]
// 2. Filter only strings
const onlyStrings = filterByType(mixedArray, "string");
console.log(onlyStrings); // Output: ["Ashley", "Ben"]
// 3. Filter only booleans
const onlyBooleans = filterByType(mixedArray, "boolean");
console.log(onlyBooleans); // Output: [true]
//# sourceMappingURL=ex07.js.map