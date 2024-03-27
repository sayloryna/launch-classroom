import { courses, grades, students } from "../../index.js";
import { CourseStats, Student, Course, Grade } from "../../types";

// Crea una función para obtener las estadísticas de un curso
// La función debe recibir el id de un curso
// La función debe devolver un objeto de tipo CourseStats
export const getCourseStats = (courseId: number): CourseStats => {
  const courseGrades: Grade[] = grades.filter(
    (grade) => grade.courseId === courseId
  );
  const courseGradesValues: number[] = courseGrades.map((grade) => grade.value);
  const sortedByValueCourseGrades = courseGrades.toSorted(
    (gradeA, gradeB) => gradeB.value - gradeA.value
  );

  const courseStats = {
    courseId: courseId,
    studentsCount: courseGrades.length,
    passedCount: courseGrades.filter((grade) => grade.value >= 5).length,
    passedCountPercentage:
      (courseGrades.filter((grade) => grade.value >= 5).length * 100) /
      courseGrades.length,
    failedCount: courseGrades.filter((grade) => grade.value < 5).length,
    failedCountPercentage:
      (courseGrades.filter((grade) => grade.value < 5).length * 100) /
      courseGrades.length,
    averageGrade:
      courseGradesValues.reduce(
        (totalValues, value) => totalValues + value,
        0
      ) / courseGradesValues.length,

    highestGrade: Math.max(...courseGradesValues),
    highestGradeStudentId: sortedByValueCourseGrades[0].studentId,
  };
  return courseStats;
};
