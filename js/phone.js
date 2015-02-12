var clcikval = false;


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



$(".subnav_con li").on('click', function(e){ 
    $(".subnav").removeClass("hover");
	$(".subnav_con").slideUp();
	$(".subnav img").attr("src","/images/mobile/option.png");
})




$(".flower-1").click(function(){
	if(!clcikval)return false;
    $(this).find(".flower_hover").show().stop().animate({"opacity":1},600);
    $(this).find(".pro").show().stop().animate({"opacity":1,"top":"-30%"},600);
    $(this).find(".proInfo").show().stop().animate({"opacity":1,"top":"60%"});
    clcikval = false;
    $(".arr_r").animate({"right":"1%","opacity":1},600);
})

$(".flower-2").click(function(){
	if(!clcikval)return false;
    $(this).find(".flower_hover").show().stop().animate({"opacity":1},600);
    $(this).find(".pro").show().stop().animate({"opacity":1,"top":"-120%"},600);
    $(this).find(".proInfo").show().stop().animate({"opacity":1,"top":"110%"});
    clcikval = false;
    $(".arr_r").animate({"right":"1%","opacity":1},600);
})

$(".flower-3").click(function(){
	if(!clcikval)return false;
    $(this).find(".flower_hover").show().stop().animate({"opacity":1},600);
    $(this).find(".pro").show().stop().animate({"opacity":1,"top":"-6%"},600);
    $(this).find(".proInfo").show().stop().animate({"opacity":1,"top":"60%"});
    clcikval = false;
    $(".arr_r").animate({"right":"1%","opacity":1},600);
})








function pageHome(){
	$("#phone_index").show().stop().animate({"opacity":1},1200,function(){
		$(".pagefooter h2").eq(0).show().stop().animate({"opacity":1,"top":"-110px"},1200,function(){
			$(".arr_r").animate({"right":"1%","opacity":1},600);
		});
	});
	$(".flower-1").show().stop().animate({"opacity":1},1560);
}
pageHome();


function step1Fun(){
     $(".pagefooter h2").eq(0).stop().animate({"opacity":0,"top":"-120px"},600,function(){
	    $(this).hide();
	    $(".arr_r").animate({"right":"-10%","opacity":0},600);
	 });
	 $(".pagefooter h2").eq(1).show().stop().animate({"opacity":1,"top":"-25px"},1000,function(){
	 	clcikval = true;
	 });
}


function step2Fun(){
	$(".phonepage").stop().animate({"opacity":0},600,function(){
		$(this).hide();
		$(".arr_r").animate({"right":"-10%","opacity":0},600);
		$("#phone_pro2").show().stop().animate({"opacity":1},1000);
		$(".flower-2").show().stop().animate({"opacity":1},1560,function(){
			clcikval = true;
		});
	})
}


function step3Fun(){
	$(".phonepage").stop().animate({"opacity":0},600,function(){
		$(this).hide();
		$(".arr_r").animate({"right":"-10%","opacity":0},600);
		$("#phone_pro3").show().stop().animate({"opacity":1},1000);
		$(".flower-3").show().stop().animate({"opacity":1},1560,function(){
			clcikval = true;
		});
	})
}


function stepShareFun(){
	$(".pagefooter h2").eq(1).stop().animate({"opacity":0,"top":"-20px"},600,function(){
	    $(this).hide();
	 });
	$(".phonepage").stop().animate({"opacity":0},600,function(){
		$(this).hide();
		$("#phone_share").show().stop().animate({"opacity":1},1000);
		$(".arr_r").animate({"right":"-10%","opacity":0},600);
	})
}


function stepDownloadFun(){
	$(".phonepage").stop().animate({"opacity":0},600,function(){
		$(this).hide();
		$("#phone_download").show().stop().animate({"opacity":1},1000);
		$(".arr_r").animate({"right":"-10%","opacity":0},600);
	})
}






function testAnim(eventId,x,heightVal,num) {
    if(num==1){
        $(eventId).removeClass().css({"height":heightVal}).addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $("#dreambox").addClass("layerblur").stop().animate({"opacity":0.5});
              $(".subnav").animate({"left":"-10%"});
              $(this).removeClass(); 
        });
    }else{
        $(eventId).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass();
              $(eventId).css({"height":heightVal});
              $("#dreambox").removeClass("layerblur").stop().animate({"opacity":1});
              $(".subnav").animate({"left":"5%"});

        });
    }
    
};




var target = $("#dreambox");
var curpageid = $("body");

touch.on(target, 'swipeleft', function(ev){
	var curarr = parseInt($(".arr_r").css("right"));
	if(curpageid.attr("id")==""||curarr<=0)return false;
	if(curpageid.attr("id")=="step0"){
        step1Fun();
        curpageid.attr("id","step1");
	}else if(curpageid.attr("id")=="step1"){
		step2Fun();
		curpageid.attr("id","step2");
	}else if(curpageid.attr("id")=="step2"){
		step3Fun();
		curpageid.attr("id","step_share");
	}else if(curpageid.attr("id")=="step_share"){
		stepShareFun();
		curpageid.attr("id","");
	}
	//this.style.webkitTransform = "translate3d(" + rt + "px,0,0)";
	//log("向右滑动.");
});








/* --------- 接口 ---------- */

function shareFun(){
  var sharecontent = $(".share_text").html();
  var shareUrl="http://apps.weibo.com/testadmin/2688959751/4imFB";
  $.ajax({
	    type: "POST",
	    url: "/Request.php?model=update",
	    data: {
	      "content": sharecontent + shareUrl
	    },
	    dataType:"json",
	    success: function(data){
	       alert(data.msg);
	       stepDownloadFun();
	    }
  });
}









