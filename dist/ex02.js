"use strict";
// Create a generic function named `identity` that takes a single argument of type `T` and returns that argument.
// Create a few test cases, such as using the function with numbers, strings, and custom objects to demonstrate its type flexibility.
Object.defineProperty(exports, "__esModule", { value: true });
function identity(arg) {
    return arg;
}
// Test cases
// 1. With a number
const numResult = identity(100);
console.log(numResult); // Output: 100
// 2. With a string
const strResult = identity("Hello Generics");
console.log(strResult); // Output: Hello Generics
// 3. With a custom object
const objResult = identity({ id: 1, name: "Jamie" });
console.log(objResult); // Output: { id: 1, name: "Jamie" }
//# sourceMappingURL=ex02.js.map