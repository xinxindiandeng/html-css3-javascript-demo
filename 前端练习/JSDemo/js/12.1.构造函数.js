/*
构造函数:通过  new 函数名    来实例化对象的函数叫构造函数。任何的函数都可以作为构造函数存在
主要从功能上进行区别的，构造函数的主要 功能为 初始化对象，特点是和new 一起使用。new就是在创建对象，从无到有，构造函数就是在为初始化的对象添加属性和方法。构造函数定义时首字母大写（规范）。

*/
// function Book(){

// }
// var myBook=new Book();

//判断实例的类型从
//方法1： instanceof 检测必须初始化函数，且不能检测类型为undefined,null,NaN
// console.log(myBook instanceof Book);

//方法2: constructor   不能检测 undefined，null， NaN

// console.log(myBook.constructor==Book);

//自定义构造函数
// function Book(name,year){
// this.name=name;
// this.year='('+year+')';
// }
// var firstBook=new Book("张三",2014);
// var secondBook=new Book("里氏",2015);
// console.log(firstBook.name,firstBook.year);
// console.log(secondBook.name,secondBook.year);

//Object.defineProperty 方法 以在构造器中被使用来配置属性。

// function Book(name){
// Object.defineProperty(this,'name',{
//     get:function(){
//         return "Book:"+name;
//     },
//     set:function(newName){
//         name=newName;
//     },
//     configurable:false
// });
// }

// var myBook=new Book("张三");
// console.log(myBook.name);

//初始化原型
// function Animal(name){

// }

// new Animal("cat")={
//     var obj={};
//     obj.__proto__=Animal.prototype;
//     var result=Animal.call(this,"cat");
//     return typeof result=='object'?result:obj;
// }