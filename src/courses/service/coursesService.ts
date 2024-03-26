import { showErrorModal } from "../../dom/index.js";
import { courses } from "../../index.js";
import { Course, CourseOption } from "../../types";
import { generateId } from "../../utils.js";

export const getCoursesTotal = (courses: Course[]): number => {
  return courses.length;
};

export const addCourse = (courses: Course[], courseName: string): void => {
  let newCourse = {
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
    courses.unshift(newCourse);
  }
};

export const deleteCourse = (courses: Course[], courseId: number): void => {
  courses.forEach((course, index) => {
    if (course.id === courseId) {
      courses.splice(index, 1);
    }
  });
};

export const getCoursesOptions = (courses: Course[]): CourseOption[] => {
  let coursesOptions: CourseOption[] = [];
  courses.forEach((course) => {
    coursesOptions.push({
      id: course.id,
      name: course.name,
    });
  });
  return coursesOptions;
};
