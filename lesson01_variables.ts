// Lesson 1: Variables & Basic Types
// Demonstrates TypeScript's type annotations, enforced at compile time,
// and template literals for formatted output.
//
// Professionalization pass: extracted the formatting logic into a
// named, exported function so it can be tested - rather than leaving
// the template literal as inline, untestable script code.

export function describePerson(name: string, age: number, height: number): string {
    return `${name} is ${age} years old and ${height}m tall.`;
}

if (require.main === module) {
    const firstName: string = "Abdalla";
    const age: number = 20;
    const height: number = 1.75;
    const isActive: boolean = true;

    console.log(describePerson(firstName, age, height));
}
