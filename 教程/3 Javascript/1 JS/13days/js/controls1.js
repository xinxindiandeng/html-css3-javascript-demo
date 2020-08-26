//html DOM 

//document 
// console.log(window.document);

//getElementByid(string)
// var p1=document.getElementById("i1");
// console.log(p1);
//IE8及以下浏览器,id不区分大小写,同时还会匹配name属性

//getElementsByClassName(string)
// var pcls1=document.getElementsByClassName("cls1");
// console.log(pcls1);

//getElementsByTagName(string)
// var ps=document.getElementsByTagName("p");
// console.log(ps);

//name属性,只对部分元素有效,form,表单元素,img,iframe ;返回的是 数组
// var inputs=document.getElementsByName("username");
// console.log(inputs);

//querySelector() 返回第一个指定CSS选择器
//document.querySelector("form input").style.color="red";

//quertyselectorAll() 返回所有
// var que=document.querySelectorAll("form input");
// que[0].style.color="red";
// que[1].style.color="green";
// que[2].style.color="blue";
// console.log(que);