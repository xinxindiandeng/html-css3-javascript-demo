/*
DOM  document object Model 文档对象模型
html dom 定义了访问和操作html文档的标准方法
*/

//DOM增删替

//append 父元素吧儿子元素放到所有当前儿子元素的最后
// var p=document.createElement("p");
// var txt=document.createTextNode("aaaaa");
// p.appendChild(txt);
// console.log(p);
// document.body.appendChild(p);

//inserBefore p2插入到p之前
// var p2=document.createElement("p");
// var txt2=document.createTextNode("bbbb");
// p2.appendChild(txt2);
// document.body.insertBefore(p2,p);

//删除 removeChild 父亲删除儿子
//document.body.removeChild(p2);

//删除remove 元素
//p2.remove();

//替换replace 父亲替换儿子

// var p3=document.createElement('p');
// var txt3=document.createTextNode('ccccc');
// p3.appendChild(txt3);
// document.body.replaceChild(p3,p2);



//练习
var p4=document.getElementById('pid');
console.log(p4);
var stg=document.createElement('strong');
var str=document.createTextNode("Hi,Wecome to HTML");
stg.appendChild(str);
console.log(stg);
p4.appendChild(stg);
// 
// var cmt=document.createComment("###comment");
// p4.insertBefore(cmt,stg);


//更改标签内的内容
//方法1：
//Element.innerHTML(解析标签);Node.innerText（有标签也会转义成string）;node.textContent(有标签也会转义成string)
//p4.innerHTML='<a href="http://www.baidu.com" target="_blank">百度</a>';

// p4.innerText='<a href="http://www.baidu.com" target="_blank">百度</a>';
 // p4.textContent='<a href="http://www.baidu.com" target="_blank">百度</a>';
 
 //方法2：
 console.log(p4.getAttribute("class"));
 p4.setAttribute('class','cls2');
 console.log(p4.getAttribute("class"));
