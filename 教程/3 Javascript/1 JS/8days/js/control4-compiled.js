"use strict";

//this用法

//1.脚本中,this初始化为window
// console.log(this);

//2.在普通函数中,this初始化为window 
// function f(){
// 	console.log(this);
// }
// f();

//3.在object调用的函数中,this被指定为object,谁调用指向谁
// var  obj={
// 	name:"a",
// 	f2:function(){
// 		console.log(this);
// 	}
// }
// obj.f2();
// var f=obj.f2;
// f();

//4.call/apply中,this可以被指定,被指定为第一参数
// var  obj={
// 	name:"a",
// 	f2:function(x,y){
// 		console.log(this);
// 	}
// };
// console.log("--------对象直接调用：obj.f2(1,2)------------");
// obj.f2(1,2);
// console.log("--------call方法：f.call(obj,1,2)------------");
// var f=obj.f2;
// f.call(obj,1,2);
// console.log("--------apply方法：f.apply(obj,[1,2])------------");
// var arr=[];
// f.apply(obj,[1,2]);

//5.在new的构造函数中，this被指向这在创建的对象
// function F(){
// 	console.log(this);
// }
// var obj=new F();

//习题
// var name="The window";
// var object={
// 	name:"My Object",
// 	getNameFunc:function(){
// 		return function(){
// 			return this.name;
// 		};
// 	},
// 	getNameFunc2:function(){
// 		return this.name;
// 	}
// };
// console.log(object.getNameFunc()());
// console.log(object.getNameFunc2());

//---------------------------------------
var i = 1;
var obj = {
	i: 2,
	f: function f() {
		console.log(this.i);
	}
};
var a = obj.f;
// a();//相当于调用函数  所以结果为 1
// obj.f();//对象调用 2

var obj2 = {
	i: 3,
	f: function f(ff) {
		ff();
	},
	f2: function f2() {
		function fff() {
			console.log(this.i);
		}
		return fff;
	}
};
obj2.f(obj.f);
obj2.f = obj.f;
obj2.f();
obj2.f2()();
