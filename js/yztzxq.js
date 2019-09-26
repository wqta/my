$(function(){
	$(".shouchang").hover(function(){
	
		$(this).attr("src","img/img-show9.png")
	},function(){
		$(this).attr("src","img/img-show8.png")
		
	})
	
	
	
	
	var hoverTimer,outTimer
	$(".imglist li").hover(function(){
		clearTimeout(outTimer)
		var a=$(this);
		var b=0;
		var c=$(this).find("img").attr("src")
	
		hoverTimer=window.setTimeout(function(){
			$(".imglist li").each(function(){
				console.log($(this).css("border"))
				if($(this).css("border")=="2px solid rgb(255, 102, 0)"){
					$(this).css("border","2px solid white")
				}
				
			})

			a.css("border","2px solid #ff6600")
			$(".imgshow").attr("src",c)
		},500)
	},function(){
		clearTimeout(hoverTimer)
		var a=$(this)
		
			
//			a.css("border","2px solid white")
		
	})
	
	$(".addr-main").click(function(){
		if($("#addr").css("display")=="none"){
			$("#addr").css("display","block")
			$(".addr-main").find("img").attr("src","img/qyzz2.png")
		}else{
			$("#addr").css("display","none")
			$(".addr-main").find("img").attr("src","img/qyzz1.png")
		}
	})
	
	
	
	$(".reset").click(function(){
		$("#addr").css("display","none")
		$(".addr-main").find("img").attr("src","img/qyzz1.png")
	})
	
	$(".addr").click(function(){
		if($("#addr").css("display")=="none"){
			$(this).find("img").attr("src","img/xiyijiaddr1.png")
			$("#addr").css("display","block")
		}else{
			$(this).find("img").attr("src","img/xiyijiaddr2.png")
			$("#addr").css("display","none")
		}
	})
	
	
	$("#addr").hover(function(){
		$(this).css("display","block")
		$(".addr").find("img").attr("src","img/qyzz2.png")
	},function(){
		$(this).delay(1000).hide(0)
		$(".addr").find("img").attr("src","img/qyzz1.png")
	})
	
	
	$(".neiron").click(function(){
		$(".addr-neiron1").css("display","none")
		$(".addr-neiron2").css("display","none")
		$(".neiron1").find("img").attr("src","img/xiyijiaddr3.png")
		$(".neiron2").find("img").attr("src","img/xiyijiaddr3.png")
		$(this).find("img").attr("src","img/xiyijiaddr4.png")
	})
	
	$(".neiron1").click(function(){
		if($(".addr-neiron1").css("display")=="none"){
			$(".addr-neiron1").css("display","block")
			$(".addr-neiron2").css("display","none")
			$(this).find("img").attr("src","img/xiyijiaddr4.png")
			$(".neiron").find("img").attr("src","img/xiyijiaddr3.png")
			$(".neiron2").find("img").attr("src","img/xiyijiaddr3.png")
		}else{
			$(".addr-neiron1").css("display","none")
			$(this).find("img").attr("src","img/xiyijiaddr3.png")
		}
	})
	
	
	$(".neiron2").click(function(){
		if($(".addr-neiron2").css("display")=="none"){
			$(".addr-neiron2").css("display","block")
			$(".addr-neiron1").css("display","none")
			$(this).find("img").attr("src","img/xiyijiaddr4.png")
			$(".neiron").find("img").attr("src","img/xiyijiaddr3.png")
			$(".neiron1").find("img").attr("src","img/xiyijiaddr3.png")
		}else{
			$(".addr-neiron2").css("display","none")
			$(this).find("img").attr("src","img/xiyijiaddr3.png")
		}
	})
	
	
	$(".right6 input[type='text']").blur(function(){
		if($(this).val()>3){
			$(this).val("3");
		}
	})
	
})