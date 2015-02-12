

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
            $('.lotus3 img').attr("src","/images/product/lotusb1.png");
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
            $('.lotus5 img').attr("src","/images/product/lotusb2.png");
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
            $('.lotus6 img').attr("src","/images/product/lotusb3.png");
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
                setTimeout(function(){
                    location.href="form.html";
                }, 1000);

            }else {
                $("#question").addClass("hover");
                $( ".tips" ).css( 'display', 'block');
                
                /*setTimeout(function(){
                    location.href="index.html";
                }, 2000);*/

        
                
            }    

        });
        

        var errtxt = {
            "name" : "请输入您的姓名！",
            "phone" : "请输入您的手机号！",
            "checkphone" : "请填写正确手机号！",
            "addr" : "请输入您的地址！",
            "city" : "请输入您的城市！"

        }
        $("#submit-btn").on('click',function(){
            var name = document.formval.name.value;
            var phoneNo = document.formval.phoneNo.value;
            var addr = document.formval.addr.value;
            var city = document.formval.city.value;
            
            

            if(name==""){
                $(document.formval.name).addClass("errorTips");
                $(document.formval.name).val(errtxt.name); 
                return false;

            }
            if(phoneNo==""){
                $(document.formval.phoneNo).addClass("errorTips");
                $(document.formval.phoneNo).val(errtxt.phone);
                return false;
            }
            if(!phoneNo.match(/13[0-9]{9}|14[0-9]{9}|15[0-9]{9}|18[0-9]{9}/)){
                $(document.formval.phoneNo).addClass("errorTips");
                $(document.formval.phoneNo).val(errtxt.checkphone);
                return false;
            }
            if(city==""){
                $(document.formval.city).addClass("errorTips"); 
                $(document.formval.city).val(errtxt.city);
                return false;
            }
            if(addr==""){
                $(document.formval.addr).addClass("errorTips");
                $(document.formval.addr).val(errtxt.addr);
                return false;
            }
            $("#form").addClass("hover");
                //$( ".tips" ).css( 'display', 'block');
            $.ajax({
                type: "POST",
                url: "/Request.php?model=finish",
                data: {
                  "name": name,
                  "mobile":phoneNo,
                  "city":city,
                  "address":addr
                },
                dataType:"json",
                success: function(data){
                   if(data.code==1){
                        $( ".tips" ).css( 'display', 'block');
                        setTimeout(function(){
                            location.href="index.html";
                        }, 2000);
                   }else{
                        alert(data.msg);
                   }
                   //window.location.href="question.html"

                }
              });
                
                /*
                
                */

        });

        
        

        $(".llk input[name=name]").focus(function(){
            if($(this).val()=="请输入您的姓名！"){
                $(this).val("");
                $(this).removeClass("errorTips");
            }
        });
        $(".llk input[name=phoneNo]").focus(function(){
            if($(this).val()=="请填写正确手机号！"||$(this).val()=="请输入您的手机号！"){
                $(this).val("");
                $(this).removeClass("errorTips");
            }
        });
        $(".llk input[name=city]").focus(function(){
            if($(this).val()=="请输入您的地址！"){
                $(this).val("");
                $(this).removeClass("errorTips");
            }
        });
        $(".llk input[name=addr]").focus(function(){
            if($(this).val()=="请输入您的地址！"){
                $(this).val("");
                $(this).removeClass("errorTips");
            }
        });

        $(".llk input").keyup(function(){
            var curval = $(this).val();
            if($(this).val()==""){
                $(this).siblings(".errorTips").html(curval);
            }


        });


    })
})(jQuery)

