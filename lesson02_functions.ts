// Lesson 2: Functions & Type Annotations
// Demonstrates typed function parameters/return values, optional
// parameters, and arrow function syntax.

function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string, greeting?: string): string {
    return `${greeting ?? "Hello"}, ${name}!`;
}

const square = (n: number): number => n * n;

console.log(add(4, 6));
console.log(greet("Abdalla"));
console.log(greet("Sara", "Welcome"));
console.log(square(5));
