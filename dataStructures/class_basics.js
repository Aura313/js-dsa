//define a pattern to create a student
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  //instance methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return 'You are EXPELLED!!!';
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }

  //class method, not that common - more like a utility function
  static enrollStudents(...students) {
    return "Enrolling students!"
  }
}

//Instantiate new student object using the "new" keyword
let firstStudent = new Student('Colt', 'Steele', 5);
// console.log(firstStudent.markLate());
// console.log(firstStudent.markLate());
// console.log(firstStudent.markLate());
// console.log(firstStudent.markLate());
// console.log(firstStudent.markLate());
console.log(firstStudent.addScore(92));
console.log(firstStudent.addScore(87));

console.log(firstStudent.scores, 'fo');
console.log(firstStudent.calculateAverage(), 'fo');

console.log(Student.enrollStudents(), 'enrollStudents');