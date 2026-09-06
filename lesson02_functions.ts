// Lesson 2: Functions & Type Annotations
// Demonstrates typed function parameters/return values, optional
// parameters, and arrow function syntax.
//
// Professionalization pass: exported functions for testing, and
// guarded the demo code with require.main === module so importing
// this file (e.g. in tests) doesn't print demo output.

export function add(a: number, b: number): number {
    return a + b;
}

export function greet(name: string, greeting?: string): string {
    return `${greeting ?? "Hello"}, ${name}!`;
}

export const square = (n: number): number => n * n;

if (require.main === module) {
    console.log(add(4, 6));
    console.log(greet("Abdalla"));
    console.log(greet("Sara", "Welcome"));
    console.log(square(5));
}
