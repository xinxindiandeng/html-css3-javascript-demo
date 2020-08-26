//显示相关
function f(e){
    console.log(e + "-----被点击了");
}

$(function(){
    $('button:eq(1)').click(function (e) { 
        $('p').show(2000,f(e));       
     });

     $('button:eq(2)').click(function (e) { 
        $('p').hide(2000,f(e));       
     });

     $('button:eq(3)').click(function (e) { 
        $('p').toggle(2000,f(e));       
     });

     $('button:eq(4)').click(function (e) { 
        $('p').fadeIn(2000,f(e));       
     });

     $('button:eq(5)').click(function (e) { 
        $('p').fadeOut(2000,f(e));       
     });

     $('button:eq(6)').click(function (e) { 
        $('p').fadeToggle(2000,f(e));       
     });

     $('button:eq(7)').click(function (e) { 
        $('p').slideDown(2000,f(e));       
     });

     $('button:eq(8)').click(function (e) { 
        $('p').slideUp(2000,f(e));       
     });

     $('button:eq(9)').click(function (e) { 
        $('p').slideToggle(2000,f(e));       
     });
})



/*

$(document).ready(function () {
    $('button').click(function (e) { 
        $('p').show(2000,f(e));       
     });
});

$().ready(function () {
    $('button').click(function (e) { 
        $('p').show(2000,f(e));       
     });
});

*/