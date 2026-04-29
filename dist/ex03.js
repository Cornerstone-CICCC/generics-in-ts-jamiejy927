"use strict";
// Implement a generic function named `reverseArray` that takes an array of type `T[]` and reverses the order of elements in the same array.
// Provide test cases using arrays of different types, including numbers, strings, and custom objects.
Object.defineProperty(exports, "__esModule", { value: true });
function reverseArray(array) {
    return array.reverse();
}
// Test cases
// 1. With an array of numbers
const reversedNumbers = reverseArray([1, 2, 3, 4, 5]);
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
// 2. With an array of strings
const reversedStrings = reverseArray(["a", "b", "c"]);
console.log(reversedStrings); // Output: ["c", "b", "a"]
// 3. With an array of custom objects (Ashley & Ben!)
const users = [
    { id: 1, name: "Ashley" },
    { id: 2, name: "Ben" }
];
const reversedUsers = reverseArray(users);
console.log(reversedUsers); // Output: [{ id: 2, name: "Ben" }, { id: 1, name: "Ashley" }]
//# sourceMappingURL=ex03.js.map