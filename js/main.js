/**
 * Created by chen on 14-8-15.
 */
var YR={
    event:{
        touchstart:"mousedown",
        touchmove:"mousemove",
        touchend:"mouseup"
    }
};
var pageView={
    homePageInit:function(){
        var Fog = (function () {
            function Fog(cvs,wrapObj) {
                this.init(cvs,wrapObj);
                this.bindEvent();
            };
            Fog.prototype.init=function(cvs,wrapObj){
                var thisObj=this;
                thisObj.enableDraw=false;
                thisObj.cvs = cvs;
                thisObj.drawTimes=0;
                thisObj.animating=false;
                thisObj.ctx = this.cvs.getContext('2d');
                thisObj.wrapObj=wrapObj;
                thisObj.width=this.wrapObj.width();
                thisObj.height=this.wrapObj.height();
                this.cvs.setAttribute('width', thisObj.width);
                this.cvs.setAttribute('height', thisObj.height);
                var fillImg = new Image();
                fillImg.src = $(cvs).data('bg');
                fillImg.onload = function () {
                    thisObj.ctx.drawImage(fillImg,0,0,thisObj.width,thisObj.height);
                    thisObj.eraseAnimate();
                }
            };
            Fog.prototype.eraseAnimate=function(){
                var thisObj=this;
                var handImg=$("div.hand img",thisObj.wrapObj);
                var hanImgOffset=handImg.offset();
                var handImgTop=hanImgOffset.top-this.wrapObj.offset().top;
                var handImgLeft=hanImgOffset.left-this.wrapObj.offset().left;
                var cursor=thisObj.cursor=$("#cursor").show();
                var ctx = thisObj.ctx;
                ctx.globalCompositeOperation = 'destination-out';
                ctx.lineWidth = 20;
                ctx.lineCap = ctx.lineJoin = 'round';
                this.animate=setInterval(function(){
                    var client={};
                    var cursorOffsetWidth=cursor.width()/2;
                    var cursorOffsetHeight=cursor.height()/2;
                    var cursorBeginTop=handImgTop+35,cursorBeginLeft=handImgLeft+12;
                    cursor.css({top:cursorBeginTop,left:cursorBeginLeft});
                    client={x:cursorBeginLeft+cursorOffsetWidth,y:cursorBeginTop+cursorOffsetHeight};
                    ctx.moveTo(client.x, client.y);
                    ctx.beginPath();
                    cursor.animate({top:handImgTop+15,left:handImgLeft+98},
                        {speed:1000,step:function(now,fn){
                            if('top'==fn.prop){
                                client.y=now+cursorOffsetHeight;
                            }else{
                                client.x=now+cursorOffsetWidth;
                            }
                            ctx.lineTo(client.x, client.y);
                            ctx.stroke();
                            },
                            callback :function(){
                                ctx.closePath();
                            }
                        });
                },1500)
            };
            Fog.prototype.mousePos=function(e){
                //var x, y;
                var e = e || window.event;
                return {
                    x: e.touches ? (e.touches[0].pageX) : (e.clientX+$(window).scrollLeft()-this.wrapObj.offset().left),
                    y: e.touches ? (e.touches[0].pageY) : (e.clientY + $(window).scrollTop()-this.wrapObj.offset().top)
                };
            };
            Fog.prototype.drawStart=function(e){
                e.preventDefault();
                this.cursor.stop(true);
                clearInterval(this.animate);
                this.cursor.hide();
                this.enableDraw=true;
                var ctx = this.ctx,
                    client = this.mousePos(e);
                ctx.globalCompositeOperation = 'destination-out';
                ctx.lineWidth = 70;
                ctx.lineCap = ctx.lineJoin = 'round';
                ctx.beginPath();
                ctx.moveTo(client.x, client.y);
            };
            Fog.prototype.drawPercent=function(w,h){
                for (var i = this.ctx.getImageData(0, 0, w, h), a = i.data, o = [], r = 0, s = a.length; s > r; r += 4) {
                    var l = a[r + 3];
                    128 > l && o.push(r)
                }
                return (100 * (o.length / (a.length / 4))).toFixed(2);
            };
            Fog.prototype.draw=function(e){
                e.preventDefault();
                var ctx = this.ctx,
                    client = this.mousePos(e);
                ctx.lineTo(client.x, client.y);
                ctx.stroke();
                //ctx.arc(x, y, 20, 0, (Math.PI/180) * 360, false);
                //ctx.fill();
            };
            Fog.prototype.drawEnd=function(e){
                var thisObj=this;
                this.enableDraw=false;
                var ctx = this.ctx;
                ctx.closePath();
                var fogPercent = this.drawPercent(this.width, this.height);
                this.drawTimes++;
                if(60<fogPercent){
                    var speed=1500;
                    if(1==this.drawTimes){
                        speed=3000;
                    }else if(2==this.drawTimes){
                        speed=2000;
                    }
                    if(!thisObj.animating){
                        thisObj.animating=true;
                        //$('.fog',thisObj.wrapObj).animate({opacity:0},speed,'');
                        $('.fog',thisObj.wrapObj).animate({opacity:0},speed,'',function(){
                            thisObj.animating=false;
                            $(this).remove();
                            $("#nav-right-btn").show();
                            //$('.fog',thisObj.wrapObj).remove();
                            thisObj.wrapObj.css('cursor',"pointer");
                        });
                    }
                }else if(45<fogPercent){
                    $('.fog',thisObj.wrapObj).animate({opacity:0.5},1200,'',function(){

                    });
                }else if(30<fogPercent){
                    $('.fog',thisObj.wrapObj).animate({opacity:0.5},1200,'',function(){

                    });
                }
            };
            Fog.prototype.bindEvent = function () {
                var thisObj=this;
                thisObj.wrapObj.on(YR.event.touchstart,function(e){
                    thisObj.drawStart(e);
                });
                thisObj.wrapObj.on(YR.event.touchmove,function(e){
                    if(thisObj.enableDraw){
                        thisObj.draw(e);
                    }
                });
                thisObj.wrapObj.on(YR.event.touchend,function(e){
                    thisObj.drawEnd(e);
                });
            };
            return Fog;
        }());
        var pageSection=$("#home");
        var canvas = $('canvas',pageSection);
        if(canvas.length>0){
            new Fog(canvas.get(0),pageSection);
        }
    },
    reasonPageInit:function(){
        var pageSection=$("#reason");
        var showTime=2200;
        var delayTime=0;
        $("img.hj",pageSection).delay(delayTime).fadeIn(showTime,function(){
        });
        $("span.hj",pageSection).delay(delayTime).fadeIn(showTime);
        delayTime+=700;
        $("img.gz",pageSection).delay(delayTime).fadeIn(showTime,function(){
        });
        $("span.gz",pageSection).delay(delayTime).fadeIn(showTime);
        delayTime+=700;
        $("img.ys",pageSection).delay(delayTime).fadeIn(showTime,function(){
        });
        $("span.ys",pageSection).delay(delayTime).fadeIn(showTime);
        delayTime+=700;
        $("img.dn",pageSection).delay(delayTime).fadeIn(showTime,function(){
        });
        $("span.dn",pageSection).delay(delayTime).fadeIn(showTime);
        delayTime+=700;
        $("img.qh",pageSection).delay(delayTime).fadeIn(showTime,function(){
        });
        $("span.qh",pageSection).delay(delayTime).fadeIn(showTime);
    },
    sourcePageInit:function(){
        var pageSection=$("#source");
        var showTime=2000;
        var delayTime=0;
        //$("img.bottom-icon",pageSection).fadeIn("slow",function(){
            $("img.pm",pageSection).delay(delayTime).fadeIn(showTime,function(){

            });
            $("img.cy",pageSection).delay(delayTime).fadeIn(showTime,function(){

            });
        delayTime+=700;
        $("img.eyhl",pageSection).delay(delayTime).fadeIn(showTime,function(){
        });
        $("img.yyht",pageSection).delay(delayTime).fadeIn(showTime,function(){
        });
        $("img.yc",pageSection).delay(delayTime).fadeIn(showTime,function(){
        });
        delayTime+=700;
        $("img.bottom-icon",pageSection).delay(delayTime).fadeIn(showTime,function(){
        });
        //});
    },
    productPageInit:function(){
        var pageSection=$("#product");
        var productCarousel=$("#product-carousel").CloudCarousel( {
            reflHeight: 0,
            reflGap:2,
            buttonLeft: '#product-arrow-right',
            buttonRight:'#product-arrow-left',
            xRadius:500,
            yRadius:40,
            xPos: 470,
            yPos: 50,
            speed:0.15,
            bringToFront:true,
            autoRotate:'no',
            callback:function(){
                productCarousel.show();
            }
        });

    },
    sharePageInit:function(){

    }
};