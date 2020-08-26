//编码

//计算编码长度(使用的字符串编码为GBK，字母长度是1，汉字字母长度是2)

// function getByes(str) {
// 	var num = 0;
// 	for (var i = 0; i < str.length; i++) {
// 		if (str.charCodeAt(i) > 127) {
// 			num += 2;
// 		} else {
// 			num++;
// 		}
// 	}
// 	return num;
// }
// console.log(getByes("a我"));

//GBK转utf-8;编码转汉字
var arrUint8=new Uint8Array([206,210]);
var decoder=new TextDecoder("gbk");
document.write(decoder.decode(arrUint8));

//汉字改 汉字解码

var str='我';
var encoder=new TextEncoder("utf-8");
console.log(encoder.encode(str));