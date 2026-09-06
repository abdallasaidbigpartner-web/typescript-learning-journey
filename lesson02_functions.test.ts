// Professionalization pass: automated tests for Lesson 2's functions.
//
// Demonstrates unit testing typed functions with Vitest - verifying
// behavior (including the optional-parameter default) rather than
// just checking the code compiles and runs once.

import { describe, it, expect } from "vitest";
import { add, greet, square } from "./lesson02_functions";

describe("add", () => {
    it("adds two numbers correctly", () => {
        expect(add(4, 6)).toBe(10);
        expect(add(-1, 1)).toBe(0);
    });
});

describe("greet", () => {
    it("uses default greeting when none provided", () => {
        expect(greet("Abdalla")).toBe("Hello, Abdalla!");
    });

    it("uses custom greeting when provided", () => {
        expect(greet("Sara", "Welcome")).toBe("Welcome, Sara!");
    });
});

describe("square", () => {
    it("squares a number correctly", () => {
        expect(square(5)).toBe(25);
        expect(square(0)).toBe(0);
        expect(square(-3)).toBe(9);
    });
});
