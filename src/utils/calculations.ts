// utils/calculations.ts

// Define your calculation functions here
export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const multiply = (a: number, b: number) => a * b;
export const divide = (a: number, b: number) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};
