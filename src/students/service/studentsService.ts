import { showErrorModal } from "../../dom/index.js";
import { students } from "../../index.js";
import { Student, StudentOption } from "../../types.js";
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
  let newStudent = {
    id: generateId(students),
    name,
    lastName,
    age,
    email,
    phoneNumber,
  };
  if (
    students.some(
      (student) =>
        student.name === newStudent.name &&
        student.lastName === newStudent.lastName &&
        student.age === newStudent.age
    )
  ) {
    showErrorModal("El estudiante ya esta en la lista");
  } else {
    students.push(newStudent);
  }
};

export const deleteStudent = (students: Student[], studentId: number): void => {
  students.forEach((student, index) => {
    if (student.id === studentId) {
      students.splice(index, 1);
    }
  });
};

export const getStudentsOptions = (students: Student[]): StudentOption[] => {
  let studentOptions: StudentOption[] = [];
  students.forEach((student) => {
    studentOptions.push({
      id: student.id,
      name: student.name,
      lastName: student.lastName,
    });
  });
  return studentOptions;
};

// Crea una función para obtener el nombre completo de un estudiante por su id
// La función debe recibir un array de estudiantes y el id del estudiante
// export const getStudentNameById =
