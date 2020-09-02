$(document).ready(function(){
    // DARKMODE
    $("#darkmode").click(function(){
        $("body").toggleClass("dark-mode");
    });

    // GO TO TOP
    $("#go-to-top").click(function(){
        $("html,body").stop().animate({"scrollTop":0}, 1000);
    });

    // ARTICLE BUTTON EVENTLISTENER
    $(".aside-btn").click(function(){
        var i = $(this).index();
        $(".content-item").removeClass("active");
        $(".content-item").eq(i).addClass("active");
    });

    // WINDOW SCROLL
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $("#go-to-top").fadeIn("fast");
        }else{
            $("#go-to-top").stop().fadeOut("fast");
        }

        if($(this).scrollTop()>70){
            $(".header").css({"position":"fixed","background":"transparent","width":"100%"});
        }else if($(this).scrollTop()<20){
            $(".header").css({"position":"static","background":"","width":""});
        }
    })
});