
;(function($){
    $(function(){

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

            $('.lotus3 img').attr("src","images/product/lotusb1.png");



            

        });

        $('.lotus5').on('click', function(){

            $('.lotus5 img').attr("src","images/product/lotusb2.png");



            

        });

         $('.lotus6').on('click', function(){

            $('.lotus6 img').attr("src","images/product/lotusb3.png");



            

        });    
    })
})(jQuery)


