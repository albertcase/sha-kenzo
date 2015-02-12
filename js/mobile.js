;(function($){
    $(function(){

    	/* 首页动画 */
        function homepage(){
        	$(".pagecon").animate({"opacity":1},500);
          $("#pageStep").show().animate({"opacity":1});
	        $(".pf-1").animate({"opacity":1},1300);
	        $(".pf-2").animate({"opacity":1},1000);
	        $(".pf-3").animate({"opacity":1},1600);
	        $(".pagefooter h2").eq(0).stop().animate({"opacity":1,"top":0},1000);
	        setTimeout(function(){
                 $(".pagefooter h2").eq(0).stop().animate({"opacity":0,"top":"-6px"},200);
                 $(".pagefooter h2").eq(1).stop().animate({"opacity":1,"top":6},1000);
	        },5000)
        }
        homepage()



        
        var curlit = 0;
        $(".proflower").click(function(){
            if($(this).hasClass("hover"))return false;
            $(this).addClass("hover");
            var curpro_top = parseInt($(this).find(".pro").css("top"));
            var curtext_top = parseInt($(this).find(".flowercon").css("bottom"));
            $(this).find(".con").show().animate({"opacity":1},600,function(){
                curlit++;
                $(this).siblings(".pro").show().stop().animate({"top":curpro_top+10,"opacity":1},700,function(){
                   if(curlit == 3){
                       $("#pageStep .pageArr").stop().animate({"opacity":1,"right":0});
                   }
                });
                $(this).siblings(".flowercon").show().stop().animate({"opacity":1,"bottom":curtext_top-10},1000);
            });

        })

   


        
    })
})(jQuery)






function sharePage(){
        $(".flower-1").animate({"opacity":0},600,function(){
            $(this).css({"left":136,"top":152});
        });
        $(".flower-2").animate({"opacity":0},600,function(){
            $(this).css({"left":820,"top":250});
        })
        $(".flower-3").animate({"opacity":0},600,function(){
            $(this).css({"left":760,"top":180});
        })
        $("#pageStep").stop().animate({"opacity":0},500,function(){
            $(this).hide();
            $("#pageShare").show().stop().animate({"opacity":1},600,function(){
                $(".flower-1").animate({"opacity":1});
                $(".flower-2").animate({"opacity":1});
                $(".flower-3").animate({"opacity":1});
                $(".flower-4").show().animate({"opacity":1,"left":"-132px"},1200);
                $(".flower-5").show().animate({"opacity":1,"left":"-75px","top":505},700);
                $(".flower-6").show().animate({"opacity":1,"left":"760px","top":510},600);
                loadfriendFun();
            });
        }); 
}


function downloadPage(){
            $(".flower-4").stop().animate({"opacity":0,"left":"-142px"},1200,function(){
               $(this).hide();
            });
            $(".flower-5").stop().animate({"opacity":0,"left":"-85px","top":515},700,function(){
               $(this).hide();
            });
            $(".flower-6").stop().animate({"opacity":0,"left":"770px","top":520},600,function(){
               $(this).hide();
            });
            $("#pageShare").animate({"opacity":0},1200,function(){
                $(this).hide();
                $("#pageDownload").show().animate({"opacity":1},600,function(){
                    $(".pageDownload_con").animate({"opacity":1});
                });
            });
  }




function testAnim(eventId,x,heightVal,num) {
    if(num==1){
        $(eventId).removeClass().css({"height":heightVal}).addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass();
        });
    }else{
        $(eventId).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
              $(this).removeClass();
              $(eventId).css({"height":heightVal});
        });
    }
    
};


function run(moveDirection){
    var curleft = parseInt($(".friendlist_con ul").css("left"));
    var movewidth = parseInt($(".friendlist_con li").css("width"))+parseInt($(".friendlist_con li").css("margin-left"))*2;
    var liwidth = (parseInt($(".friendlist_con li").css("width"))+parseInt($(".friendlist_con li").css("margin-left"))*2)*$(".friendlist_con li").length-parseInt($(".friendlist_con").css("width"));
    if(moveDirection == "left"){
        if(curleft>=0)return false;
        $(".friendlist_con ul:not(:animated)").stop().animate({"left":curleft+movewidth*8});
    }else{
        if(curleft<=-liwidth)return false;
        $(".friendlist_con ul:not(:animated)").stop().animate({"left":curleft-movewidth*8});
    } 
}












/* ---------- 接口 ---------- */

Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};





var friendlistHtml = "";
var associatefriend = [];
function loadfriendFun(){
  friendlistHtml="";
  $.ajax({
    type: "POST",
    url: "/Request.php?model=loadfriend",
    dataType:"json",
    success: function(data){
       friendlistHtml = $.map(data.msg,function(key){
           return "<li><span></span><img src='"+key.avatar_hd+"'' alt='@"+key.name+"' /></li>"
       }).join("");

       $(".friendlist_con ul").html(friendlistHtml);
       
       
       $(".friendlist_con li").click(function(){
           if($(this).hasClass("hover")){
               $(this).removeClass("hover"); 
               associatefriend.remove($(this).find("img").attr("alt"));
           }else{
               $(this).addClass("hover");
               associatefriend.push($(this).find("img").attr("alt"));
           }  
       })

       $(".friendlist_con li").eq(0).click();
       $(".friendlist_con li").eq(1).click();
       $(".friendlist_con li").eq(2).click();
    }
  });
}


function shareFun(){
  var sharecontent = $(".shareText").html();
  var shareUrl="http://apps.weibo.com/testadmin/2688959751/4imFB";
  if(associatefriend.length<=0){
      alert("必须@一位好友");
  }else{
      friendlistHtml="";
      $.ajax({
        type: "POST",
        url: "/Request.php?model=update",
        data: {
          "content": associatefriend.join("") + sharecontent + shareUrl
        },
        dataType:"json",
        success: function(data){
           //alert(data.msg);
           downloadPage();
        }
      });
  }
  
}






/*function isloginFun(){
  $.ajax({
    type: "POST",
    url: "/valentine/Request.php?model=islogin",
    data: {
      "city": curcityIndex
    },
    dataType:"json",
    success: function(msg){
      storesHtml = $.map(msg.msg,function(key){
          return "<option value='"+key.id+"' title='"+key.address+"<br />"+key.telphone+"'>"+key.name+"</option>";
      }).join("")
      $("#stores").html(storesHtml);
    }
  });
}*/







