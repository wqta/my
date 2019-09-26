$(function(){
	
	$(".aaa").click(function(){
		var index=$(this).index();
//		alert(index)
		$(".wayinfo").children(".abc").eq(index).show().siblings(".abc").hide();
		$(this).css("background-color","white").siblings(".aaa").css("background-color","#fafafa")
		//$(this).css("border-bottom","0").siblings(".aaa").css("border-bottom","1px solid rgb(233, 233, 233)");
	})
	
})