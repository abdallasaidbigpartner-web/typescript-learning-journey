// Lesson 5: Async/Await & Promises
// Demonstrates Promises and async/await for handling operations
// that take time (like API calls) without blocking execution.

function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function fetchUserData(): Promise<string> {
    console.log("Fetching user data...");
    await delay(1000);
    return "Abdalla";
}

async function main(): Promise<void> {
    const user = await fetchUserData();
    console.log(`User loaded: ${user}`);
    console.log("Program continues after async work completes.");
}

main();
