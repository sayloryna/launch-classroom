import { courses, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade, GradeFullData } from "../../types";
import { generateId } from "../../utils.js";

export const getGradesTotal = (grades: Grade[]): number => {
  return grades.length;
};

export const getGradeFullData = (grade: Grade): GradeFullData => {
  let gradeStudent = students.find((student) => student.id === grade.studentId);
  let gradeCourse = courses.find((course) => course.id === grade.courseId);

  let gradeFullData: GradeFullData = {
    id: grade.id,
    studentId: grade.studentId,
    courseId: grade.courseId,
    value: grade.value,
    studentName: gradeStudent?.name ?? "estudiante",
    studentLastName: gradeStudent?.lastName ?? "borrado",
    courseName: gradeCourse?.name ?? "curso borrado",
  };

  return gradeFullData;
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
