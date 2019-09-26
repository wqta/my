$(function(){
	
	$(".listIndex").html($(".xiyiji2 li").length)
	
	
	$(".xiyiji-a").hover(function(){
		$("#jiage").css("display","block")
		
		
		
	},function(){
//		$("#jiage").delay(1000).hide(0)
		if($("#jiage").css("display")=="none"){
			alert()
		}
	})
	
	$("#jiage").hover(function(){
		
		$(this).css("display","block")
	},function(){
		
		$(this).delay(300).hide(0)
	})
	
	$("#addr").hover(function(){
		
		$(this).css("display","block")
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
//		alert(a+"+"+b+"+"+c)
		$(".addr").html("<a href='javascript:void(0)' class='addr'>"+a+"&nbsp;"+b+"&nbsp;"+c+"<img src='../img/xiyijiaddr2.png'  / style='vertical-align: middle;'></a>")
		$(this).delay(300).hide(0)
		$(".addr").find("img").attr("src","../img/xiyijiaddr2.png")
	})
	
	
	$(".reset").click(function(){
		
		var a=$(".neiron").text()
		var b=$(".neiron1").text()
		var c=$(".neiron2").text()
		console.log(a);
		console.log(b);
		console.log(c);
//		var aa=a.length/2
//		var bb=b.length/2
//		var cc=c.length/2
//		a=a.substring(0,aa)
//		b= b.substring(0,bb)
//		c=c.substring(0,cc)
//		alert(a+"+"+b+"+"+c)
		$(".addr").html("<a href='javascript:void(0)' class='addr'>"+a+"&nbsp;"+b+"&nbsp;"+c+"<img src='../img/xiyijiaddr2.png'  / style='vertical-align: middle;'></a>")
		
		$("#addr").css("display","none")
		$(".addr").find("img").attr("src","../img/xiyijiaddr2.png")
	})
	
	$(".addr").click(function(){
//		var neiron=$(".neiron").text()
//		alert(neiron)
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
//		alert(a+"+"+b+"+"+c)
		$(".addr").html("<a href='javascript:void(0)' class='addr'>"+a+"&nbsp;"+b+"&nbsp;"+c+"<img src='../img/xiyijiaddr2.png'  / style='vertical-align: middle;'></a>")
			$(this).find("img").attr("src","../img/xiyijiaddr2.png")
			$("#addr").css("display","none")
		}
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
	
	
	$(".tiao").click(function(){
		$(this).find("a").attr("href","../xiyijixiangqing.html")
	})
	
	$(".xiyiji2 li img[src*='.webp']").click(function(){
		$(location).attr("href","xiyijixiangqing.html")
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
//			console.log(sheng);
//			alert(sheng)
			$(".addr-header .neiron").html(sheng+"<img src='../img/xiyijiaddr4.png '/>");
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
		})
		
		
		
})	