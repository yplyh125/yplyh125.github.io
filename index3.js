
$(document).ready(function(){
	$.getJSON("index3.json",function(data){
		
		//할 일 처리
		let member_data="";
		$.each(data,function(key,value){
			console.log(key);
			member_data+="<tr>";
			member_data+="<td>"+value.index+"</td>"
			member_data+="<td>"+value.time+"</td>"
			member_data+="<td>"+value.address+"</td>"
            member_data+="<td>"+value.name+"</td>"
			member_data+="<td><a href='tel:"+value.number+"'>"+value.number+"</a></td>"
            console.log("d"+value.number)
			member_data+="</tr>";
			
		});
		$("#member_table").append(member_data);
        
	});
});

