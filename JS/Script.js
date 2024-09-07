$(document).ready(function(){

    $(window).load(function(){
        $(".preloader").fadeOut(1000);
    }),

    $(".cancel").click(function(){
        $(".pop-up").fadeOut();
    });

    $(".top-up").click(function(){
        $("html,body").animate({scrollTop:0});
    });

    $(".arow-1").click(function(){
        $(".banner").addClass("banner-2");
        
    });
    $(".arow-2").click(function(){
        $(".banner").removeClass("banner-2");
        
    });



    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        console.log(scrolling);
        if(scrolling >=160){
            $(".nav-bar").addClass("fixed");
        }
        else{
            $(".nav-bar").removeClass("fixed");
        }
        if(scrolling >=450){
            $(".top-up").fadeIn();
        }
        else{
            $(".top-up").fadeOut();
        }
    });
    $(".slide-img").click(function(){
        $(".slide-img").removeClass("active");
        $(this).addClass("active");
    });
});