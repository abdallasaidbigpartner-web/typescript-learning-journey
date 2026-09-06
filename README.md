# TypeScript Learning Journey

Structured TypeScript engineering progression covering application development, full-stack architecture, APIs, testing, and production-oriented software practices.

## Tech Stack

- **TypeScript 5.7** (intentionally pinned - TypeScript 7+ ships a Go-based compiler with no Android/Termux build target, so this version was chosen for full cross-platform compatibility, including ARM64/Android)
- **Node.js** runtime
- Compiled via the TypeScript compiler (tsc) using project-wide tsconfig.json settings (ES2016 target, strict mode)

## Progress

| Lesson | Topic | Key Concepts |
|--------|-------|--------------|
| 1 | Variables & Types | Type annotations (string, number, boolean), template literals |
| 2 | Functions | Typed parameters/return values, optional parameters, arrow functions |
| 3 | Arrays, Objects & Interfaces | Typed arrays, object literals, interfaces as data contracts |
| 4 | Classes | Constructors, inheritance (extends/super), access modifiers (private/protected) |
| 5 | Async/Await & Promises | Asynchronous control flow, Promise, non-blocking execution |

## Running the Code

Each lesson is compiled and run individually:

    npx tsc
    node lesson01_variables.js

Compilation uses the project's tsconfig.json, not per-file defaults, to ensure modern JS features like Promise and async/await compile correctly.

## Notes

This repository is part of a structured learning path that also includes:
- python-learning-journey - Python fundamentals through backend engineering, ML/DL, and Generative AI
- sql-learning-journey - SQL/PostgreSQL fundamentals through transactions and indexing
