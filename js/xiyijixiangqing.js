$(function(){
	$(".shouchang").hover(function(){
	
		$(this).attr("src","img/img-show9.png")
	},function(){
		$(this).attr("src","img/img-show8.png")
		
	})
	
	
	
	//触发后
	var hoverTimer,outTimer
	$(".imglist li").hover(function(){
		clearTimeout(outTimer)
		var a=$(this);
		var b=0;
		var c=$(this).find("img").attr("src")
		var d=$(this).find("img").attr("bimg")
	
		hoverTimer=window.setTimeout(function(){
			$(".imglist li").each(function(){
//				console.log($(this).css("border"))
				if($(this).css("border")=="2px solid rgb(255, 102, 0)"){
					$(this).css("border","2px solid white")
				}
				
			})

			a.css("border","2px solid #ff6600")
			$(".imgshow").attr("src",c)
			$(".imgshow").attr("jqimg",d)
		},500)
	},function(){
		clearTimeout(hoverTimer)
		var a=$(this)
		
			
//			a.css("border","2px solid white")
		
	})
	
	$(".addr-xiqing").click(function(){
		if($("#addr").css("display")=="none"){
			$("#addr").css("display","block")
			$(".addr-main").find("img").attr("src","../img/qyzz2.png")
		}else{
			$("#addr").css("display","none")
			$(".addr-main").find("img").attr("src","../img/qyzz1.png")
		}
	})
	
	$(".addr-main").mouseout(function(){
		if($("#addr").css("display")=="block"){
//			$("#addr").css("transition","1s")
//			$("#addr").css("display","none")
		}
	})
	
	
	$(".reset").click(function(){
		var a=$(".neiron").text()
		var b=$(".neiron1").text()
		var c=$(".neiron2").text()
//		var aa=a.length/2
//		var bb=b.length/2
//		var cc=c.length/2
//		a=a.substring(0,aa)
//		b= b.substring(0,bb)
//		c=c.substring(0,cc)
		
	
			$(".addr-xiqing").html("<a class='addr-main' href='javascript:void(0)' style='color: black;text-decoration: none;'>"+a+"&nbsp;"+b+"&nbsp;"+c+"&nbsp;&nbsp;<img src='img/qyzz1.png'/></a>&nbsp;&nbsp;")
//		$(".addr-xiqing").html(
//			"<span class='addr-xiqing' style='display: inline-block;padding: 8px 10px;border: 1px solid #999999;'><a class='addr-main' href='javascript:void(0)' style='color: black;text-decoration: none;'>"+a+"&nbsp;"+b+"&nbsp;"+c+"&nbsp;&nbsp;<img src='img/qyzz1.png'/></a>&nbsp;&nbsp;</span>")
		
		$("#addr").css("display","none")
		$(".addr-main").find("img").attr("src","../img/qyzz1.png")
	})
	
	$(".addr").click(function(){
		if($("#addr").css("display")=="none"){
			$(this).find("img").attr("src","../img/xiyijiaddr1.png")
			$("#addr").css("display","block")
		}else{
				var a=$(".neiron").text()
		var b=$(".neiron1").text()
		var c=$(".neiron2").text()
//		var aa=a.length/2
//		var bb=b.length/2
//		var cc=c.length/2
//		a=a.substring(0,aa)
//		b= b.substring(0,bb)
//		c=c.substring(0,cc)
		
	
			$(".addr-xiqing").html("<a class='addr-main' href='javascript:void(0)' style='color: black;text-decoration: none;'>"+a+"&nbsp;"+b+"&nbsp;"+c+"&nbsp;&nbsp;<img src='img/qyzz1.png'/></a>&nbsp;&nbsp;")
//		$(".addr-xiqing").html(
//			"<span class='addr-xiqing' style='display: inline-block;padding: 8px 10px;border: 1px solid #999999;'><a class='addr-main' href='javascript:void(0)' style='color: black;text-decoration: none;'>"+a+"&nbsp;"+b+"&nbsp;"+c+"&nbsp;&nbsp;<img src='img/qyzz1.png'/></a>&nbsp;&nbsp;</span>")
			$(this).find("img").attr("src","../img/xiyijiaddr2.png")
			$("#addr").css("display","none")
		}
	})
	
	
	$("#addr").hover(function(){
//		alert()
		$(this).css("display","block")
		$(".addr").find("img").attr("src","../img/qyzz2.png")
	},function(){
			var a=$(".neiron").text()
		var b=$(".neiron1").text()
		var c=$(".neiron2").text()
//		var aa=a.length/2
//		var bb=b.length/2
//		var cc=c.length/2
//		a=a.substring(0,aa)
//		b= b.substring(0,bb)
//		c=c.substring(0,cc)
		
	
		
		$(".addr-xiqing").html("<a class='addr-main' href='javascript:void(0)' style='color: black;text-decoration: none;'>"+a+"&nbsp;"+b+"&nbsp;"+c+"&nbsp;&nbsp;<img src='img/qyzz1.png'/></a>&nbsp;&nbsp;")
		$(this).delay(100).hide(0)
		$(".addr-main").find("img").attr("src","img/qyzz1.png")
	})
	
	
	$(".neiron").click(function(){
		$(".addr-neiron1").css("display","none")
		$(".addr-neiron2").css("display","none")
		$(".neiron1").find("img").attr("src","../img/xiyijiaddr3.png")
		$(".neiron2").find("img").attr("src","../img/xiyijiaddr3.png")
		$(this).find("img").attr("src","../img/xiyijiaddr4.png")
	})
	
	$(".neiron1").click(function(){
		if($(".addr-neiron1").css("display")=="none"){
			$(".addr-neiron1").css("display","block")
			$(".addr-neiron2").css("display","none")
			$(this).find("img").attr("src","../img/xiyijiaddr4.png")
			$(".neiron").find("img").attr("src","../img/xiyijiaddr3.png")
			$(".neiron2").find("img").attr("src","../img/xiyijiaddr3.png")
		}else{
			$(".addr-neiron1").css("display","none")
			$(this).find("img").attr("src","../img/xiyijiaddr3.png")
		}
	})
	
	
	$(".neiron2").click(function(){
		if($(".addr-neiron2").css("display")=="none"){
			$(".addr-neiron2").css("display","block")
			$(".addr-neiron1").css("display","none")
			$(this).find("img").attr("src","../img/xiyijiaddr4.png")
			$(".neiron").find("img").attr("src","../img/xiyijiaddr3.png")
			$(".neiron1").find("img").attr("src","../img/xiyijiaddr3.png")
		}else{
			$(".addr-neiron2").css("display","none")
			$(this).find("img").attr("src","../img/xiyijiaddr3.png")
		}
	})
	
	
	$(".right6 input[type='text']").blur(function(){
		if($(this).val()>3){
			$(this).val("3");
		}
		
//		if($(this).val()==0){
//			$(".back").prop("disabled",true)
//		}
		
		
		
		if($(this).val()<0){
			alert("数量不能小于0请重新输入")
		}else if($(this).val()==0){
			$(".back").prop("disabled",true)
			$(".next").prop("disabled",false)
		}else if($(this).val()<3){
			$(".back").prop("disabled",false)
			$(".next").prop("disabled",false)
		}else{
			$(".next").prop("disabled",true)
			$(".back").prop("disabled",false)
		}
		
		
//		if($(this).val()==3){
//			$(".next").prop("disabled",true)
//		}
	})
	
	
	$(".item[title='4']").click(function(){
		window.scrollTo(0,0)
	})
	
	$(".item[title='3']").hover(function(){
		$("#item").css("display","block")
	},function(){
		$("#item").css("display","none")
	})
	
	$(".tuijianlist ul li").click(function(){
		$(location).attr("href","xiyijixiangqing.html").attr("target","_blank")
	})
	
	
	
//	console.log()
	$(window).scroll(function(){
		var scrollTop=$(this).scrollTop()
		var scrollHeight=$(document).height();
		var windowHeight=$(this).height();
		if(scrollTop>1480){
			$("#nav2").css("display","block")
		}else{
			$("#nav2").css("display","none")
		}
//		console.log("top"+scrollTop)
//		console.log("hei"+scrollHeight)
//		console.log("whei"+windowHeight)
	})
	
	
	
	
	$(".back").click(function(){
		var a= $(".right6 input[type='text']").val()
		 a=Math.floor(a)

		if(a>0){
			a--
			$(".right6 input[type='text']").val(a)
//			$(".back").prop("disabled",false)
			$(".next").prop("disabled",false)
		}else{
			$(".back").prop("disabled",true)
		}
	})
	
	
	$(".next").click(function(){
		var a= $(".right6 input[type='text']").val()
		 a=Math.floor(a)
		 
		 if(a<3){
		 	a++
		 	$(".right6 input[type='text']").val(a)
		 	$(".back").prop("disabled",false)
		 }else{
		 	$(".next").prop("disabled",true)
		 	$(".back").prop("disabled",false)
		 	
		 }
		 
		 
	})
	
	var hoverTimer1,outTimer1;
	$("#right6-jin span").click(function(){
		clearTimeout(outTimer1);
		var a=$(this);
		var b=0;
		
		hoverTimer1=window.setTimeout(function(){
			$("#right6-jin span").each(function(){
//				console.log($(this).css("border"))
				if($(this).css("border")=="2px solid rgb(255, 102, 0)"){
					
					
					$(this).css("border","2px solid white");
				}
			})
			
			a.css("border","2px solid #f60")
		},200)
	})

	
	
		var hoverTimer2,outTimer2;
	$(".nav2 span").click(function(){
		clearTimeout(outTimer2);
		var a=$(this);
		var text=$(this).text()
//		alert(text)
//		console.log(text)
//		switch(text){
//			case "产品介绍":
//				$(".xiyijixq-neiron").css("display","block")
//				$(".xiyijixq-neiron1").css("display","none")
//				break;
//			case "评价（277）":
//				$(".xiyijixq-neiron").css("display","none")
//				$(".xiyijixq-neiron1").css("display","block")
//				break;
				 
				 
				 
//			default:
//				$(".xiyijixq-neiron").css("display","block")
//				$(".xiyijixq-neiron1").css("display","none")
//				break;
//		}
		
		hoverTimer2=window.setTimeout(function(){
			$(".nav2 span").each(function(){
//				console.log($(this).css("border-bottom"))
//				console.log($(this).css("color"))
				if($(this).css("border-bottom")=="2px solid rgb(0, 147, 213)"
				&& $(this).css("color")=="rgb(0, 147, 213)"){
					
					$(this).css("color","#a1a1a1")
					$(this).css("border-bottom","2px solid white");
				}
			})
			a.css("color","#0093d5")
			a.css("border-bottom","2px solid rgb(0, 147, 213)")
		},200)
	})
	
	
	var hoverTimer3,outTimer3;
	$(".nav3 span").click(function(){
		clearTimeout(outTimer3);
		var a=$(this);
		
		
		hoverTimer3=window.setTimeout(function(){
			$(".nav3 span").each(function(){
//				console.log($(this).css("border-bottom"))
//				console.log($(this).css("color"))
				if($(this).css("border-bottom")=="2px solid rgb(0, 147, 213)"
				&& $(this).css("color")=="rgb(0, 147, 213)"){
					
					$(this).css("color","#a1a1a1")
					$(this).css("border-bottom","2px solid white");
				}
			})
			a.css("color","#0093d5")
			a.css("border-bottom","2px solid rgb(0, 147, 213)")
		},200)
	})
	
	
		 var province = [
            
            {
                "name": "北京市",
                "city": [
                    {
                        "name": "北京市",
                        "area": ["海淀区", "石景山区", "丰台区", "房山区"]
                    }
                ]
            },
            {
                "name": "广东省",
                "city": [
                    {
                        "name": "广州市",
                        "area": ["越秀区", "荔湾区", "海珠区", "天河区"]
                    },
                    {
                        "name": "深圳市",
                        "area": ["福田区", "罗湖区", "南山区", "宝安区", "龙岗区"]
                    },
                    {
                        "name": "惠州市",
                        "area": ["福田区", "罗湖区", "南山区", "宝安区", "龙岗区"]
                    }
                ]
            },
            {
                "name": "河南省",
                "city": [
                    {
                        "name": "郑州市",
                        "area": ["中原区", "二七区", "管城回族区", "金水区"]
                    },
                    {
                        "name": "洛阳市",
                        "area": ["西工区", "老城区", "瀍河回族区", "涧西区"]
                    }
                ]
            },
            {
                "name": "江西省",
                "city": [
                    {
                        "name": "南昌市",
                        "area": ["东湖区", "西湖区", "青云谱区", "湾里区"]
                    },
                    {
                        "name": "九江市",
                        "area": ["浔阳区", "庐山区", "瑞昌市", "九江县"]
                    }
                ]
            },
        ];
	
//		$(".addr-neiron1 ul li a").click(function(){
//			alert()
//			$(".addr-neiron2 ul").empty();
//			var city=$(this).text()
//			alert(city)
//			$(".addr-header .neiron1").html("<a href='javascript:void(0)' class='neiron'>"+city+"<img src='img/xiyijiaddr4.png '/></a>")
//			
//		})

		$(".addr-neiron ul li").click(function(){
			$(".addr-neiron1 ul").empty();
			$(".addr-neiron2 ul").empty();
			var sheng= $(this).text()
//			alert(sheng)
			$(".addr-header .neiron").html(sheng+"<img src='../img/xiyijiaddr4.png '/>")
//			console.log(province[0].name)
			for (var i=0;i<province.length;i++) {
//				$(".addr-neiron1 ul li").remove();
				
				
				if(province[i].name==sheng){
//					alert(province[i].name)
					
					for(var j=0;j<province[i].city.length;j++){
//						alert(province[i].city[j].name)
						$(".addr-neiron1 ul").append("<li><a href='javascript:void(0)'>"+province[i].city[j].name+"</a></li>")
					}
					
					
				}
			}
			
		})
		

		$(document).on("click",".addr-neiron1 ul li",function(){
			$(".addr-neiron2 ul").empty();
			var city=$(this).text()
//			alert(city)
			$(".addr-header .neiron1").html(city+"<img src='../img/xiyijiaddr4.png '/>")
			
			for (var i=0;i<province.length;i++) {
				
				for (var j=0;j<province[i].city.length;j++) {
					if(province[i].city[j].name==city){
						for (var k=0;k<province[i].city[j].area.length;k++) {
//							alert(province[i].city[j].area.length)
							$(".addr-neiron2 ul").append("<li><a href='javascript:void(0)'>"+province[i].city[j].area[k]+"</a></li>")
						}
					}
				}
			}
		
		})
		
		
		$(document).on("click",".addr-neiron2 ul li",function(){
			var area=$(this).text()
			$(".addr-header .neiron2").html(area+"<img src='../img/xiyijiaddr4.png '/>")
			
//			var a=$(".neiron").text()
//			var b=$(".neiron1").text()
//			var c=$(".neiron2").text()
//			var aa=a.length/2
//			var bb=b.length/2
//			var cc=c.length/2
//			a=a.substring(0,aa)
//			b= b.substring(0,bb)
//			c=c.substring(0,cc)
//			alert(a+"+"+b+"+"+c)
		})
})