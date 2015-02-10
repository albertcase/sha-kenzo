
;(function($){
    $(function(){
        

        var num = 0;
        $('.showRule').on('click', function(){

            $('.rulebox').css('display', 'block');

        });
        $('.hideRule').on('click', function(){

            $('.rulebox').css('display', 'none');

        });
        $('.introduction').animate({"opacity":1}, 5000, function(){
            
            $(".introduction").animate({"opacity":0}, 5000, function(){
                
                $(".introduction1").animate({"opacity":1}, 5000);

            });

        }); 


        $('.lotus3').on('click', function(){
            num=num+1;
            $('.lotus3 img').attr("src","images/product/lotusb1.png");
            $("#home .product1 img").animate({"opacity":1}, 5000);
            $("#home .product1 .purplebox").animate({"opacity":1}, 5000);




            

        });

        $('.lotus5').on('click', function(){
            num=num+1;
            $('.lotus5 img').attr("src","images/product/lotusb2.png");
            $("#home .product2 img").animate({"opacity":1}, 5000);
            $("#home .product2 .purplebox").animate({"opacity":1}, 5000);



            

        });

         $('.lotus6').on('click', function(){
            num=num+1;
            $('.lotus6 img').attr("src","images/product/lotusb3.png");
            $("#home .product3 img").animate({"opacity":1}, 5000);
            $("#home .product3 .purplebox").animate({"opacity":1}, 5000);



            

        });    
    })
})(jQuery)


