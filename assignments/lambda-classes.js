// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.from = attr.from;

    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.from}`;
    }
}

class Instructor extends Person {
    constructor(InstAttr) {
        super(InstAttr);
        this.specialty = InstAttr.specialty;
        this.compLanguage = InstAttr.compLanguage;
        this.catchPhrase = InstAttr.catchPhrase;
    }
    learning(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(StudentAttr) {
        super(StudentAttr);
        this.background = StudentAttr.background;
        this.className = StudentAttr.className;
        this.favSubjects = StudentAttr.favSubjects;
    }

    listSubjects(favSubjects) {
        return this.favSubjects;
    }
    myAssignment(subject) {
        return `${this.name} has submitted an Assignment for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun the sprint challenge on ${subject}!`;
    }
}

class TeamLead extends Instructor {
    constructor(TeamLeadAttr) {
        super(TeamLeadAttr);
        this.gradeClass = TeamLeadAttr.gradeClass;
        this.bestTL = TeamLeadAttr.bestTL;
    }
    standUp(channel) {
        return `${this.name} debugs ${student_one.name}'s code on ${student_one.className}`;
    }
}

const student_one = new Student({
    name: 'Josh',
    age: 34,
    location: 'Wichita',
    previousBackground: 'Restaurant Management',
    className: 'JS III',
    favSubjects: ['HTML', 'CSS', 'LESS']
});


const instructor_one = new Instructor({
    name: 'Pace',
    age: 26,
    location: 'Mesa',
    specialty: 'Javascript',
    favLanguage: 'Spanglish',
    catchPhrase: 'Its all going to be ok'
});

const teamLead_one = new TeamLead({
    name: 'Julie',
    age: 25,
    location: 'New York',
    favLanguage: 'React',
    catchPhrase: 'Im to tired to think',
    gradeClassName: 'WEBFT8',
    favInstructor: 'Pace'

});

console.log(student_one.myAssignment("HTML"));
console.log(instructor_one.learning("Classes and Constructors"));
console.log(`${instructor_one.name} thinks ${instructor_one.catchPhrase}`);
console.log(teamLead_one.standUp("WebPT11"));
console.log(instructor_one.grade("Josh", "Javascript IV"));
console.log(`${teamLead_one.name} says ${teamLead_one.catchPhrase}`);