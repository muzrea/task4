// Write your code here
module.exports = function Person(name,age)
{
	this.name=name;
	this.age=age;
	this.Introduce = function() {
		alert("My name is" + this.name+". I am"+this.age+"years old.");
	}
}
