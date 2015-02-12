
$(".subnav").click(function(){
	if($(this).hasClass("hover")){
		$(this).removeClass("hover");
		$(".subnav_con").slideUp();
		$(this).find("img").attr("src","/images/mobile/option.png");
	}else{
		$(this).addClass("hover");
		$(".subnav_con").slideDown();
		$(this).find("img").attr("src","/images/mobile/option_hover.png");
	}
})






$(".flower-1").click(function(){
    $(this).find(".flower_hover").show().stop().animate({"opacity":1},600);
    $(this).find(".pro").show().stop().animate({"opacity":1,"top":"-30%"},600);
    $(this).find(".proInfo").show().stop().animate({"opacity":1,"top":"70%"});
})

$(".flower-2").click(function(){
    $(this).find(".flower_hover").show().stop().animate({"opacity":1},600);
    $(this).find(".pro").show().stop().animate({"opacity":1,"top":"-120%"},600);
    $(this).find(".proInfo").show().stop().animate({"opacity":1,"top":"110%"});
})

$(".flower-3").click(function(){
    $(this).find(".flower_hover").show().stop().animate({"opacity":1},600);
    $(this).find(".pro").show().stop().animate({"opacity":1,"top":"-10%"},600);
    $(this).find(".proInfo").show().stop().animate({"opacity":1,"top":"70%"});
})