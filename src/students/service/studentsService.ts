import { showErrorModal } from "../../dom/index.js";
import { Grade, Student, StudentOption } from "../../types.js";
import { generateId } from "../../utils.js";

export const getStudentsTotal = (students: Student[]): number => {
  return students.length;
};

export const addStudent = (
  students: Student[],
  name: string,
  lastName: string,
  age: number,
  email: string,
  phoneNumber: string
): void => {
  const newStudent: Student = {
    id: generateId(students),
    name: name.toLocaleUpperCase(),
    lastName: lastName.toLocaleUpperCase(),
    age,
    email: email.toLowerCase(),
    phoneNumber,
  };
  if (
    students.some(
      (student) =>
        student.email.toLocaleLowerCase() === newStudent.email.toLowerCase()
    )
  ) {
    showErrorModal("Ya existe un estudiante con ese email");
  } else {
    students.push(newStudent);
  }
};

export const deleteStudentGrades = (grades: Grade[], studentId: number) => {
  grades.forEach((grade, index) => {
    if (grade.studentId === studentId) {
      grades.splice(index, 1);
    }
  });
};

export const deleteStudent = (students: Student[], studentId: number): void => {
  students.forEach((student, index) => {
    if (student.id === studentId) {
      students.splice(index, 1);
    }
  });
};

export const getStudentsOptions = (students: Student[]): StudentOption[] => {
  const studentOptions: StudentOption[] = [];
  students.forEach((student) => {
    studentOptions.push({
      id: student.id,
      name: student.name,
      lastName: student.lastName,
    });
  });
  return studentOptions;
};

export const getStudentNameById = (students: Student[], studentId: number) => {
  const student = students.find((student) => student.id === studentId);
  return student
    ? `${student.name} ${student.lastName}`
    : "No se encuentra el estudiante";
};
