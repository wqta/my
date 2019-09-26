$(function(){
	
	var sum=0;
	$(".buyList-item").each(function(){
		
		var a=$(this).children().siblings(".buyList1-7").children().html();
		sum+=parseInt(a);
	})
	$(".buylist-shop").html(sum+".00");
	$(".buylist-shopall").html($(".buylist-shop").html())
	
	/*border: 2px solid #19CAFD;*/
	$(".buyList-addrs").children().eq(0).css("border","2px solid #19CAFD")
	
	$(".buyList-addr").each(function(){
		console.log($(this).css("border"))
		if($(this).css("border")=="2px solid rgb(25, 202, 253)"){
			var addrProvince=$(this).children().children().siblings(".addr-province").html();
			var addrCity=$(this).children().children().siblings(".addr-city").html();
			var addrName=$(this).children().children().siblings(".addr-name").html();
			var addr=$(this).children().siblings(".buyList-addr-body").children().children().html(); 
//			console.log(addrProvince+" "+addrCity+" "+addrName+" "+addr)
//		console.log(addr)
//			alert(1)
			$(".buyList-addr-self .addr-province").html(addrProvince);
			$(".buyList-addr-self .addr-city").html(addrCity);
			$(".buyList-addr-self .addr-name").html(addrName);
			$(".buyList-addr-self1 .buyList-addr-addr").html(addr);
		}
		
	})
	
	
	
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
	
	
	$(".minus .inner").click(function(){
		//获取单价
		var princeOne=parseInt($(this).parents(".buyList1-4").siblings(".buyList1-3").children().html());
		//获取总价格
		var princeAll=parseInt($(this).parents(".buyList1-4").siblings(".buyList1-7").children().html());
		
		var a=$(this).parents(".minus").siblings(".car-input").val();
//		console.log(princeOne+" "+princeAll+" "+a)
		//获取到商品金额
		var shopprince=parseInt($(".buylist-shop").html());
		
		//获取到需要支付的金额
		var shopPay=parseInt($(".buylist-shopall").html());
//		console.log(shopprince+" "+shopPay)
		
		if(a>0){
			a--;
			$(this).parents(".minus").siblings(".car-input").val(a)
			$(this).parents(".buyList1-4").siblings(".buyList1-7").children().html(princeAll-princeOne+".00")
			$(".buylist-shop").html(shopprince-princeOne+".00");
			$(".buylist-shopall").html(shopPay-princeOne+".00");
			
		}else{
			$(this).parents(".minus").siblings(".car-input").html(0)
			
			$(this).parents(".buyList1-4").siblings(".buyList1-7").children().html(princeAll+".00")
		}
	})
	
	$(".plus .inner").click(function(){
		//获取单价
		var princeOne=parseInt($(this).parents(".buyList1-4").siblings(".buyList1-3").children().html());
		//获取总价格
		var princeAll=parseInt($(this).parents(".buyList1-4").siblings(".buyList1-7").children().html());
		//获取库存
		var b=parseInt($(this).parents(".buyList1-4").siblings(".buyList1-5").children().children().html());
		
		
		var a=$(this).parents(".plus").siblings(".car-input").val();
		console.log(princeOne+" "+princeAll+" "+a+" "+b)
		
		//获取到商品金额
		var shopprince=parseInt($(".buylist-shop").html());
		
		//获取到需要支付的金额
		var shopPay=parseInt($(".buylist-shopall").html());
		
		if(a>=0&&a<b){
			a++;
			$(this).parents(".plus").siblings(".car-input").val(a)
			$(this).parents(".buyList1-4").siblings(".buyList1-7").children().html(princeAll+princeOne+".00")
			$(".buylist-shop").html(shopprince+princeOne+".00");
			$(".buylist-shopall").html(shopPay+princeOne+".00");
		
		}else{
			$(this).parents(".plus").siblings(".car-input").html(b)
			$(this).parents(".buyList1-4").siblings(".buyList1-7").children().html(a*princeOne+".00")
		}
	})
	
	
	$(".car-input").blur(function(){
		//获取单价
		var princeOne=parseInt($(this).parents(".buyList1-4").siblings(".buyList1-3").children().html());
		//获取总价格
		var princeAll=parseInt($(this).parents(".buyList1-4").siblings(".buyList1-7").children().html());
		//获取库存
		var b=parseInt($(this).parents(".buyList1-4").siblings(".buyList1-5").children().children().html());
		//获取表格的值
		var a=$(this).val();
		var all=0;
		
//		console.log(princeOne+" "+princeAll+" "+a+" "+b)
		if(a>=0&&a<=b){
			all=a*princeOne;
			$(this).parents(".buyList1-4").siblings(".buyList1-7").children().html(all+".00");
			$(this).val(a);
			
			var sums=0;
			$(".buyList-item").each(function(){
		
				var a=$(this).children().siblings(".buyList1-7").children().html();
				sums+=parseInt(a);
			})
			$(".buylist-shop").html(sums+".00");
			$(".buylist-shopall").html($(".buylist-shop").html())
		}else{
			alert("输入错误！")
			$(this).val(1);
			$(this).parents(".buyList1-4").siblings(".buyList1-7").children().html(princeOne+".00");
			
			var sums=0;
			$(".buyList-item").each(function(){
		
				var a=$(this).children().siblings(".buyList1-7").children().html();
				sums+=parseInt(a);
			})
			$(".buylist-shop").html(sums+".00");
			$(".buylist-shopall").html($(".buylist-shop").html())
		}
		
		
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
	
	
	$(".pay-submit").click(function(){
		window.location.href="payList.html"
	})
	
	
})