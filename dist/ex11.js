"use strict";
// Create a generic function named `safeAccess` that safely accesses nested properties of an object using an array of keys.
// Demonstrate the function with different object structures and key sequences, including arrays and objects.
Object.defineProperty(exports, "__esModule", { value: true });
function safeAccess(obj, keys) {
    let current = obj;
    for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
            current = current[key];
        }
        else {
            return undefined;
        }
    }
    return current;
}
// Test cases
// 1. Nested Object (Ashley's profile)
const userProfile = {
    user: {
        details: {
            name: "Ashley",
            city: "Seoul"
        }
    }
};
const cityName = safeAccess(userProfile, ["user", "details", "city"]);
console.log(cityName); // Output: Seoul
// 2. Accessing non-existent key (Safe return)
const unknownValue = safeAccess(userProfile, ["user", "contact", "phone"]);
console.log(unknownValue); // Output: undefined
// 3. Array within object
const company = {
    teams: ["Design", "Dev", "HR"]
};
const secondTeam = safeAccess(company, ["teams", "1"]);
console.log(secondTeam); // Output: Dev
//# sourceMappingURL=ex11.js.map