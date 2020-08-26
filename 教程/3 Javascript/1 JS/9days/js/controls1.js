//String()和String

var str=String(123);
// console.log(typeof(str));
// 
// str.a=5;
/*
相当于
var tmp=new String(str);
tmp.a=5;
tmp 销毁
*/

// console.log(str.a);//undefined
/*
相当于
var tmp=new String(str);
tmp.a=5;
tmp 销毁
*/

 var objstring=new String(123);
// console.log(objstring);
// objstring.a=5;
// console.log(objstring.a);


//string 可以按照数组的形式来访问
// for (var i = 0; i < objstring.length; i++) {
// 	console.log(objstring[i])
// }

//String()的函数

//indexof()查找第一个字符串的位置,从0开始
var sToken=new String("hello world!");
var l=sToken.indexOf("o");
console.log(l);

//charAt(） 返回当前位置的字符
console.log(sToken.charAt(1));

//sbustring() 取字符串  第一个参数  开始位置  第二个参数  结束位置（为空默认截取到末尾） ，当结束位置<开始位置时  开始位置与结束位置调换 
//console.log(sToken.substring(5,2));
// console.log(sToken.substring(1,6));
// 
// //replace()
// //console.log(sToken.replace("o",'A')); 
// console.log(sToken.replace(/o/g,'A')); //正则表达式
// 
// //特殊字符输出
// str='\'--\"--\\--\t';
// console.log(str);
// 
// //回车
// str='a\r\n'+'b\r\n'+'c';
// console.log(str);

//toUpperCase()大写|toLowerCase()小写
// str ='aaa';
// str=str.toUpperCase();
// console.log(str);
// 
// str="BBB";
// str=str.toLowerCase();
// console.log(str);

//trim  