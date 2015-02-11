;(function($){
    $(function(){

    	/* 首页动画 */
        function homepage(){
        	$(".pagecon").animate({"opacity":1},500);
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
        

        function sharePage(){
            $(".flower-1").css({"left":136,"top":152});
        }
        
        sharePage()
        
        var curlit = 0;
        $(".proflower").click(function(){
            if($(this).hasClass("hover"))return false;
            $(this).addClass("hover");
            var curpro_top = parseInt($(this).find(".pro").css("top"));
            var curtext_top = parseInt($(this).find(".flowercon").css("bottom"));
            $(this).find(".con").show().animate({"opacity":1},1200,function(){
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
        $(".friendlist_con ul:not(:animated)").stop().animate({"left":curleft+movewidth});
    }else{
        console.log(curleft)
        console.log(liwidth)
        if(curleft<=-liwidth)return false;
        $(".friendlist_con ul:not(:animated)").stop().animate({"left":curleft-movewidth});
    } 
}










