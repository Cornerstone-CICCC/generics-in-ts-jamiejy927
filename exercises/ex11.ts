// Create a generic function named `safeAccess` that safely accesses nested properties of an object using an array of keys.
// Demonstrate the function with different object structures and key sequences, including arrays and objects.

function safeAccess<T>(obj: any, keys: string[]): T | undefined {
  let current = obj;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }

  return current as T;
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

const cityName = safeAccess<string>(userProfile, ["user", "details", "city"]);
console.log(cityName); // Output: Seoul

// 2. Accessing non-existent key (Safe return)
const unknownValue = safeAccess<string>(userProfile, ["user", "contact", "phone"]);
console.log(unknownValue); // Output: undefined

// 3. Array within object
const company = {
  teams: ["Design", "Dev", "HR"]
};
const secondTeam = safeAccess<string>(company, ["teams", "1"]);
console.log(secondTeam); // Output: Dev