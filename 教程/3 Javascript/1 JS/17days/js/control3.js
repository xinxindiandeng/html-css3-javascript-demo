//jquery常用方法

//1.获取 或者设定内容 text()

// console.log($('#id01').text());

// // $('#id01').text('div1+aaaaa');

// $('#id01').text(function(i,origText){
//     console.log(i+'-'+origText);
//     return 'aaaa';
// })

// 2.获得或设定html .html()
// console.log($('#id01').html());
// $('#id01').html('55<b>55</b>55');
// $('#id01').html(function(i,origText){
// console.log(i+'-'+origText);
// return 'aaaa';
// });

// 3.获得或者设定表单控件的值val
// console.log($('input:first').val());
// $('input:first').val('2222');
// $('input:first').val(function(i,origText){
// console.log(i+'-'+origText);
// return 'aaaaa';
// });

//  4.获得或者设定表单控件的类型
// console.log($('input:first').attr('type'));
// $('input:first').attr('type', 'password');
// $('input:first').attr({
//     'type':'password',
//     'value':'123456'
// });

//eval 自己产生一个string，当作js脚本，交由js引擎运行

// eval('var a=5');