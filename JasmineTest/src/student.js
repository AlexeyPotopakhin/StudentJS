// Define the Man constructor
var Man = function(name, age) {
	// Properties
	this.name = name;
	this.age = age;
};

// Add a method "live" to Man.prototype
Man.prototype.live = function() {
	console.log("Man " + this.name + " is living");
};

// Define the Student constructor
var Student = function(name, age) {
	Man.apply(this, arguments);
};

// Inheritance
Student.prototype = Object.create(Man.prototype);

// Add a method "study" to Student.prototype
Student.prototype.study = function() {
		console.log("Student " + this.name + " is studying");
};

// Define the Professor constructor
var Professor = function() {
	Man.apply(this, arguments);
	this.students = [];
};

// Inheritance
Professor.prototype = Object.create(Man.prototype);

// Add a method "teach" to Professor.prototype
Professor.prototype.teach = function(student) {
	if(duckType(student) != "Student") {
		throw new Error("Professor teaches only students");
	}
	this.students.push(student);
	console.log("Professor is teaching " + student.name);
};

Professor.prototype.isTeaches = function(student) {
	return this.students.indexOf(student) != -1;
};

// Original function
function duckType(object) {
	if("study" in object) return "Student";
	else return "Man";
}

// Modified function
function duckTypeModified() {
	if(this.study !== undefined) return "Student";
	else return "Man";
}