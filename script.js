//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	get getname(){
		return this.name;
	}
	set setage(age){
		this.age= age;
	}
}

class Student extends Person {
	study(){
		console.log(this.name+" is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name+" is teaching");
	}
}

let John = new Student("John", 30);
John.study();

let Alice = new Teacher("Alice", 40);
Alice.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
