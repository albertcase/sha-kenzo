
;(function($){
    $(function(){

        $('.showRule').on('click', function(){

            $('.rulebox').css('display', 'block');

        });
        $('.hideRule').on('click', function(){

            $('.rulebox').css('display', 'none');

        });
        $('.introduction').animate({"opacity":1}, 3000, function(){
            
            $(".introduction").animate({"opacity":0}, 3000, function(){
                
                $(".introduction1").animate({"opacity":1}, 3000);

            });

        }); 

        var num = 0;
        $('.lotus3').on('click', function(){
            if($(this).hasClass("hover")) 
                return false;
            $(this).addClass("hover");
            $('.lotus3 img').attr("src","images/product/lotusb1.png");
            $("#home .product1 img").css("display", "block").animate({"opacity":1}, 3000);
            $("#home .product1 .purplebox").animate({"opacity":1}, 3000);
            num += 1; 
            if (num==3){
                $('#nav-right-btn').animate({"opacity":1}, 7000);
            } 

        });

        $('.lotus5').on('click', function(){
            if($(this).hasClass("hover")) 
                return false;
            $(this).addClass("hover");
            $('.lotus5 img').attr("src","images/product/lotusb2.png");
            $("#home .product2 img").css("display", "block").animate({"opacity":1}, 3000);
            $("#home .product2 .purplebox").animate({"opacity":1}, 3000);     
            num += 1; 
            if (num==3){
                $('#nav-right-btn').animate({"opacity":1}, 7000);
            }  
        });

        $('.lotus6').on('click', function(){
            if($(this).hasClass("hover")) 
                return false;
            $(this).addClass("hover");
            $('.lotus6 img').attr("src","images/product/lotusb3.png");
            $("#home .product3 img").css("display", "block").animate({"opacity":1}, 3000);
            $("#home .product3 .purplebox").animate({"opacity":1}, 3000);
            num += 1; 
            if (num==3){
                $('#nav-right-btn').animate({"opacity":1}, 7000);
            }  
        }); 




        $(".checkbox").on('click', function(){
            if($(this).hasClass("hover")){
              $(".checkbox").removeClass("hover");
            }
            else{
              $(".checkbox").removeClass("hover");
              $(this).addClass("hover");
           }
        
        });

        $("#question .submit-btn").on('click', function(){
            var titleName=$(".checkbox.hover").attr("title");
            if(titleName==null||titleName=="")return false;
            if(titleName=="白莲盛放"){
                location.href="form.html";

            }else {
                $("#question").addClass("hover");
                $( ".tips" ).css( 'display', 'block');
                
                setTimeout(function(){
                    location.href="index.html";
                }, 2000);

        
                
            }    

        });

        $("#form .sumbit-btn").on('click',function(){

        });


    })
})(jQuery)


