//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	get myname(){
		return this.name;
	}
	set myage(age){
		this.age = age;
	}
}

class Student extends Person {
	study(){
		console.log(this.myname+" is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.myname+" is teaching");
	}
}

const person = new Person("John",25);
console.log(person.name);
person.age = 30;
person.myage = 100;
console.log(person.age);

const student = new Student("Alice",22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
