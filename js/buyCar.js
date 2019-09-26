$(function(){
	$(".allCar").click(function(){
	
		
		if($(this).prop("checked")==true){
			$(".car-checkbox1>input").each(function(){
				if($(this).prop("checked")!=true){
					$(this).prop("checked",true);
					$(this).parents(".car-item").css("background-color","beige")
					
				}
				
				var lengh=($(".car-items").length)
				
				$(".car-payNum").html(lengh)
				
			})
			
				var a=0;
				$(".car-checkbox1>input").each(function(){
					var prince=parseInt($(this).parent().siblings(".car-all1").html());
					a+=prince;
					
				})
				$(".all-priceNum").html(a+".00");
			
			$(".allCar").each(function(){
				$(this).prop("checked",true);
			})
			
			
			
		}else{
			$(".car-checkbox1>input").each(function(){
				if($(this).prop("checked")==true){
					$(this).prop("checked",false);
					$(this).parents(".car-item").css("background-color","white")
				}
			})
			
				$(".allCar").each(function(){
				$(this).prop("checked",false);
			})
				
				$(".car-payNum").html(0)
				$(".all-priceNum").html(0+".00");
		}
	})
	
	
	
	$(".car-checkbox1>input").click(function(){
		
		var lengh=($(".car-item").length)
		
		var prince=parseInt($(this).parent().siblings(".car-all1").html());
		var allprice=parseInt($(".all-priceNum").html());
//		console.log(prince)
//		console.log(allprice)
		
		var a=0;
		if($(this).prop("checked")==true){
			
			$(this).parents(".car-item").css("background-color","beige")
			allprice=allprice+prince;
			$(".all-priceNum").html(allprice+".00")
			
			$(".car-checkbox1>input").each(function(){
				if($(this).prop("checked")==true){
					a++;
				}
			})
			
			
			
			console.log(a)
			
			
			if(a==lengh){
				$(".allCar").each(function(){
					$(this).prop("checked",true);
				})
			}
			
			$(".car-payNum").html(a)
			
		}else{
			
			allprice=allprice-prince;
			$(".all-priceNum").html(allprice+".00")
			
			$(this).parents(".car-item").css("background-color","white");
			
			$(".car-checkbox1>input").each(function(){
				
				
				
				if($(this).prop("checked")==true){
					a++;
					
					
				}
			})
			
			if(a<lengh){
				$(".allCar").each(function(){
					
					$(this).prop("checked",false);
				})
			}
			
			$(".car-payNum").html(a)
		}
		
		
	})
	
	$(".minus .inner").click(function(){
		var a=$(this).parent().siblings(".car-input").val()
		//单价
		var princeOne=parseFloat($(this).parents(".car-num1").siblings(".car-price1").children().html());
//		alert(parseInt(princeOne));
		//合计
		var allprince=parseFloat($(this).parents(".car-num1").siblings(".car-all1").html());
//		alert(parseInt(allprince))
		
		if($(this).parent().siblings(".car-input").val()>0){
			a--;
			$(this).parent().siblings(".car-input").val(a);
//			console.log(a);
			allprince=a*princeOne;
//			console.log(allprince)
			$(this).parents(".car-num1").siblings(".car-all1").html(allprince+".00");
			
//			console.log($(this).parents(".car-num1").siblings(".car-checkbox1").children("input"))
			if($(this).parents(".car-num1").siblings(".car-checkbox1").children("input").prop("checked")==true){
				var allprice1=parseInt($(".all-priceNum").html());
				$(".all-priceNum").html(allprice1-princeOne+".00");
			}
			
		}else{
			
			$(this).parent().siblings(".car-input").html(0);
			$(this).parents(".car-num1").siblings(".car-all1").html(0.00);
		}
	})
	
	$(".plus .inner").click(function(){
		var a=$(this).parent().siblings(".car-input").val()
		var max=$(this).parent().siblings(".maxN").children(".maxNum").html();
		//单价
		var princeOne=parseFloat($(this).parents(".car-num1").siblings(".car-price1").children().html());
//		alert(parseInt(princeOne));、
		//合计
		var allprince=parseFloat($(this).parents(".car-num1").siblings(".car-all1").html());
//		alert(parseInt(allprince))
		
		
		if(a<max){
			a++;
			allprince=a*princeOne;
			
			$(this).parent().siblings(".car-input").val(a);
			$(this).parents(".car-num1").siblings(".car-all1").html(allprince+".00");
			
			if($(this).parents(".car-num1").siblings(".car-checkbox1").children("input").prop("checked")==true){
				var allprice1=parseInt($(".all-priceNum").html());
				$(".all-priceNum").html(allprice1+princeOne+".00");
			}
		}else{
			$(this).parent().siblings(".car-input").val(max);
			$(this).parent().siblings(".car-input").val(a);
			$(this).parents(".car-num1").siblings(".car-all1").html(allprince+".00");
		}
		
		
	})
	
	$(".car-input").blur(function(){
	
		var a=$(this).val();
		var max=$(this).siblings(".maxN").children(".maxNum").html();
//		console.log(a)
//		console.log(max)
		//单价
		var princeOne=parseInt($(this).parents(".car-num1").siblings(".car-price1").children().html())
//		console.log(princeOne)
//     总价格
		var allprince=parseInt($(this).parents(".car-num1").siblings(".car-all1").html())
//		console.log(allprince)
		if(a>=0&&a<=max){
			
			
			$(this).parents(".car-num1").siblings(".car-all1").html(a*princeOne+".00")
			
			if($(this).parents(".car-num1").siblings(".car-checkbox1").children("input").prop("checked")==true){
				var all=0;
				$(".car-checkbox1>input").each(function(){
					
					if($(this).prop("checked")==true){
						var allprince1=parseInt($(this).parent().siblings(".car-all1").html())
						console.log(allprince1)
						all=all+allprince1;
						console.log(all)
					}
				})
				
				$(".all-priceNum").html(all+".00");
				
			}
		}else{
			alert("输入有误！请查看库存")
		}
	})
	
	
	$(".carpay").click(function(){
		window.location.href="buyList.html"
	})
	
})

