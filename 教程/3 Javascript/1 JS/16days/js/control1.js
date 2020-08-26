//ajax  js原生通过xml实现

var xmlHttp;
//异步模式
// function loadXMLDoc(url) {
// 	xmlHttp = null;
// 	if (window.XMLHttpRequest) { //code for IE7,Firefox,Opera,Chrome
// 		xmlHttp = new XMLHttpRequest();
// 	} else if (window.ActiveXObject) { //Activex->COM //IE6,IE5
// 		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
// 	}
// 
// 	//config http object
// 	if (xmlHttp != null) {
// 		console.log(xmlHttp);
// 		//config event to response function
// 		xmlHttp.onreadystatechange = stateChange;
// 
// 		xmlHttp.open('GET', url, true);
// 		/*
// 		//open 参数详解
// 			//参数1：method：get;post
// 					get:将参数放在url后面,使用&和？的方式拼写
// 						例如：http://www.baidu.com?key1=value&key2=value2&...
// 						局限:1.最长2048 
// 							 2.特殊字符需要编码urlencode
// 							 3.可能会缓存（防止缓存方法：url?t=Math.rodom();ps:链接不一样不缓存）
// 					post:先发http头,再发送参数，参数被放在后续的数据包中，没有长度限制，不会缓存
// 			//参数2:url 
// 			//参数3：async:是否异步
// 						  true:异步，调用返回，数据包来的时候会触发事件
// 						  false:同步
// 		*/
// 		
// 		xmlHttp.send();
// 	} else {
// 		console.log("错误，未读到数据");
// 	}
// }
// 
// 
// //Response function
// function stateChange() {
// 	if (xmlHttp.readyState == 4) { //4.loaded
// 		if (xmlHttp.status == 200) { //200 ok  
// 			var theDIV = document.getElementById('theD');
// 			//theDIV.innerText = xmlHttp.responseText;
// 			var xml = xmlHttp.responseXML;
// 			console.log(xml);
// 			theDIV.innerHTML = xmlForHtml(xml);
// 		} else {
// 			console.log("读取错误");
// 		}
// 	}
// }
// 
// function xmlForHtml(xml) {
// 	var strTmp = "<table>";
// 	var lines = xml.getElementsByTagName('LINE');
// 	console.log(lines);
// 	for (i = 0; i < lines.length; i++) {
// 		var colums = lines[i].children;
// 		console.log(colums);
// 		strTmp += '\n\r\t<tr>';
// 		strTmp += '\n\r\t<td>' + colums[0].textContent + "</td>";
// 		strTmp += '\n\r\t<td>' + colums[1].textContent + "</td>";
// 		// for (var j = 0; j < colums.length; j++) {
// 		// 	strTmp+='\n\r\t<td>'+colums[j].childNodes[0].nodeValue+"</td>";
// 		// }	
// 	}
// 	strTmp += '\n\r</table>';
// 	console.log(strTmp);
// 	return strTmp;
// }

//同步模式
function loadXMLDoc(url) {
	xmlHttp = null;
	if (window.XMLHttpRequest) { //code for IE7,Firefox,Opera,Chrome
		xmlHttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) { //Activex->COM //IE6,IE5
		xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
	}

	//config http object
	if (xmlHttp != null) {
		console.log(xmlHttp);
		xmlHttp.open('GET', url, false);
		xmlHttp.send();
		var thediv=document.getElementById('theD');
		thediv.innerHTML=xmlForHtml(xmlHttp.responseXML);
	} else {
		console.log("错误，未读到数据");
	}
}


function xmlForHtml(xml) {
	var strTmp = "<table>";
	var lines = xml.getElementsByTagName('LINE');
	console.log(lines);
	for (i = 0; i < lines.length; i++) {
		var colums = lines[i].children;
		console.log(colums);
		strTmp += '\n\r\t<tr>';
		strTmp += '\n\r\t<td>' + colums[0].textContent + "</td>";
		strTmp += '\n\r\t<td>' + colums[1].textContent + "</td>";
		// for (var j = 0; j < colums.length; j++) {
		// 	strTmp+='\n\r\t<td>'+colums[j].childNodes[0].nodeValue+"</td>";
		// }	
	}
	strTmp += '\n\r</table>';
	console.log(strTmp);
	return strTmp;
}