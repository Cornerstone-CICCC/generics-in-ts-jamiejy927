"use strict";
// Define a generic function named `createPair` that takes two arguments of types `A` and `B` and returns them as a pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B` parameters.
Object.defineProperty(exports, "__esModule", { value: true });
function createPair(arg1, arg2) {
    return [arg1, arg2];
}
// Test cases
// 1. Number and String
const pair1 = createPair(1, "Apple");
console.log(pair1); // Output: [1, "Apple"]
// 2. String and Boolean (Ashley's status)
const pair2 = createPair("Ashley", true);
console.log(pair2); // Output: ["Ashley", true]
// 3. Object and Number
const pair3 = createPair({ id: 101 }, 500);
console.log(pair3); // Output: [{ id: 101 }, 500]
//# sourceMappingURL=ex06.js.map