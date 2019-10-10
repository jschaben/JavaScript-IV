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
        return `${this.name} debugs ${student1.name}'s code on ${student1.className}`;
    }
}

const student1 = new Student({
    name: 'Josh',
    age: 34,
    location: 'Wichita',
    previousBackground: 'Restaurant Management',
    className: 'JS III',
    favSubjects: ['HTML', 'CSS', 'LESS']
});


const instructor1 = new Instructor({
    name: 'Pace',
    age: 26,
    location: 'Mesa',
    specialty: 'Javascript',
    favLanguage: 'Spanglish',
    catchPhrase: 'Its all going to be ok'
});

const teamLead1 = new TeamLead({
    name: 'Julie',
    age: 25,
    location: 'New York',
    favLanguage: 'React',
    catchPhrase: 'Im to tired to think',
    gradeClassName: 'WEBFT8',
    favInstructor: 'Pace'

});

console.log(student1.myAssignment("LESS"));
console.log(instructor1.learning("Converting Constructors"));
console.log(`${instructor1.name} thinks ${instructor1.catchPhrase}`);
console.log(teamLead1.standUp("JS III"));
console.log(instructor1.grade("Josh", "Javascript IV"));
console.log(`${teamLead1.name} says ${teamLead1.catchPhrase}`);