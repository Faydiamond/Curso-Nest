export const idStudents: number[] = [1, 10, 15, 4, 7, 8, 3];
idStudents.push(+"9"); //concert to number

interface Student {
  id: number;
  name: string;
  age: number | undefined;
}

export const angie: Student = {
  id: 1,
  name: "Angie",
  age: undefined,
};

export const students: Student[] = [];

students.push(angie);

console.log(students);
