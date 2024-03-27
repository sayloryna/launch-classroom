import { courses, grades, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade, GradeFullData } from "../../types";
import { generateId } from "../../utils.js";

export const getGradesTotal = (grades: Grade[]): number => {
  return grades.length;
};

// Crea una función para obtener los datos completos de una nota
// La función debe recibir una nota
// La función debe devolver un objeto con las mismas propiedades de la nota
// más las propiedades studentName, studentLastName y courseName

export const getGradeFullData = (grade: Grade) => {
  let additionalData = {
    studentName:
      students.find((student) => student.id === grade.studentId)?.name ??
      "deleted",
    studentLastName:
      students.find((student) => student.id === grade.studentId)?.lastName ??
      "user",
    courseName:
      courses.find((course) => course.id === grade.courseId)?.name ??
      "deleted course",
  };

  let gradeData = {
    id: grade.id,
    studentId: grade.studentId,
    courseId: grade.courseId,
    value: grade.value,
  };
  let GradeFullData = Object.assign(additionalData, gradeData);

  return GradeFullData;
};

export const deleteGrade = (grades: Grade[], gradeId: number): void => {
  grades.forEach((grade, index) => {
    if (grade.id === gradeId) {
      grades.splice(index, 1);
    }
  });
};

export const addGrade = (
  grades: Grade[],
  studentId: number,
  courseId: number,
  gradeValue: number
): void => {
  let newGrade: Grade = {
    id: generateId(grades),
    studentId: studentId,
    courseId: courseId,
    value: gradeValue,
  };
  if (
    grades.some(
      (grade) =>
        grade.studentId === newGrade.studentId &&
        grade.courseId === newGrade.courseId
    )
  ) {
    showErrorModal("Este curso ya ha sido evaluado con anterioridad");
  } else {
    grades.push(newGrade);
  }
};
