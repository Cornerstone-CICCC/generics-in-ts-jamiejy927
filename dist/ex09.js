"use strict";
// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    elements = [];
    // Push: Add an element to the top
    push(element) {
        this.elements.push(element);
    }
    // Pop: Remove and return the top element
    pop() {
        return this.elements.pop();
    }
    // Optional: Check current items
    peek() {
        return this.elements;
    }
}
// Test cases
// 1. Stack of numbers
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // Output: 20
console.log(numberStack.pop()); // Output: 10
// 2. Stack of strings (Ashley & Ben)
const nameStack = new Stack();
nameStack.push("Ashley");
nameStack.push("Ben");
console.log(nameStack.pop()); // Output: Ben (Last in, first out!)
// 3. Stack of objects
const objStack = new Stack();
objStack.push({ id: 1 });
console.log(objStack.pop()); // Output: { id: 1 }
//# sourceMappingURL=ex09.js.map