//Cookie 
/*
 Cookie 是一些数据, 存储于你电脑上的文本文件中。
	当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。
Cookie 的作用就是用于解决 "如何记录客户端的用户信息":
	当用户访问 web 页面时，他的名字可以记录在 cookie 中。
	在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。
*/

console.log(document.cookie);
//document.cookie将以字符串的方式返回所有的cookie字符
//格式:cookiekey1=value1;cookiekey2=value2;....
document.cookie = 'key1=value1';
console.log(document.cookie);
document.cookie = 'key2=value2';
document.cookie = 'key3=value3';
document.cookie = 'key4=value4';
console.log(document.cookie);
//删除key3的值
document.cookie = 'key3=';
console.log(document.cookie);
//重置key3
document.cookie = 'key2=;expres=Thu,01 Jan 1900 00:00:00 GMT';

//防止重名
var r='v'+Math.random();
document.cookie=r+'=';
console.log(document.cookie);