"use strict";
// Write a generic function called `getFirstElement` that accepts an array of type `T[]` and returns the first element.
// Create test cases using arrays of various types to demonstrate that the function works correctly.
// Don't forget to cover the situation where the array is empty.
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstElement(array) {
    // If the array is empty, it will naturally return undefined
    return array[0];
}
// Test cases
// 1. Array of strings
console.log(getFirstElement(["Ashley", "Ben", "Jamie"])); // Output: Ashley
// 2. Array of numbers
console.log(getFirstElement([100, 200, 300])); // Output: 100
// 3. Empty array (The special case!)
console.log(getFirstElement([])); // Output: undefined
// 4. Array of objects
console.log(getFirstElement([{ role: "Admin" }, { role: "User" }])); // Output: { role: "Admin" }
//# sourceMappingURL=ex04.js.map