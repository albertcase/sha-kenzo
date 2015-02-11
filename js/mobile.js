




loadfriendFun();






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
  if(associatefriend.length<=0){
      alert("必须@一位好友");
  }else{
      friendlistHtml="";
      $.ajax({
        type: "POST",
        url: "/Request.php?model=update",
        data: {
          "content": associatefriend.join("") + sharecontent
        },
        dataType:"json",
        success: function(data){
           //alert(data.msg);
           window.location.href="form.html"

        }
      });
  }
  
}









