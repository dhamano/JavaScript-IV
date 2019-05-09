// CODE here for your Lambda Classes

////////////////////////////
//                        //
//   CONSTRUCTOR Person   //
//                        //
////////////////////////////

class Person {
  constructor({name = "John Doe", age = 0, location = "The Void"}) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

////////////////////////////////
//                            //
//   CONSTRUCTOR Instructor   //
//                            //
////////////////////////////////

class Instructor extends Person {
  constructor({name, age, location, specialty = "teaching", favLanguage = "HTML/CSS", catchPhrase ="PWNed"}) {
    super({name, age, location});
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about \u001b[34m${subject}\u001b[30m.`);
  }
  grade(studentObj, subject) {
    console.log(`${studentObj.name} receives a \u001b[34mperfect score\u001b[30m on ${subject}.`);
  }
  scoreStudent(studentObj) {
    let gradeChange = Math.round(Math.random()) * 2 - 1;
    let changeAmount = Math.round(Math.random() * 10) * gradeChange;
    studentObj.grade += changeAmount;
  }
}

////////////////////////////////
//                            //
//   CONSTRUCTOR Student      //
//                            //
////////////////////////////////

class Student extends Person {
  constructor({name, age, location, previousBackground = 'Couch Surfing', className = 'ABC123', favSubjects = ['Sleeping', 'Eating'], grade = 50 }) {
    super({name, age, location});
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
    this.grade = grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(arrItem => console.log(`${arrItem}`));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for \u001b[34m${subject}\u001b[30m.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on \u001b[34m${subject}\u001b[30m.`)
  }
  graduate() {
    this.grade > 70 ? console.log (`Congratulations! You graduated with a ${this.grade}/100!`) : console.log (`Keep going! You only need at least ${71 - this.grade}% more!`);
  }
}

////////////////////////////////////////
//                                    //
//   CONSTRUCTOR ProjectManagers      //
//                                    //
////////////////////////////////////////

class ProjectManager extends Instructor {
  constructor({name, age, location, previousBackground, className, favSubjects, gradClassName = "CS007", favInstructor = "Bob Ross"}) {
    super({name, age, location, previousBackground, className, favSubjects});
  }
  standUp(slackChannel) {
    console.log(`${this.name} announces to ${slackChannel}, \u001b[31m@channel\u001b[30m standy times!​​​​​`);
  }
  debugsCode(studentObj, subject) {
    console.log(`${this.name} debugs ${studentObj.name}'s code on \u001b[34m${subject}\u001b[30m.`);
  }
}



////////////////////
//                //
//     TESTS      //
//                //
////////////////////

const per = new Person({
  name: 'Johnny',
  age: 1000,
  location: 'Achorage'
})

const inst = new Instructor({
  name: 'Billy',
  age: 40,
  location: 'Bedlam',
  specialty: 'Fortran',
  favLanguage: 'HTML 1.0',
  catchPhrase: 'You should have been there!'
})

const stud = new Student({
  name: 'Krystal',
  age: 29,
  location: 'Upington',
  previousBackground: 'Business',
  className: 'WEB20',
  favSubjects: ['Animals', 'Biology', 'Racing', 'Computers'],
  grade: 71
})

const studFail = new Student({
  name: 'Robert',
  age: 29,
  location: 'Upington',
  previousBackground: 'Business',
  className: 'WEB20',
  favSubjects: ['Animals', 'Biology', 'Racing', 'Computers'],
  grade: 60
})

const pm = new ProjectManager({
  name: 'Sara',
  age: 31,
  location: 'Gotham City',
  specialty: 'C++',
  favLanguage: 'C#',
  catchPhrase: 'Hold on a second!',
  gradClassName: 'WEB01',
  favInstructor: 'Mr. Ed'
})

console.log('\n\n___________Person___________\n\n');
console.log('per.name',per.name);
console.log('per.age',per.age);
console.log('per.location',per.location);
per.speak();

console.log('\n\n___________Instructor____________\n\n');
console.log('inst.name',inst.name);
console.log('inst.age',inst.age);
console.log('inst.location',inst.location);
console.log('inst.specialty',inst.specialty);
console.log('inst.favLanguage',inst.favLanguage);
console.log('inst.catchPhrase',inst.catchPhrase);
inst.demo('VFX');
inst.grade(stud, 'absentness');
console.log('stud.grade before',stud.grade)
inst.scoreStudent(stud);
console.log('stud.grade changed',stud.grade)
inst.scoreStudent(stud);
console.log('stud.grade changed',stud.grade)
inst.scoreStudent(stud);
console.log('stud.grade changed',stud.grade)
inst.scoreStudent(stud);
console.log('stud.grade changed',stud.grade)
inst.scoreStudent(stud);
console.log('stud.grade changed',stud.grade)
inst.scoreStudent(stud);
console.log('stud.grade changed',stud.grade)
inst.scoreStudent(stud);
console.log('stud.grade changed',stud.grade)
inst.scoreStudent(stud);
console.log('stud.grade changed',stud.grade)
inst.scoreStudent(stud);
console.log('stud.grade changed',stud.grade)


console.log('\n\n____________Student_____________\n\n');
console.log('stud.name',stud.name);
console.log('stud.age',stud.age);
console.log('stud.location',stud.location);
console.log('stud.previousBackground',stud.previousBackground);
console.log('stud.className',stud.className);
console.log('stud.favSubjects',stud.favSubjects);
stud.listsSubjects();
stud.PRAssignment('Noodles');
stud.sprintChallenge('Noodles');
stud.graduate();
studFail.graduate();

console.log('\n\n____________Project Manager_____________\n\n');
console.log('pm.name',pm.name);
console.log('pm.age',pm.age);
console.log('pm.location',pm.location);
console.log('pm.specialty',pm.specialty);
console.log('pm.favLanguage',pm.favLanguage);
console.log('pm.catchPhrase',pm.catchPhrase);
pm.demo('GitHub');
pm.grade(stud, 'tardiness');
pm.standUp('#General');
pm.debugsCode(stud,'OOP');