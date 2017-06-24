let Person = require('./person')
// Write your code here
module.exports = function Student(klass)
{
	person(name1,age1);
	var name2=this.name;
	var age2 = this.age;
	this.klass=klass;
	this.Introduce = function() {
		return "My name is" + name2+". I am"+age2+"years old."+"I am a student. I am at class" + this.klass+".";
	}
}
