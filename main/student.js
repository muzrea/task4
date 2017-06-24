let Person = require('./person')
// Write your code here
module.exports = function Student(klass)
{
	Student.prototype = new Person(name,age);
	var n = new Student(klass);
	n.introduce();
	this.klass=klass;
	this.Introduce = function() {
		return "I am a student. I am at class " + this.klass+".";
	}
}
