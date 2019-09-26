$(function(){
	$("#qyzz-left h4").click(function(){
		if($(this).next().next().css("display")=="none"){
			var a=0;
			$(this).next().next().css("display","block");
			
			$(this).find("img").attr("src","../img/qyzz2.png");
			
			$("#qyzz-left ul").each(function(){
				if($(this).css("display")=="block"){
					a++;
				}
				
				
				
				
			})
		
			if(a>1){
					$(this).siblings("ul").hide()
					$(this).siblings("h4").find("img").attr("src","../img/qyzz1.png")
					
					
					$(this).next().next().css("display","block");
					$(this).find("img").attr("src","../img/qyzz2.png");

				}
		
		}else{
			$(this).next().next().css("display","none")
			$(this).find("img").attr("src","../img/qyzz1.png")
		}
	})
	
	
	    
	
})