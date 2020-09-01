$(document).ready(function(){
    // DARKMODE
    $("#darkmode").click(function(){
        $("body").toggleClass("dark-mode");
    });

    // GO TO TOP
    $("#go-to-top").click(function(){
        $("html,body").stop().animate({"scrollTop":0}, 1000);
    });

    // WINDOW SCROLL
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $("#go-to-top").fadeIn("fast");
        }else{
            $("#go-to-top").stop().fadeOut("fast");
        }
    })
});