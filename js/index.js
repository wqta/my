$(function(){
	$(".list3-right div").hover(function(){
		$(this).find("img").css("margin-top","50px")
		$(this).find("p[class]").css("color","red")
	},function(){
		$(this).find("img").css("margin-top","57px")
		$(this).find("p[class]").css("color","black")
	})


//
$(".shutter").hover(function(){
	$(".shutter-btn").show();
},function(){
	$(".shutter-btn").hide();
})


	
	var timer10=null;
	
	$('.shouji').hover(function(){
		
		$(".shouji1").show().siblings(".miss").hide();
//		console.log(a);
		
	},function(){
		timer10 = setTimeout(function(){
			
			$(".shouji1").hide();
		},50)
		
		$(".shouji1").hover(function(){
		clearTimeout(timer10);
		$(this).show();
//		$(this).show();
		},function(){
			$(this).hide();
		})
		
	})
	
	var timer11=null;
	
	$(".gouwuche").hover(function(){
		$("#gouwuche").show().siblings(".miss").hide();
		
	},function(){
		timer11=setTimeout(function(){
			$("#gouwuche").hide();
		},50)
		
		$("#gouwuche").hover(function(){
			clearTimeout(timer11);
			$(this).show();
		},function(){
			$(this).hide();
		})
	})
	
	var timer12=null;
	
	$(".denglu").hover(function(){
		$("#denglu").show().siblings(".miss").hide();
	},function(){
		timer12=setTimeout(function(){
			$("#denglu").hide();
		},50)
		
		$("#denglu").hover(function(){
			clearTimeout(timer12);
			$(this).show();
		},function(){
			$(this).hide();
		})
	})
	
//	$(".denglu").hover(function(){
//		$("#denglu").css("display","block")
//		$(".shouji1").css("display","none")
////		$("#denglu").css("display","none")
//		$("#gouwuche").css("display","none")
//	},function(){
//		
//	})
//	
//	$("#denglu").hover(function(){
//		$(this).css("display","block")
//	},function(){
//		$(this).delay(500).hide(0)
//	})
	
	$("#seache1").focus(function(){
		$(this).prop("placeholder"," ")
	
	})
	
	$("#seache1").blur(function(){
		$(this).prop("placeholder","七夕,快来选购吧！")
	
	})
	var timer1 = null;
	
	$('#list ul .list31').hover(function(){
		
		$("#naver1").show().siblings("#lunbo .ab").hide();
//		console.log(a);
		
	},function(){
		timer1 = setTimeout(function(){
			
			$("#naver1").hide();
		},50)
		
		$("#naver1").hover(function(){
		clearTimeout(timer1);
		$(this).show();
//		$(this).show();
		},function(){
			$(this).hide();
		})
		
	})
	
var timer2 = null;
	
	$('#list ul .list32').hover(function(){
		
		$("#naver2").show().siblings("#lunbo .ab").hide();
//		console.log(a);
		
	},function(){
		timer2 = setTimeout(function(){
			
			$("#naver2").hide();
		},50)
		
		$("#naver2").hover(function(){
		clearTimeout(timer2);
		$(this).show();
//		$(this).show();
		},function(){
			$(this).hide();
		})
		
	})	
	
	var timer3 = null;
	
	$('#list ul .list33').hover(function(){
		
		$("#naver3").show().siblings("#lunbo .ab").hide();
//		console.log(a);
		
	},function(){
		timer3 = setTimeout(function(){
			
			$("#naver3").hide();
		},50)
		
		$("#naver3").hover(function(){
		clearTimeout(timer3);
		$(this).show();
//		$(this).show();
		},function(){
			$(this).hide();
		})
		
	})	
	
	
	var timer4 = null;
	
	$('#list ul .list34').hover(function(){
		
		$("#naver4").show().siblings("#lunbo .ab").hide();
//		console.log(a);
		
	},function(){
		timer4 = setTimeout(function(){
			
			$("#naver4").hide();
		},50)
		
		$("#naver4").hover(function(){
		clearTimeout(timer4);
		$(this).show();
//		$(this).show();
		},function(){
			$(this).hide();
		})
		
	})	
	
	
	var timer5 = null;
	
	$('#list ul .list35').hover(function(){
		
		$("#naver5").show().siblings("#lunbo .ab").hide();
//		console.log(a);
		
	},function(){
		timer5 = setTimeout(function(){
			
			$("#naver5").hide();
		},50)
		
		$("#naver5").hover(function(){
		clearTimeout(timer5);
		$(this).show();
//		$(this).show();
		},function(){
			$(this).hide();
		})
		
	})
	
	
	var timer6 = null;
	
	$('#list ul .list36').hover(function(){
		
		$("#naver6").show().siblings("#lunbo .ab").hide();
//		console.log(a);
		
	},function(){
		timer6 = setTimeout(function(){
			
			$("#naver6").hide();
		},50)
		
		$("#naver6").hover(function(){
		clearTimeout(timer6);
		$(this).show();
//		$(this).show();
		},function(){
			$(this).hide();
		})
		
	})	
	
	var timer7 = null;
	
	$('#list ul .list37').hover(function(){
		
		$("#naver7").show().siblings("#lunbo .ab").hide();
//		console.log(a);
		
	},function(){
		timer7 = setTimeout(function(){
			
			$("#naver7").hide();
		},50)
		
		$("#naver7").hover(function(){
		clearTimeout(timer7);
		$(this).show();
//		$(this).show();
		},function(){
			$(this).hide();
		})
		
	})	
	
	
	var timer8 = null;
	
	$('#list ul .list38').hover(function(){
		
		$("#naver8").show().siblings("#lunbo .ab").hide();
//		console.log(a);
		
	},function(){
		timer8 = setTimeout(function(){
			
			$("#naver8").hide();
		},50)
		
		$("#naver8").hover(function(){
		clearTimeout(timer8);
		$(this).show();
//		$(this).show();
		},function(){
			$(this).hide();
		})
		
	})	
	

	
	$(".naver-right ul li").hover(function(){
		$(this).find("[title=1]").css("color","#ff4000")
	},function(){
		$(this).find("[title=1]").css("color","black")
	})
	
	
	$(".naver-right-right div").hover(function(){
		$(this).find("p").css("color","#ff4000")
	},function(){
		$(this).find("p").css("color","black")
		$(".naver-right-right p[title='11']").css("color","#999999")
	})
})

	$("#denglu1").click(function(){
		window.location.href="User/denglu.html"
	})
	
	