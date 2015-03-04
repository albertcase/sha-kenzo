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
    $(".hand-action").hide();
    $(this).find(".flower_hover").show().stop().animate({"opacity":1},600);
    $(this).find(".pro").show().stop().animate({"opacity":1,"top":"-20%"},600);
    $(this).find(".proInfo").show().stop().animate({"opacity":1,"top":"60%"});
    clcikval = false;
    $(".arr_r").animate({"right":"1%","opacity":1},600);
})

$(".flower-2").click(function(){
	if(!clcikval)return false;
    $(this).find(".flower_hover").show().stop().animate({"opacity":1},600);
    $(this).find(".pro").show().stop().animate({"opacity":1,"top":"-30%"},600);
    $(this).find(".proInfo").show().stop().animate({"opacity":1,"top":"110%"});
    clcikval = false;
    $(".arr_r").animate({"right":"1%","opacity":1},600);
    $(".arr_l").animate({"left":"1%","opacity":1},600);
})

$(".flower-3").click(function(){
	if(!clcikval)return false;
    $(this).find(".flower_hover").show().stop().animate({"opacity":1},600);
    $(this).find(".pro").show().stop().animate({"opacity":1,"top":"-6%"},600);
    $(this).find(".proInfo").show().stop().animate({"opacity":1,"top":"60%"});
    clcikval = false;
    $(".arr_r").animate({"right":"1%","opacity":1},600);
    $(".arr_l").animate({"left":"1%","opacity":1},600);
})








function pageHome(){

    var ani = function(){
        $(".pagefooter h2").eq(0).stop().animate({"opacity":0,"top":"-120px"},1000,function(){
            $(this).hide();
            $(".pagefooter h2").eq(1).show().stop().animate({"opacity":1,"top":"-25px"},1000,function(){
                clcikval = true;
            });
            $('.hand-action').fadeIn(2000);
            setTimeout(function(){
                $(".hand-action").fadeOut(2000);
            }, 2000);
        });
    }

	$("#phone_index").show().stop().animate({"opacity":1},1200,function(){
		$(".pagefooter h2").eq(0).show().stop().animate({"opacity":1,"top":"-110px"},3000,function(){

          setTimeout(function(){
            ani();
          }, 3000);

        });
	});
	$(".flower-1").show().stop().animate({"opacity":1},1560);
}
pageHome();


var initFlow = function(){
    $(".flower_hover").css({"opacity" : 0, "top" : 0});
    $(".pro").css({"opacity" : 0, "top" : 0});
    $(".proInfo").css({"opacity" : 0, "top" : 0});
}
// function step1Fun(){
//      $(".pagefooter h2").eq(0).stop().animate({"opacity":0,"top":"-120px"},600,function(){
// 	    $(this).hide();
// 	    $(".arr_r").animate({"right":"-10%","opacity":0},600);
// 	 });
// 	 $(".pagefooter h2").eq(1).show().stop().animate({"opacity":1,"top":"-25px"},1000,function(){
// 	 	clcikval = true;
// 	 });
// }

function step1Fun(){
    $(".phonepage").stop().animate({"opacity":0},600,function(){
        $(this).hide();
        $(".arr_r").animate({"right":"-10%","opacity":0},600);
        $(".arr_l").animate({"left":"-10%","opacity":0},600);
        $("#phone_index").show().stop().animate({"opacity":1},1000);
        initFlow();
        $(".flower-1").show().stop().animate({"opacity":1},1560,function(){
            clcikval = true;
        });
    })
}

function step2Fun(){
	$(".phonepage").stop().animate({"opacity":0},600,function(){
		$(this).hide();
		$(".arr_r").animate({"right":"-10%","opacity":0},600);
        $(".arr_l").animate({"left":"-10%","opacity":0},600);
		$("#phone_pro2").show().stop().animate({"opacity":1},1000);
        initFlow();
		$(".flower-2").show().stop().animate({"opacity":1},1560,function(){
			clcikval = true;
		});
	})
}


function step3Fun(){
	$(".phonepage").stop().animate({"opacity":0},600,function(){
		$(this).hide();
		$(".arr_r").animate({"right":"-10%","opacity":0},600);
        $(".arr_l").animate({"left":"-10%","opacity":0},600);
		$("#phone_pro3").show().stop().animate({"opacity":1},1000);
        initFlow();
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
        $(".arr_l").animate({"left":"-10%","opacity":0},600);
	})
}


function stepDownloadFun(){
	$(".phonepage").stop().animate({"opacity":0},600,function(){
		$(this).hide();
		$("#phone_download").show().stop().animate({"opacity":1},1000);
		$(".arr_r").animate({"right":"-10%","opacity":0},600);
        $(".arr_l").animate({"left":"-10%","opacity":0},600);
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




/* 手机滑动效果js */

var target = $("#dreambox");
var curpageid = $("body");

touch.on(target, 'swipeleft', function(ev){
	var curarr = parseInt($(".arr_r").css("right"));
	if(curpageid.attr("id")==""||curarr<=0)return false;
	// if(curpageid.attr("id")=="step0"){
 //        //step1Fun();
 //        //curpageid.attr("id","step1");
	// }else 
    if(curpageid.attr("id")=="step0"){
		step2Fun();
		curpageid.attr("id","step2");
	}else if(curpageid.attr("id")=="step2"){
		step3Fun();
		curpageid.attr("id","step_share");
	}else if(curpageid.attr("id")=="step_share"){
		stepShareFun();
		curpageid.attr("id","");
	}
});


$('.arr_r').on('click', function(){
    var curarr = parseInt($(".arr_r").css("right"));
    if(curpageid.attr("id")==""||curarr<=0)return false;
    // if(curpageid.attr("id")=="step0"){
 //        //step1Fun();
 //        //curpageid.attr("id","step1");
    // }else 
    if(curpageid.attr("id")=="step0"){
        step2Fun();
        curpageid.attr("id","step2");
    }else if(curpageid.attr("id")=="step2"){
        step3Fun();
        curpageid.attr("id","step_share");
    }else if(curpageid.attr("id")=="step_share"){
        isloginFun();
        curpageid.attr("id","");
    }
});

$('.arr_l').on('click', function(){
    var curarr = parseInt($(".arr_r").css("right"));
    if(curpageid.attr("id")==""||curarr<=0)return false;

    if(curpageid.attr("id")=="step2"){
        step1Fun();
        curpageid.attr("id","step0");
    }else if(curpageid.attr("id")=="step_share"){
        step2Fun();
        curpageid.attr("id","step2");
    }
});

/* 横屏监测事件 */

//屏幕方向标识，0横屏，其他值竖屏
var orientation=0;
//转屏事件，内部功能可以自定义
function screenOrientationEvent(){
    if(orientation == 0){
    	$("#heng").remove();
    }else {
    	$("body").append("<div id='heng'></div>");
    }
}
var innerWidthTmp = window.innerWidth;
//横竖屏事件监听方法
function screenOrientationListener(){
    try{
        var iw = window.innerWidth;     
        //屏幕方向改变处理
        if(iw != innerWidthTmp){
            if(iw>window.innerHeight)orientation = 90;
            else orientation = 0;
            //调用转屏事件
            screenOrientationEvent();
            innerWidthTmp = iw;
        }
    } catch(e){alert(e);};
    //间隔固定事件检查是否转屏，默认500毫秒
    setTimeout("screenOrientationListener()",500);
}
//启动横竖屏事件监听
screenOrientationListener();





/* 下载地址 */
function downloadlink(){
    var browser = {
    versions: function() {
    var u = navigator.userAgent, app = navigator.appVersion;
    return {//移动终端浏览器版本信息 
    trident: u.indexOf('Trident') > -1, //IE内核
    presto: u.indexOf('Presto') > -1, //opera内核
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, //是否iPad
    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
     
    if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
      $(".download_btn").attr("href","https://itunes.apple.com/cn/app/bai-lian-tan-mi/id923966644?mt=8");
      //window.location="";  //ios链接
    }
    else if (browser.versions.android) {
      $(".download_btn").attr("href","http://www.ideayes.net/ar.apk");
      //window.location="http://www.ideayes.net/ar.apk";  //安卓链接
    }

}

downloadlink()











/* --------- 接口 ---------- */

function shareFun(){
  $("#sharebtn").hide();
  $(".sharetips").html("分享中...");
  //console.log(this)
  var sharecontent = $(".share_text").html();
  var shareUrl="http://kenzoki.samesamechina.com";
  $.ajax({
	    type: "POST",
	    url: "/Request.php?model=update",
	    data: {
	      "content": sharecontent + shareUrl
	    },
	    dataType:"json",
	    success: function(data){
	       //alert(data.msg);
	       stepDownloadFun();
	       //$("#sharebtn").show();
  		   $(".sharetips").html("分享成功！");
	    }
  });
}





 //登陆判断 

function isloginFun(){
  $.ajax({
    type: "POST",
    url: "/Request.php?model=islogin",
    dataType:"json",
    success: function(data){
        if(data.code == 0){
            window.location.href="/sina?callback="+encodeURIComponent("/mobile?reback=sharelist");
        }else{
            
        }
    }
  });
}

isloginFun()


function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

if(GetQueryString("reback")=="sharelist"){
    stepShareFun();
}


