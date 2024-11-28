//complete this code
class Person {
	constructor(name, age){
		this.myname = name;
		this.myage = age;
	}
	get name(){
		return this.myname;
	}
	set age(age){
		this.myage = age;
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
console.log(person.myname);
console.log(person.myage);

const student = new Student("Alice",22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
