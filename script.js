//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	get _name(){
		return this.name;
	}
	set _age(age){
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
console.log(John.name);
console.log(John.age);

let Alice = new Teacher("Alice", 40);
Alice.teach();
console.log(Alice._name);
console.log(Alice._age);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
