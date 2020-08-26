//jQuery 选择器

//Jquery 选择器允许html元素组或单个元素操作
//jquery 选择器基于 id ,类(class属性),类型(tag),属性(attr),属性值等进行查找或者选择html元素
//jquery  是基于一用的CSS选择器,除此之王,他还自定义一些选择器
//query  中所有选择器都是已美元符号开头


/*1.基础选择器*/
//* 表示所有
//$('*').css('background-color', 'red');

// //匹配标签
// $('div').css('background-color','red');

// //, 表示或
// $('div,p').css('background-color','red');

//匹配id 
// $('#id01,#id02').css('background-color','red');

//匹配class
// $('.class01').css('background-color','red');
// 
// $('.class01,.calss02').css('background-color','red');


/*层次选择器*/
//  直接或间接后代选择
// $('div p').css('background-color','red');

// 直接后代
// $('div>p').css('background-color','red');

// 邻接或者比邻接的后续选择
// $('p~p').css('background-color','red');

//邻接的后续选择
// $('p+p').css('background-color','red');

/*3。基本过滤选择*/
//第一个div
// $('div:first').css('background-color','red');

//最后一个div
// $('div:last').css('background-color','red');

//不包含class01类型

// $('div:not(.class01)').css('background-color','red');

// $('div:not(.class01,.class02)').css('background-color','red');

// //奇数行 even  
//   $('div:even').css('background-color','red');
// //偶数行 odd
//  $('div:odd').css('background-color','green');

//第几个
// $('div:eq(0)').css('background-color', 'green');
// 
// $('div:gt(2)').css('background-color', 'green');
// $('div:lt(2)').css('background-color', 'green');

//h标签渲染
// $(':header').css('background-color', 'green');


// function animateDiv() {
// 	$('div:eq(0)').animate({
// 		width: '50%'
// 	}, 'slow');
// 	$('div:eq(0)').animate({
// 		width: '100%'
// 	}, 'slow', animateDiv);
// }

// animateDiv();
// /*
// // $('document').ready(function(){
// // 	animateDiv();
// // });
// 
// // $(function(){
// // 	animateDiv();
// // }) //相当于$('document').ready(function(){}) 简写
// 
// */
// $('document').ready(function() {
// 	$('#theB').click(function() {
// 		$(':animated').css('background-color', 'yellow');
// 	});
// });

// $('div:nth-child(3n)').css('background-color', 'red');

//4.可见性过滤器

//display:none 或者 input=hidden 不可见，没有它的位置
//visibility:hidden 或者 opactiy：0  不可见但是有位置
// $(':hidden').css('display','black');
//$(":visible").css('background-color', 'red');

//5.内容过滤 
//  包含字符

// $('div:contains(\'3\')').css('background-color', 'red');

// 空的

// $(":empty").css('background-color', 'red');

// 包含某些子元素或者文本
// $('div:parent').css('background-color','green');

//包含子元素
// $('div:has(p)').css('background', 'red');

//6.属性  过滤选择器
//带有属性的

// $('div[myAttr]').css('background-color','red');  

//带有属性，并且复合属性值
// $('div[myAttr=\'a11\']').css('background-color', 'red');

//不带有属性，并且复合属性值
// $('div[myAttr!=\'a11\']').css('background-color', 'red');

//带数显，但是不符合属性值
// $('div').filter('myAttr').filter('[myAttr!=\'a11\']').css('background-color','red');

//等价于
// $('div[myAttr][myAttr!=\'a11\']').css('background-color','red');

//属性值以XXX开头
// $('div[myAttr^=\'a11\']').css('background-color', 'red');

//属性值以XXX结尾
// $('div[myAttr$=\'a11\']').css('background-color', 'red');

//表单选择器
// $(':input').css('display', 'none');
// $(':text').css('display','none');
// $(':password').css('display','none');
// $(':radio').css('display','none');
// $(':checkbox').css('display','none');
// $(':submit').css('display','none');
// $(':reset').css('display','none');
// $(':button').css('display','none');
// $(':image').css('display','none');
// $(':file').css('display','none');

  //$(':enabled').css('display','none');
 // $(':disabled').css('display','none');


