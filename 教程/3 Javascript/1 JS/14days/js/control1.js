//原型
	//每个函数，都有一个内置属性，叫做prototype（原型）
	//prototype 是对象
	//如果一个对象是通过new产生的，那么这个对象将有缺省的属性，_proto_,这是属性指向函数的原型。
	
//prototype
	//1.凡是函数，都有属性prototype
	//2.凡是函数构造的对象，都有属性_proto_
	//3.prototype,_proto_,指向同一对象
// var obj={};
// var obj2=new Object();
// console.log(obj2.__proto__);
// console.log(Object.prototype);
// console.log(obj2.__proto__===Object.prototype);

//不只是大写字母开头的函数都具备这个特性
function f(){};
var b=new f();
// console.log(f.prototype);
// console.log(b.__proto__);
// console.log(b.__proto__===f.__proto__);

//Prototype的用法,生成的对象将获得排prototype的属性和方法
// var pt=f.prototype;
// pt.abc='123';
// pt.sayHello123=function(){
// 	console.log("hello!");
// }
// console.log(b.abc);
// b.sayHello123();

//原型链

// function Grand(){}
// function Father(){}
// var g=new Grand();
// Father.prototype=g;
// Father.prototype.constructor=Father;
// var f=new Father();

//原型链继承图
// object->EventTarget->Node->Document->HTMLDocument
// 									  ->XMLDocument
// 									   ->...
// 						 ->Elemnt->...
// 						 ->Attr
// 						 ->CharactorData->Text 
// 										->Comment
