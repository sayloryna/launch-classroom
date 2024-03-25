import { showErrorModal } from "../../dom/index.js";
import { students } from "../../index.js";
import { Student } from "../../types.js";
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
  if (students.includes(newStudent)) {
    console.log(showErrorModal("El estudiante ya esta en la lista"));
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

// Crea una función para obtener las opciones de estudiantes para rellenar un select
// La función debe recibir un array de estudiantes
// La función debe devolver un array de objetos con tres propiedades: id, name y lastName
// La propiedad id debe ser el id del estudiante
// La propiedad name debe ser el nombre del estudiante
// La propiedad lastName debe ser el apellido del estudiante
// export const getStudentsOptions =

// Crea una función para obtener el nombre completo de un estudiante por su id
// La función debe recibir un array de estudiantes y el id del estudiante
// export const getStudentNameById =
