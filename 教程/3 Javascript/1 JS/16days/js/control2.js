//原生js通过json实现ajax

var jsonHttp;
//异步操作
function loadJsonDoc(url){
	jsonHttp=null;
	if (window.XMLHttpRequest) { //code for IE7,Firefox,Opera,Chrome
		jsonHttp = new XMLHttpRequest();
	} else if (window.ActiveXObject) { //Activex->COM //IE6,IE5
		jsonHttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	if(jsonHttp!=null){
		jsonHttp.onreadystatechange=stateChange;
		jsonHttp.open('GET',url+'?t='+Math.random(),true);
		jsonHttp.send();
	}
}

function stateChange()
{
	if(jsonHttp.readyState==4){
		if(jsonHttp.status==200)
		{
			var thediv=document.getElementById('theD');
			//thediv.innerText=jsonHttp.responseText;
			thediv.innerHTML=jsonToHtml(jsonHttp.responseText);
		}
	}
}
function jsonToHtml(jsonstr){
	var strtmp='<table>';
	var json=JSON.parse(jsonstr);
	var lines=json['LINE'];
	for(var i=0;i<lines.length;i++){
		var colums=lines[i]['COLUMN'];
		strtmp+='\n\r\t<tr>';
		strtmp+='\n\r\t<td>'+colums[0]['Text']+'</td>';
		strtmp+='\n\r\t<td>'+colums[1]['Text']+'</td>';
		strtmp+='\n\r\t</tr>';
	}
	strtmp+='</table>'
	return strtmp;
	
}