//构造函数

//我们需要一种函数,能够每次以相同的方式构造对象
//同时,改动这个函数,所有对象都能跟着改变

//构造函数,名称已大写字母开头[约定俗成]
//shiift+alt+f 格式化代码
function Student(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var std=new Student("王瑶",22,'女');

function Student2(name,age,gender){
	var obj={};
	obj.name=name;
	obj.age=age;
	obj.gender=gender;
	return obj;
}
var stu=Student2("张三",25,'男');
