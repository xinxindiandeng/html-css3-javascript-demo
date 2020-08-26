/* 
jquery事件

1. onload vs ready
    onload和ready不可以混用

*/

// ready 的三种写法
//1

// $('document').ready(function(){
//     console.log('ready1');
// });

//2
// $().ready(function () {
//     console.log('ready2');
// });


//3
$(function () {
    console.log('ready3');
    // $('div:eq(0)').click(function () { 
    //      console.log('div被单击了');
    // });

    // $('div:first').dblclick(function (e) { 
    //     console.log('div被双击了');   
    // });
    // $('div:eq(0)').mouseenter(function () { 
    //     console.log('鼠标进入');
    // });

    // $('div:first').mouseleave(function () { 
    //     console.log('鼠标离开');
    // });

    // $('div:first').hover(function () {
    //         // over
    //         $(this).css('background-color', 'red');

    //     }, function () {
    //         // out
    //         $(this).css('background-color', 'green');
    //     }
    // );

    // $(':button').focus(function (e) { 
    //     $(this).css('background-color', 'red'); 
    // });

    // $(':button').blur(function (e) { 
    //     $(this).css('background-color', 'yellow');       
    // });

    //bind  
    // 1.绑定事件  更优雅的管理事件，以object的形式

    // $(':button').bind({
    //     focus: function () {
    //         $(this).css('background-color', 'red');
    //     },
    //     blur: function () {
    //         $(this).css('background-color', 'yellow');  
    //     },
    // });

    // bind 传递参数
    // function handler(a){
    // console.log(a.data.msg);
    // }
    // $(':button').bind('focus', {msg:'hello'},handler);

    // $(':button:first').keydown(function (e) {
    //     var key = e.which;
    //     console.log("keydown:" + key);
    // });
    // $(':button:first').keyup(function (e) {
    //     var key = e.which;
    //     console.log("keyup:" + key);
    // });
    // $(':button:first').keypress(function (e) {
    //     var key = e.which;
    //     console.log("keypress:" + key);
    // });

    // $('div').delegate('p', 'click', function (event) {
    //     console.log(event.target);
    // });

    //on -->bind,delegate

    //1 代替bind

    // $(':button').on({
    //     focus: function () {
    //         $(this).css('background-color', 'red');
    //     },
    //     blur: function () {
    //         $(this).css('background-color', 'yellow');  
    //     },
    // });


    // on代替bind 传递参数
    // function handler(a){
    // console.log(a.data.msg);
    // }
    // $(':button').on('focus', {msg:'hello'},handler);

    //on 代替delegate
     $('div').on('click','p' , function (event) {
        console.log(event.target);
    });

})

//.live .die  .size  .toggle  1.8版本以上不用了