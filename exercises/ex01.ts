// Create a function called concatSum that takes two generic arguments.
// These arguments could be strings or numbers. If both are strings, use the concat method; otherwise, just sum the numbers.
// If they are not of the same type, print an error message to the console; If they are not string or number, print an error message

function concatSum<T>(arg1: T, arg2: T): void {
  if (typeof arg1 === "string" && typeof arg2 === "string") {
    console.log(arg1 + arg2);
  } else if (typeof arg1 === "number" && typeof arg2 === "number") {
    console.log((arg1 as number) + (arg2 as number));
  } else if (typeof arg1 !== typeof arg2) {
    console.log("Error: Arguments must be of the same type.");
  } else {
    console.log("Error: Arguments must be strings or numbers.");
  }
}

// Test cases
concatSum("Hello", " World"); // Expected: Hello World
concatSum(10, 20);            // Expected: 30

// We use 'as any' here to bypass the strict type check for testing the error message
concatSum("10" as any, 20 as any);