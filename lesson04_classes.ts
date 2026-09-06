// Lesson 4: Classes
// Demonstrates class definition, constructors, inheritance with
// super(), method overriding, and access modifiers (private).
//
// Refactored (Phase 4 - Software Engineering) to add runtime input
// validation and JSDoc comments - since TypeScript's types are
// compile-time only, they don't catch invalid values like a
// negative salary at runtime.
//
// Professionalization pass: exported classes for testing, guarded
// demo code with require.main === module.

/** Represents a basic employee with a name and monthly salary. */
export class Employee {
    name: string;
    protected salary: number;

    constructor(name: string, salary: number) {
        if (salary < 0) {
            throw new Error("Salary cannot be negative");
        }
        this.name = name;
        this.salary = salary;
    }

    /** Returns a human-readable summary of this employee. */
    describe(): string {
        return `${this.name} earns ${this.salary} per month.`;
    }
}

/** A Manager is an Employee who also oversees a team. */
export class Manager extends Employee {
    private teamSize: number;

    constructor(name: string, salary: number, teamSize: number) {
        super(name, salary);
        if (teamSize < 0) {
            throw new Error("Team size cannot be negative");
        }
        this.teamSize = teamSize;
    }

    describe(): string {
        return `${super.describe()} Manages a team of ${this.teamSize}.`;
    }
}

if (require.main === module) {
    const employee1 = new Employee("Sara", 2000);
    const manager1 = new Manager("Abdalla", 4000, 6);

    console.log(employee1.describe());
    console.log(manager1.describe());

    try {
        const invalidEmployee = new Employee("Test", -500);
    } catch (error) {
        if (error instanceof Error) {
            console.log(`Validation caught an error as expected: ${error.message}`);
        }
    }
}
