//类数组
//1.有下标，有length，有push有splice，就是一个类数组
//2.即可以但数组用，也可以当对象用
//3.DOM里面的数组都是类数组
// var arr=[1,2,3];
// 
// var obj={
// 	'0':1,
// 	'1':2,
// 	'2':3,
// 	'length':3,
// 	'push':Array.prototype.push,
// 	'splice':Array.prototype.splice
// }
// 	

//习题
var obj={
	'2':'a',
	'3':'b'
	'length':2,
	'push':Array.prototype.push,
	'splice':Array.prototype.splice
}
obj.push('c');
// obj.push=function(x){
// 	obj[obj.length]=x;
// 	obj.length++;
// }
obj.push('d');
console.log(obj);
