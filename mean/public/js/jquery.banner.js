        $(document).ready(function() {  
            var count=0;  
            var t=null;  
            $(".ManagerBanner .banner-list").eq(0).show().siblings(".ManagerBanner div").hide();  
            $(".ManagerBanner .btn li").click(function(){  
                count=$(this).index();  
                $(this).addClass("hov").siblings("li").removeClass("hov");  
                $(".ManagerBanner .banner-list").eq(count).fadeIn(1000).siblings(".ManagerBanner div").fadeOut(1000);  
            })  
            $(".ManagerBanner").mouseover(function() {  
                /* Act on the event */  
                clearInterval(t);  
            }).mouseout(function() {  
                /* Act on the event */  
                autoPlay();  
            });  
            autoPlay();  
            function autoPlay(){  
                t=setInterval(function(){  
                    count++;  
                    if(count<4){  
                        $(".ManagerBanner .btn li").eq(count).addClass("hov").siblings().removeClass("hov");  
                        $(".ManagerBanner .banner-list").eq(count).fadeIn(1000).siblings(".ManagerBanner div").fadeOut(500);  
                    }  
                    else  
                    {  
                        count=-1;  
                    };  
                },3000);  
            };  
        });  