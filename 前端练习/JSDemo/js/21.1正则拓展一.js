//1.简单匹配 字符本身
// var str="hello world";
// console.log(str.match(/hello/g));//["hello"]
// console.log(str.match("hello"));//["hello", index: 0, input: "hello world"]

//2.范围匹配[*],[*]代指一个字符,*代表字符的范围:常规[0-9];[a-z];[A-Z]
    //判断字符串是不是16进制数
    // var patt=/^(0x)?([0-9a-fA-f])+$/g;
    // var str="0x111";
    // var str1="124567890abcdABCD";
    // console.log(patt.test(str1));
    // console.log(str.match(patt));

//3.负向匹配：排除字符串；通常使用^表示,位于[]内
    // var patt=/[^0-9]/g;
    //  var str="678";
    //  console.log(patt.test(str));//false
    // var str1="hello";
    // console.log(patt.test(str1));//true

    // var str2="hello world 678";
    // console.log(patt.test(str2));//true
    
    // var str3 ="6789 hello world";
    // console.log(patt.test(str3));//true

//4.量词 一个前面单位出现的次数
        //{n}:出现n次
        //{m,n}:至少m次,最多n次
        //{m,}:最少m次，最多不限
        //?:   0次或1次   等价于{0,1}
        //+:   1次或者多次 等价于{1,}
        //*:   0次或者多次 等价于{0,}
        //贪婪量词：?; +; * 找到匹配的最大
        //惰性量词：*?;+? 找到匹配最小

        // str="abbbaabbbaaabbb123bbb";
        // console.log(str.match(/.*bbb/g));//贪婪 尽可能大的字符串 //["abbbaabbbaaabbb123bbb"]
        // console.log(str.match(/.*?bbb/g));//惰性  尽可能小的字符串// ["abbb", "aabbb", "aaabbb", "123bbb"]

//5.通配符  预定义类
        //  .=[^\n\r]  除回车以外,都可以匹配
        //  \d=[0-9]  数字
        //  \D=[^0-9] 非数字
        //  \w=[a-zA-Z_0-9] 所有字母(包含大小写)
        //  \W=[^a-zA-Z_0-9] 其他
        //  \s=[\t\n\x0b\f\r] 空格或者空白
        //  \S 非空格或者非空白
        //  \b  表示边界(两个字符中间的位置) 一遍是\w,另一边是\W
        //  \B 不是边界
        //	^	表示开始
        //	$	表示结束

        // var  str='a==b';
        // console.log(str.match(/.\b./g));
        // console.log(str.match(/^./g));
    
//6.分组  一个真正表达式，不但可以对整个匹配进行操作，还可以对其中()中的子字符串进行匹配，分组
//(pattern) 匹配pattern同时捕获结果，自动设定组好  /1,RegExp.$1  反向引用
//(?<name>parttern) 匹配pattern同时捕获结果，设定name为组名 \k<name>:反向引用
/*
RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个子匹配(以括号为标志)字符串，以此类推，RegExp.2, RegExp.3, ..RegExp.$99总共可以有99个匹配。
*/
//var re= /^(\d{4})-(\d{1,2})-(\d{1,2})$/; //正则表达式 匹配出生日期(简单匹配)    
// re.exec('1985-10-15');
// s1=RegExp.$1;
// s2=RegExp.$2;
// s3=RegExp.$3;
// console.log(s1+" "+s2+" "+s3)//结果为1985 10 15

// re.test('1985-10-15');
// s1=RegExp.$1;
// s2=RegExp.$2;
// s3=RegExp.$3;
// console.log(s1+" "+s2+" "+s3)//结果为1985 10 15

// var str="1992-10-01";
// console.log(str.match(re));// ["1992-10-01", "1992", "10", "01", index: 0, input: "1992-10-01"]
// console.log(RegExp.$1+RegExp.$2+RegExp.$3);//19921001

//变量声明
// var varPatt=/^var\s+([a-zA-Z]+)?([_,-]*)?([0-9]*)?/gi;
// var str="var abc";
// var str1="var abc_";
// var str2="var abc123";
// var str3="var abc-123";
// var str4="var   abc_456";
// var str5="var _123456";
// console.log(str.match(varPatt));
// console.log(str1.match(varPatt));
// console.log(str2.match(varPatt));
// console.log(str3.match(varPatt));
// console.log(str4.match(varPatt));
// console.log(str5.match(varPatt));

//函数声明
// var funcPatt=/^function\s+([a-zA-Z]+)?([_,-]*)?([0-9]*)?\s*\(\)\s*\{\}/g;
// var str='function  aaa(){}';
// var str1="function a_1(){}";
// var str2="functiona_1(){}";
// var str3="function a_1()  {}";
// console.log(str.match(funcPatt));
// console.log(str1.match(funcPatt));
// console.log(str2.match(funcPatt));
// console.log(str3.match(funcPatt));

//7.零宽(负向)先行\后行断言:零宽断言的意思是（匹配宽度为零，满足一定的条件/断言）别称：例如"环视"或者"预搜索"
/*
零宽断言正如它的名字一样，是一种零宽度的匹配，它匹配到的内容不会保存到匹配结果中去，最终匹配结果只是一个位置而已。
    作用是给指定位置添加一个限定条件，用来规定此位置之前或者之后的字符必须满足限定条件才能使正则中的字表达式匹配成功。
     注意:这里所说的子表达式并非只有用小括号括起来的表达式，而是正则表达式中的任意匹配单元。
javascript只支持零宽先行断言，而零宽先行断言又可以分为正向零宽先行断言，和负向零宽先行断言。


*/

// var str="abZW863";
// var reg=/ab(?=[A-Z])/;
// console.log(str.match(reg));//ab
//正则表达式的语义是:匹配后面跟随任意一个大写字母的字符串"ab"。最终匹配结果是"ab"，因为零宽断言"(?=[A-Z])"并不匹配任何字符，只是用来规定当前位置的后面必须是一个大写字母。

// var str="abZW863";
// var reg=/ab(?![A-Z])/;
// console.log(str.match(reg));//null
//则表达式的语义是:匹配后面不跟随任意一个大写字母的字符串"ab"。正则表达式没能匹配任何字符，因为在字符串中，ab的后面跟随有大写字母。

// str='reabc;rcaaa=bbb=';
// //寻找两个字符,两个字符后面以分号结尾
// console.log(str.match(/.{2}(?=;)/g));//bc
// //寻找四个字符,以ea开头
// console.log(str.match(/(?=ea)[a-z]{4}/g));//eabc 
// //寻找三个字母,不以分号结尾
// console.log(str.match(/[a-z]{3}(?!;)/g));//"rea", "rca", "bbb"
// //寻找不以re开头的三个字母
// console.log(str.match(/(?!re)[a-z]{3}/g));//"eab", "rca", "bbb"