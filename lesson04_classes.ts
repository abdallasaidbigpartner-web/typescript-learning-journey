// Lesson 4: Classes
// Demonstrates class definition, constructors, inheritance with
// super(), method overriding, and access modifiers (private).

class Employee {
    name: string;
    protected salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    describe(): string {
        return `${this.name} earns ${this.salary} per month.`;
    }
}

class Manager extends Employee {
    private teamSize: number;

    constructor(name: string, salary: number, teamSize: number) {
        super(name, salary);
        this.teamSize = teamSize;
    }

    describe(): string {
        return `${super.describe()} Manages a team of ${this.teamSize}.`;
    }
}

const employee1 = new Employee("Sara", 2000);
const manager1 = new Manager("Abdalla", 4000, 6);

console.log(employee1.describe());
console.log(manager1.describe());
