import { grades } from "../../index.js";
import { CourseStats, Grade } from "../../types";

export const getCourseStats = (courseId: number): CourseStats => {
  const courseGrades: Grade[] = grades.filter(
    (grade) => grade.courseId === courseId
  );

  const courseGradesValues: number[] = courseGrades.map((grade) => grade.value);
  const sortedByValueCourseGrades = courseGrades.toSorted(
    (gradeA, gradeB) => gradeB.value - gradeA.value
  );

  const passedGradesTotal: number = courseGrades.filter(
    (grade) => grade.value >= 5
  ).length;

  const failedGradesTotal: number = courseGrades.filter(
    (grade) => grade.value < 5
  ).length;

  const courseStats: CourseStats = {
    courseId: courseId,
    studentsCount: courseGrades.length,
    passedCount: passedGradesTotal,
    passedCountPercentage: (passedGradesTotal * 100) / courseGrades.length,
    failedCount: failedGradesTotal,
    failedCountPercentage: (failedGradesTotal * 100) / courseGrades.length,
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
