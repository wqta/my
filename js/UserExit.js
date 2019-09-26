$(function(){
	$(".buyList-addr").click(function(){
		$(this).css("border","2px solid #19CAFD").siblings(".buyList-addr")
		.css("border","2px solid white")
		
		var addrProvince=$(this).children().children().siblings(".addr-province").html();
		var addrCity=$(this).children().children().siblings(".addr-city").html();
		var addrName=$(this).children().children().siblings(".addr-name").html();
		var addr=$(this).children().siblings(".buyList-addr-body").children().children().html(); 
//		console.log(addr)
		$(".buyList-addr-self .addr-province").html(addrProvince);
		$(".buyList-addr-self .addr-city").html(addrCity);
		$(".buyList-addr-self .addr-name").html(addrName);
		$(".buyList-addr-self1 .buyList-addr-addr").html(addr);
		
	})
	
	$(".buyList-addr").hover(function(){
		$(this).children(".buyList-addr-footer").show()
	},function(){
		$(this).children(".buyList-addr-footer").hide()
	})
	
	
	$(".buyList-addr1").click(function(){
		$(this).css("border","2px solid white")
		$(".buyList-addAddr").css("display","block").css("z-index","2")
		$("#buyList-cap").css("display","block");
	})
	
	
	$(".buyList-addAddr-header-close").click(function(){
		$(this).parents(".buyList-addAddr").css("display","none")
		$("#buyList-cap").css("display","none");
	})
	
	$(".buyList-addAddr-box-left").click(function(){
//		alert("1")
//		window.location.href="buyList.html"
		$(".buyList-addAddr").css("display","none")
		$("#buyList-cap").css("display","none");
	})
	
	$(".buyList-addAddr-box-right").click(function(){
		$(this).parents(".buyList-addAddr").css("display","none")
		$("#buyList-cap").css("display","none");
	})
	
	
	$(".buyList-word1").click(function(){
		$(".word1").css("display","none")
		$(".word2").css("display","block")
		$(".buyList-word1").css("border","0")
	})
	
	
	$(".Useraaa").click(function(){
		var index=$(this).index()
		//console.log(index)//123
		$(this).children().css("color","#CB2D01").parents(".Useraaa").siblings(".Useraaa").children().css("color","#473d3d")
		if(index==1){
			$(".aabbcc").eq(0).show().siblings().hide()
		}
		if(index==2){
			$(".aabbcc").eq(1).show().siblings().hide()
		}
		if(index==3){
			$(".aabbcc").eq(2).show().siblings().hide()
		}
	}
	)
	
	
	
	$(".UserLi").click(function(){
		$(this).css("color","#CB2D01").siblings(".UserLi").css("color","#706d6d")
		
		var index=$(this).index();
		
		$(".Admin-UserLists").eq(index).show().siblings(".Admin-UserLists").hide()
	
	})
})