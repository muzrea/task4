let Person = require('./person')
// Write your code here
module.exports = function Student(name,age,klass)
{ 
	Person.call(this,name,age);
	this.klass=klass;
	this.Introduce = function() {
		return "My name is " + this.name+". I am "+this.age+" years old."+"I am a student. I am at class " + this.klass+".";
	}
}
