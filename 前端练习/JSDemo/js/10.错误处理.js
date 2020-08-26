/*
JavaScript 错误 - throw、try 和 catch
try 语句测试代码块的错误。

catch 语句处理错误。

throw 语句创建自定义错误。

JavaScript 抛出（throw）错误
当错误发生时，当事情出问题时，JavaScript 引擎通常会停止，并生成一个错误消息。

描述这种情况的技术术语是：JavaScript 将抛出一个错误。

JavaScript try 和 catch
try 语句允许我们定义在执行时进行错误测试的代码块。

catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。

JavaScript 语句 try 和 catch 是成对出现的。
 try
   {
   //在这里运行代码
   }
 catch(err)
   {
   //在这里处理错误
   }
Error 对象：name 和 message

   //系统定义错误类型
ReferenceError:找不到对象时
TypeError:错误的使用了类型或对象的方法时
RangeError:使用内置对象的方法时，参数超范围
SyntaxError:语法写错了
EvalError:错误的使用了Eval   
URIError:URI错误
 

*/
function myFunction(x){
    try{       
        if(x=="")    throw "值为空";      // 根据获取的值，抛出错误
        if(isNaN(x)) throw new Error( "不是数字");
        if(x>10)     throw "太大";
        if(x<5)      throw "太小";
    }
    catch(err){ 
      console.log(err);
      console.log(err.name);
      console.log(err.message);
    }
    finally{
      console.log("finally 我都执行了");
    }
}
myFunction("");
myFunction("abc");
myFunction(6);
myFunction(11);
myFunction(3);