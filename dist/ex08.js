"use strict";
// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.
Object.defineProperty(exports, "__esModule", { value: true });
class Dictionary {
    data = new Map();
    // Add a key-value pair
    add(key, value) {
        this.data.set(key, value);
    }
    // Retrieve a value by its key
    get(key) {
        return this.data.get(key);
    }
    // Delete a key-value pair
    delete(key) {
        this.data.delete(key);
    }
}
// Test cases
// 1. Key: string, Value: number (e.g., Scores)
const scores = new Dictionary();
scores.add("Ashley", 100);
scores.add("Ben", 95);
console.log(scores.get("Ashley")); // Output: 100
// 2. Key: number, Value: string (e.g., ID to Name)
const users = new Dictionary();
users.add(1, "Jamie");
users.delete(1);
console.log(users.get(1)); // Output: undefined (deleted)
// 3. Key: string, Value: object
const config = new Dictionary();
config.add("main", { theme: "dark" });
console.log(config.get("main")); // Output: { theme: 'dark' }
//# sourceMappingURL=ex08.js.map