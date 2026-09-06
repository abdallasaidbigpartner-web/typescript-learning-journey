// Professionalization pass: automated test for Lesson 1's extracted
// formatting function.

import { describe, it, expect } from "vitest";
import { describePerson } from "./lesson01_variables";

describe("describePerson", () => {
    it("formats the person's details correctly", () => {
        expect(describePerson("Abdalla", 20, 1.75)).toBe(
            "Abdalla is 20 years old and 1.75m tall."
        );
    });
});
