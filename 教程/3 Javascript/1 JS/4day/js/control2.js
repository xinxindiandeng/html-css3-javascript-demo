//四则运算  栈应用

//四则运算式，先乘除后加减
//1.算法思路
//	低优先级操作符遇到其右高优先级运算符，右侧优先运算--------（1）
//	相同优先级的操作符，左侧优先运算-------------(2)
//	高优先级操作符遇到其右低优先级运算符，左侧的优先计算----3

var x="2+3*5-4";

//对于每一个操作符,只有后面的操作符的优先级,高于当前操作符,遵循1原则  等待  等于,低于 遵循2原则,直接计算


//2.软件工程思路
//	2.1 测试用例
