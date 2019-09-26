$('.addr').click(function(){
	$('#addr').show();
})

$('.addr-header>a').click(function(){
	$('.aa').eq($(this).index()).show();
	$('.aa').eq($(this).index()).siblings('.aa').hide();
})

$('.aa>ul>li').click(function(){
	console.log($(this).children().text());
	if($(this).parent().parent().hasClass('addr-neiron')){
		$('.neiron').text($(this).children().text());
	}else if($(this).parent().parent().hasClass('addr-neiron1')){
		$('.neiron1').text($(this).children().text());
	}else{
		$('.neiron2').text($(this).children().text());
	}
})
