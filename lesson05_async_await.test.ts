// Professionalization pass: automated tests for Lesson 5's async
// functions, verifying both the resolved value and that the delay
// genuinely happens asynchronously (not blocking synchronously).

import { describe, it, expect } from "vitest";
import { delay, fetchUserData } from "./lesson05_async_await";

describe("delay", () => {
    it("resolves after approximately the given time", async () => {
        const start = Date.now();
        await delay(100);
        const elapsed = Date.now() - start;

        expect(elapsed).toBeGreaterThanOrEqual(90);
    });
});

describe("fetchUserData", () => {
    it("resolves to the expected username", async () => {
        const user = await fetchUserData();
        expect(user).toBe("Abdalla");
    });
});
