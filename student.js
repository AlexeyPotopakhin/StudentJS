/**
 * @author Alexey
 */

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
Student.prototype.constructor = Student;

// Add a method "study" to Student.prototype
Student.prototype.study = function() {
	console.log("Student " + this.name + " is studying");
};

function duckType(object) {
	if("study" in object) return "Student";
	else return "Man";
}