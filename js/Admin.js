$(function(){
	
	$(".car-item").each(function(){
		//单价
		var princeOne=$(this).children(".car-price1").children().children().val();
		var num=$(this).children(".car-num1").children().children(".car-input").val();
		$(this).children(".car-all1").html(princeOne*num+".00")
	})
	
	
	
	
	
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
		var princeOne=parseFloat($(this).parents(".car-num1").siblings(".car-price1").children().children().val());
//		alert(parseInt(princeOne));
		//合计
		var allprince=parseFloat($(this).parents(".car-num1").siblings(".car-all1").html());
//		alert(parseInt(allprince))
		
		if($(this).parent().siblings(".car-input").val()>0){
			a--;
			$(this).parent().siblings(".car-input").val(a);
			var max=$(this).parent().siblings(".maxN").children(".maxNum").html(a);
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
		
		//单价
		var princeOne=parseFloat($(this).parents(".car-num1").siblings(".car-price1").children().children().val());
//		alert(parseInt(princeOne));、
		//合计
		var allprince=parseFloat($(this).parents(".car-num1").siblings(".car-all1").html());
//		alert(parseInt(allprince))
		
		
		if(a>=0){
			a++;
			allprince=a*princeOne;
			max=$(this).parent().siblings(".maxN").children(".maxNum").html(a);
			$(this).parent().siblings(".car-input").val(a);
			$(this).parents(".car-num1").siblings(".car-all1").html(allprince+".00");
			
			if($(this).parents(".car-num1").siblings(".car-checkbox1").children("input").prop("checked")==true){
				var allprice1=parseInt($(".all-priceNum").html());
				$(".all-priceNum").html(allprice1+princeOne+".00");
			}
		}
		
		
	})
	
	$(".car-input").blur(function(){
	
		var a=$(this).val();
		
//		console.log(a)
//		console.log(max)
		//单价
		var princeOne=parseInt($(this).parents(".car-num1").siblings(".car-price1").children().children().val())
		console.log(princeOne)
//     总价格
		var allprince=parseInt($(this).parents(".car-num1").siblings(".car-all1").html())
//		console.log(allprince)
		if(a>=0){
			
			var max=$(this).siblings(".maxN").children(".maxNum").html(a);
			$(this).parents(".car-num1").siblings(".car-all1").html(a*princeOne+".00")
			
		
		}
	})
	
	
	$(".car-prince2").blur(function(){
		var princeOne=$(this).val();
		var num=$(this).parents(".car-price1").siblings(".car-num1").children().children(".car-input").val();
		
		console.log(princeOne+" "+num)
		
		$(this).parents(".car-price1").siblings(".car-all1").html(princeOne*num+".00");
		
	})
	
	
	$(".pageNum li").click(function(){
		$(this).addClass("page-color").siblings("li").removeClass("page-color");
	})
	
	//分页
	$(".Admin-nav ul li").click(function(){
		var index=$(this).index();
		console.log(index)
		$(this).addClass("nav-color").siblings("li").removeClass("nav-color")
		$("#Admin-body .admin-body-a").eq(index).show().siblings().hide()
	})
	
	
	
	$(".abbb").click(function(){
		console.log($(this).children(".img1").attr("src"))
		if($(this).children(".img1").attr("src")=="../img/qyzz2.png"){
			
			$(this).parents("ul").siblings(".userddd").hide()
			$(this).children(".img1").attr("src","../img/qyzz1.png")
		}else{
			var index=$(this).index()
			console.log(index)
			$(this).children(".img1").attr("src","../img/qyzz2.png").parents("li").siblings("li").children(".img1").attr("src","../img/qyzz1.png")
			if(index==1){
				$(this).parents("ul").siblings(".userddd").eq(0).show().siblings(".userddd").hide()
			}else if(index==7){
				$(this).parents("ul").siblings(".userddd").eq(1).show().siblings(".userddd").hide()
			}
		}
		
		
		
	})
	
	
	
	$(".allUser").click(function(){
		if($(this).prop("checked")==true){
//			
			$(".allUser").prop("checked",true);
			$(".abbb").children("input").prop("checked",true)
		}else{
			$(".allUser").prop("checked",false);
			$(".abbb").children("input").prop("checked",false)
		}
	})
	
	
	//邮箱
	$(".AddUserEmain").blur(function(){
		var email=$(this).val();
//		console.log(email)
		var regex = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;
		if(!regex.test(email))
		{
			$(".Add-erro").html("邮箱不合法！");
			
		}else{
			$(".Add-erro").html("邮箱合法！");
			
		}
	})
	
})