function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  marks.forEach(mark => this.addMark(mark));
}

Student.prototype.getAverage = function () {
  let sum = 0;
   for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  let avg = sum / this.marks.length; 
  return avg;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

