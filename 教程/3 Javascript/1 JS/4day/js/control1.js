/* //查看变量是否为数组
var a=[1,,,,"2bc",null,undefined];
document.write("查看变量a是否为数组："+(arr.constructor.name=="Array")+"<br/>");
for(var b=0;)

//数组循环遍历
var arr=[1,2,3,4,5,6,7,"abc"];
document.write("for方法遍历：<br/>");
for(var i=0;i<arr.length;i++)
{
	document.write(arr[i]+"<br/>");
}
document.write("for..in..写法：<br/>");
for(var j in arr)
{
	document.write(arr[j]+"<br/>");
}

document.write("forEach写法：<br/>");
arr.forEach(function(x){
	document.write(x+"<br/>");
}) */

// //数组连接 concat  返回新数组
// var arr=[1,2,3];
// var arr1=[4,5,6];
// var arr2=arr.concat(arr1);
// console.log(arr2);

// //join:把数组中的元素用参数连接起来,返回新字符串
// console.log(arr2.join(","));
// console.log(arr2.join("-"));
// console.log(arr2.join("   "));
// 
// //sort 数值排序 sort会操作数组本身
// console.log(arr2.sort());
// 
// //sort字符串比较  先查看第一个字符串的ASCII 位置
// var arr3=["aaa","bbb","ccc"];
// console.log(arr3.sort());

//栈  队
//栈：后进先出  stack
//进栈：push，出栈：pop
//push-pop 尾进尾出  push改变原数组  pop改变原数组的同时返回最后一个元素

console.log("--------------栈stack--------------");
var arr = ['a', 'b', 'c'];
console.log(arr.join(","));
console.log(arr.push("z"));
console.log(arr.join(","));
console.log(arr.pop());
console.log(arr.join(","));

//unshift -shift 头进头出 
arr.unshift("z");
console.log(arr.join(","));
console.log(arr.shift());
console.log(arr.join(","));

console.log("--------------队列queue--------------");
//队列 ：先进先出 queue
//尾进头出
arr.push("z");
console.log(arr.join(","));
console.log(arr.shift());
console.log(arr.join(","));

//头进尾出
arr.unshift("z");
console.log(arr.join(","));
console.log(arr.pop());
console.log(arr.join(","));

/*
备注：
1、push()、pop()和unshift()、shift()
　　联系：这两组同为对数组的操作，并且会改变数组的本身的长度及内容。
　　区别：不同的是 push()、pop() 是从数组的尾部进行增减，unshift()、shift() 是从数组的头部进行增减
2、push()和unshift()
　　向数组的 尾部/头部 添加若干元素，并返回 数组的 新长度；
3、pop()和shift()
　　从数组的 尾部/头部 删除1个元素(删且只删除1个)，并返回 被删除的元素；空数组是继续删除，不报错，但返回undefined；
PS: pop()和shift() 不接受传参，即使传了参数也没什么卵用~~；

*/