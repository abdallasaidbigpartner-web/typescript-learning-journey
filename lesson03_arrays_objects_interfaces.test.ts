// Professionalization pass: automated tests for Lesson 3's interface
// and function, verifying the correct output shape for both required
// and optional fields.

import { describe, it, expect } from "vitest";
import { describeStudent, Student } from "./lesson03_arrays_objects_interfaces";

describe("describeStudent", () => {
    it("formats a student without the optional isActive field", () => {
        const student: Student = { name: "Abdalla", age: 20, grade: "A" };
        expect(describeStudent(student)).toBe("Abdalla (20) - Grade A");
    });

    it("formats a student with the optional isActive field set", () => {
        const student: Student = { name: "Sara", age: 19, grade: "B", isActive: true };
        expect(describeStudent(student)).toBe("Sara (19) - Grade B");
    });
});
