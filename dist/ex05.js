"use strict";
// Develop a generic function named `duplicateElements` that takes an array of type `T[]` and a number `n`, and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values of `n`.
Object.defineProperty(exports, "__esModule", { value: true });
function duplicateElements(array, n) {
    const result = [];
    for (const item of array) {
        for (let i = 0; i < n; i++) {
            result.push(item);
        }
    }
    return result;
}
// Test cases
// 1. With numbers (duplicate each 3 times)
console.log(duplicateElements([1, 2], 3));
// Output: [1, 1, 1, 2, 2, 2]
// 2. With strings (Ashley & Ben, duplicate each 2 times)
console.log(duplicateElements(["Ashley", "Ben"], 2));
// Output: ["Ashley", "Ashley", "Ben", "Ben"]
// 3. With booleans (duplicate each 2 times)
console.log(duplicateElements([true, false], 2));
// Output: [true, true, false, false]
//# sourceMappingURL=ex05.js.map