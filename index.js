
$(document).ready(function(){
	$.getJSON("index2.json",function(data){
		
		//할 일 처리
		let member_data="";
		$.each(data,function(key,value){
			console.log(key);
			member_data+="<tr>";
			member_data+="<td>"+value.index+"</td>"
			member_data+="<td>"+value.address+"</td>"
            member_data+="<td>"+value.name+"</td>"
			member_data+="<td>"+value.number+"</td>"
			member_data+="</tr>";
			
		});
		$("#member_table").append(member_data);
        
	});
});

