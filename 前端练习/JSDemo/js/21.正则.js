/*
1.正则表达式（英语：Regular Expression，在代码中常简写为regex、regexp或RE）使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式
    什么是正则表达式？
        正则表达式是由一个字符序列形成的搜索模式。
        当你在文本中搜索数据时，你可以用搜索模式来描述你要查询的内容。
        正则表达式可以是一个简单的字符，或一个更复杂的模式。
        正则表达式可用于所有文本搜索和文本替换的操作。

2.正则表达式定义方式
    1.RegExp类型
    2. 直接量/字面量

3.常用的正则字符

4.正则表达式的方法


*/

//1.RegExp类型:
/*
RegExp(exp，param) 
    @exp:指正则表达式:可以是任何简单或者复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反向引用
    @param:表示参数   
        i: 表示不区分大小写模式。
        g:表示全局模式,即模式将被应用到所有字符串，而非在发现第一个匹配项时立即停止。
        m:表示多行模式，即在到达一行文本末尾时还在继续查找下一行中是否存在于模式匹配的项。
    返回值：具有指定的模式和标志；具有指定的模式和标   志。如果参数 pattern 是正则表达式而不是字符串，那么 RegExp() 构造函数将用与指定的 RegExp 相同的模式和标志创建一个新的 RegExp 对象。如果不用 new 运算符，而将 RegExp() 作为函数调用，那么它的行为与用 new 运算符调用时一样，只是当 pattern 是正则表达式时，它只返回 pattern，而不再创建一个新的 RegExp 对象。
    抛出
    SyntaxError - 如果 pattern 不是合法的正则表达式，或 attributes 含有 "g"、"i" 和 "m" 之外的字符，抛出该异常。
    TypeError - 如果 pattern 是 RegExp 对象，但没有省略 attributes 参数，抛出该异常。

*/        
//var re=new RegExp("regexp","i");//等价于 var re=/regex/i
//多修饰符
//re=new RegExp("regex","ig");//等价于 re=/regex/ig

/*
常用正则字符(元字符)

1.\ : 将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。例如，'n' 匹配字符 "n"。'n' 匹配一个换行符。序列 '\' 匹配 "" 而 "(" 则匹配 "("。

2.^：匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 'n' 或 'r' 之后的位置。

3.$：匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 'n' 或 'r' 之前的位置。

4.*：匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。 等价于{0,}。

5.+：匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。

6.?：匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 中的"do" 。? 等价于 {0,1}。

7.{n}：n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。

8.{n,}：n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。

9.{n,m}：m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。

10.?：当该字符紧跟在任何一个其他限制符 (*, +, ?, {n}, {n,}, {n,m}) 后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串 "oooo"，'o+?' 将匹配单个 "o"，而 'o+' 将匹配所有 'o'。

11.·：匹配除 "n" 之外的任何单个字符。要匹配包括 'n' 在内的任何字符，请使用象 '[.n]' 的模式。

12.(pattern)：匹配 pattern 并获取这一匹配。所获取的匹配可以从产生的 Matches 集合得到，在VBScript 中使用 SubMatches 集合，在JScript 中则使用 0…0…9 属性。要匹配圆括号字符，请使用 '(' 或 ')'。

13.(?:pattern)：匹配 pattern 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用 "或" 字符 (|) 来组合一个模式的各个部分是很有用。例如， 'industr(?:y|ies) 就是一个比 'industry|industries' 更简略的表达式。

14.(?=pattern)：正向预查，在任何匹配 pattern 的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，'Windows (?=95|98|NT|2000)' 能匹配 "Windows 2000" 中的 "Windows" ，但不能匹配 "Windows 3.1" 中的 "Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。

15.(?!pattern)：负向预查，在任何不匹配 pattern 的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如'Windows (?!95|98|NT|2000)' 能匹配 "Windows 3.1" 中的 "Windows"，但不能匹配 "Windows 2000" 中的 "Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始

16.x|y：匹配 x 或 y。例如，'z|food' 能匹配 "z" 或 "food"。'(z|f)ood' 则匹配 "zood" 或 "food"。

17.[xyz]：字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。

18.[^xyz]：负值字符集合。匹配未包含的任意字符。例如， '1' 可以匹配 "plain" 中的'p'。

19.[a-z]：字符范围。匹配指定范围内的任意字符。例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符。

20.[^a-z]：负值字符范围。匹配任何不在指定范围内的任意字符。例如，'2' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符。

21.\b：匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。

22.\B：匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。

23.\cx：匹配由 x 指明的控制字符。例如， cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 'c' 字符。

24.\d：匹配一个数字字符。等价于 [0-9]。

25.\D：匹配一个非数字字符。等价于[^0-9]。

26.\f：匹配一个换页符。等价于 x0c 和 cL。

27.\n：匹配一个换行符。等价于 x0a 和 cJ。

28.\r：匹配一个回车符。等价于 x0d 和 cM。

29.\s：匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ fnrtv]。

30.\S：匹配任何非空白字符。等价于 4。

31.\t：匹配一个制表符。等价于 x09 和 cI。

32.\v：匹配一个垂直制表符。等价于 x0b 和 cK。

33.\w：匹配包括下划线的任何单词字符。等价于'[A-Za-z0-9_]'。

34.\W：匹配任何非单词字符。等价于 '5'。

35.\xn：匹配 n，其中 n 为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，'x41' 匹配 "A"。'x041' 则等价于 'x04' & "1"。正则表达式中可以使用 ASCII 编码。

36.\num：匹配 num，其中 num 是一个正整数。对所获取的匹配的引用。例如，'(.)1' 匹配两个连续的相同字符。

37.\n：标识一个八进制转义值或一个向后引用。如果 n 之前至少 n 个获取的子表达式，则 n 为向后引用。否则，如果 n 为八进制数字 (0-7)，则 n 为一个八进制转义值。

38.\nm：标识一个八进制转义值或一个向后引用。如果 nm 之前至少有 nm 个获得子表达式，则 nm 为向后引用。如果 nm 之前至少有 n 个获取，则 n 为一个后跟文字 m 的向后引用。如果前面的条件都不满足，若 n 和 m 均为八进制数字 (0-7)，则 nm 将匹配八进制转义值 nm。

39.\nml：如果 n 为八进制数字 (0-3)，且 m 和 l 均为八进制数字 (0-7)，则匹配八进制转义值 nml。

*/

/*
运算符优先级
    则表达式从左到右进行计算，并遵循优先级顺序，这与算术表达式非常类似。
    相同优先级的从左到右进行运算，不同优先级的运算先高后低。下表从最高到最低说明了各种正则表达式运算符的优先级顺序：
    1.   \	                            转义符
    2.   (), (?:), (?=), []      	    圆括号和方括号
    3.   *, +, ?, {n}, {n,}, {n,m}	    限定符
    4.   ^, $,\任何元字符、任何字符       定位点和序列（即：位置和顺序）
    5.   |       	                    替换，"或"操作字符具有高于替换运算符的优先级，使得"m|food"匹配"m"或"food"。若要匹配"mood"或"food"，请使用括号创建子表达式，从而产生"(m|f)ood"。
*/

//RegExp 对象方法
    //compile:编译正则表达式 1.用于在脚本执行过程中编译正则表达式。 2.也可用于改变和重新编译正则表达式。
//在字符串中全局搜索 "man"，并用 "person" 替换。然后通过 compile() 方法，改变正则表达式，用 "person" 替换 "man" 或 "woman"，：

        var str="Every man in the world! Every woman on earth!";
        var patt=/man/g;
        var str2=str.replace(patt,"person");
        document.write(str2+"<br />");
        patt=/(wo)?man/g;
        patt.compile(patt);
        str2=str.replace(patt,"person");
        document.write(str2);

    //exec:用于检索字符串中的正则表达式的匹配。如果字符串中有匹配的值返回该匹配值，否则返回 null。备注：index属性保存匹配到字符串所在位置的下标

        var str=" Hello \n hello world";
        var patt=/hello/g;
        var result=patt.exec(str);
        console.log("匹配结果为："+result);//匹配结果为：hello

    //test:用于检测一个字符串是否匹配某个模式.如果字符串中有匹配的值返回 true ，否则返回 false。

        var str="hello world";
        var patt=/hello/g;
        var result=patt.test(str);
        console.log("是否存在hello:"+result);//是否存在hello:true

//String 对象方法

    //search:用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串;如果没有找到任何匹配的子串，则返回 -1。
        var str="Hello hello world";
        console.log(str.search("hello"));//search 方式匹配到字符串所在位置的下标

    //match:在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。返回值：匹配值组成的数组
        /*
        注意： match() 方法将检索字符串 String Object，以找到一个或多个与 regexp 匹配的文本。这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。如果没有找到任何匹配的文本， match() 将返回 null。否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。
        */
            var str="hello Hello world World hello world";
            console.log(str.match(/hello/g));//["hello", "hello"]
           
    //replace:用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。返回值：新的字符串；该方法不会改变原始字符串。
            //@searchValue:查找的值（可以是正则表达式）
            //@replaceValue:替换的值
            var str="hello world";
            var patt=/hello/g;
            console.log(str.replace(patt,"Hello"));//Hello World

    //split:用于把一个字符串分割成字符串数组;返回值：数组 ；提示如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。注意： split() 方法不改变原始字符串。
            var str="hello  world";
            console.log(str.split(""));//["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
            console.log(str.split(/\s/));//["hello", "", "world"]
