import { showErrorModal } from "../../dom/index.js";
import { Course, CourseOption, Grade } from "../../types";
import { generateId } from "../../utils.js";

export const getCoursesTotal = (courses: Course[]): number => {
  return courses.length;
};

export const addCourse = (courses: Course[], courseName: string): void => {
  const newCourse: Course = {
    id: generateId(courses),
    name: courseName,
  };
  if (
    courses.some(
      (course) => course.name.toLowerCase() === newCourse.name.toLowerCase()
    )
  ) {
    showErrorModal("El curso ya existe");
  } else {
    courses.push(newCourse);
  }
};

export const deleteCourseGrades = (grades: Grade[], courseId: number): void => {
  grades.forEach((grade, index) => {
    if (grade.courseId === courseId) {
      grades.splice(index, 1);
    }
  });
};

export const deleteCourse = (courses: Course[], courseId: number): void => {
  courses.forEach((course, index) => {
    if (course.id === courseId) {
      courses.splice(index, 1);
    }
  });
};

export const getCoursesOptions = (courses: Course[]): CourseOption[] => {
  const coursesOptions: CourseOption[] = [];
  courses.forEach((course) => {
    coursesOptions.push({
      id: course.id,
      name: course.name,
    });
  });
  return coursesOptions;
};
