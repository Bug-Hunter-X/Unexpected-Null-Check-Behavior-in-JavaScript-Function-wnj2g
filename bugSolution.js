function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error('a and b cannot be null or undefined');
  }
  // ... rest of the function
}