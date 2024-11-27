//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this.name;
	}
	set age(age){
		this.age = age;
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

let Alice = new Student("Alice",30);
Alice.age = 9;
console.log(Alice.age)

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
