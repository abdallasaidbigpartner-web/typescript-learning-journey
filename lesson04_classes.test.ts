// Professionalization pass: automated tests for Lesson 4's classes,
// verifying inheritance behavior, method overriding, and runtime
// validation (which TypeScript's compile-time types cannot catch).

import { describe, it, expect } from "vitest";
import { Employee, Manager } from "./lesson04_classes";

describe("Employee", () => {
    it("describes itself correctly", () => {
        const employee = new Employee("Sara", 2000);
        expect(employee.describe()).toBe("Sara earns 2000 per month.");
    });

    it("throws an error for a negative salary", () => {
        expect(() => new Employee("Test", -500)).toThrow("Salary cannot be negative");
    });
});

describe("Manager", () => {
    it("extends Employee's describe() with team info", () => {
        const manager = new Manager("Abdalla", 4000, 6);
        expect(manager.describe()).toBe("Abdalla earns 4000 per month. Manages a team of 6.");
    });

    it("throws an error for a negative team size", () => {
        expect(() => new Manager("Test", 3000, -1)).toThrow("Team size cannot be negative");
    });
});
