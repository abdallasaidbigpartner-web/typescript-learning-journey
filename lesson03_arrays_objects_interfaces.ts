// Lesson 3: Arrays, Objects & Interfaces
// Demonstrates typed arrays, object literals, and interfaces as
// contracts defining the required shape of an object.

interface Student {
    name: string;
    age: number;
    grade: string;
    isActive?: boolean;
}

function describeStudent(student: Student): string {
    return `${student.name} (${student.age}) - Grade ${student.grade}`;
}

const scores: number[] = [80, 90, 70, 100];
const names: string[] = ["Sara", "Abdalla", "Cawad"];

const student1: Student = { name: "Abdalla", age: 20, grade: "A" };
const student2: Student = { name: "Sara", age: 19, grade: "B", isActive: true };

console.log(scores);
console.log(names[0]);
console.log(describeStudent(student1));
console.log(describeStudent(student2));
