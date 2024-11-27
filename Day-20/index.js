const student = {
  url: "pexels-andrewperformance1-697509.jpg",
  name: 'John Doe',
  age: 20,
  course: "Computer Science",
  grade: "A",
  isEnrolled: true
};

const img = document.querySelector('img').src = student.url;
const name = document.querySelector('.name').textContent = "Name: " + student.name;
const age = document.querySelector('.age').textContent = "Age: " + student.age;
const course = document.querySelector('.course').textContent = "Course: " + student.course;
const grade = document.querySelector('.grade').textContent = "Grade: " + student.grade;
const enrolled = document.querySelector('.enrolled').textContent = "Enrolled: " + student.isEnrolled;

