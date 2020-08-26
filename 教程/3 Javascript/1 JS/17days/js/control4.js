//jquery DOM 添加,修改,删除

//1.append  在备选中元素的结尾插入内容，作为子元素

//2.prepend  在被选元素的开头插入内容，作为子元素

//3. after  在被选元素之后插入内容，作为同级元素

//4.before  在备选元素之前插入内容，作为同级元素

//创建元素，三种方法

// 1.html 
var text1='<p>p1</p>';

//2.jquery
var text2=$('<p></p>').text('p2');

//3.js原生
var text3=document.createElement('p');
text3.innerHTML='p3';

var text4='<p>p4</p>';
$('div:eq(1)').after(text1);
$('div:eq(1)').before(text1);
$('div:eq(1)').prepend(text4);

// remove() 自杀

// $('p:contains(p1)').remove();
// $('p').remove(':contains(p1)');

// empty() 父亲杀死儿子
// $('div:eq(1)').empty();

//css 操作

//addClass 添加类
// $('p:contains(p1)').addClass('CLS1');

//removeClass 移除类
// $('p:contains(p1)').removeClass('CLS1');

//标记类的状态
// $('button').click(function (e) { 
//   $('p:contains(p1)').toggleClass('CLS1');
// });

//样式操作

// // 1 操作一个
// $('p:contains(p1)').css('background-color', 'red');

//2.操作多个
// $("p:contains(p1)").css('background-color', 'red').css('color','green');
//=>等价于
// $('p:contains(p1)').css({
//   'background-color':'red',
//   'color':'green'
// });
