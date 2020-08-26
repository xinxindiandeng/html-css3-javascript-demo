//AJAX in jquery
$(document).ready(function() {
	$('#thB').click(function() {
		htmlobj = $.ajax({
			type: 'get',
			url: 'json/data.json',
			async: true,
			dataType: 'json',
			success: function(data) {
				//$('#theD').text(JSON.stringify(data));
				console.log(data);
				$('#theD').empty();
				//$('#theD').append(jsonToHtml(JSON.stringify(data)));
				
				$('#theD').append(jsonToHtml1(data));
			}
		});
	});
});

function jsonToHtml(jsonstr) {
	var strtmp = '<table>';
	var json = JSON.parse(jsonstr);
	var lines = json['LINE'];
	for (var i = 0; i < lines.length; i++) {
		var colums = lines[i]['COLUMN'];
		strtmp += '\n\r\t<tr>';
		strtmp += '\n\r\t<td>' + colums[0]['Text'] + '</td>';
		strtmp += '\n\r\t<td>' + colums[1]['Text'] + '</td>';
		strtmp += '\n\r\t</tr>';
	}
	strtmp += '</table>'
	return strtmp;
}
//jqurey写法
function jsonToHtml1(json) {
	//生成Table对象
	var table = $('<table/>');
	//数组循环
	$(json['LINE']).each(function() {
		//添加tr 到 table 上
		var tr = $('<tr/>').appendTo(table);
		//this 指 line 集合
		$(this['COLUMN']).each(function() {
			//this : column 集合
			var td = $('<td/>').html(this['Text']).appendTo(tr);
		});
	});

	return table;
}
