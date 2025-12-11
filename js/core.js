$(document).ready(function() {
    $("p:first").click(function() {
        $(this).hide();
    });

    $("button:first").click(function() {
        $("p").show();
    });

    $('img.tesla').hover(function() {
        $("img.tesla").css("width","35%");
        $("img.tesla").css("cursor","pointer");
        $("img.tesla").css("transition","0.3s");
        $("img.tesla").css("box-shadow","5px 10px 18px #3a3a3a");
        $("body").css("background-color","#FFCF02");
    })

    $('img.plant').hover(function() {
        $("img.plant").css("width","35%");
        $("img.plant").css("cursor","pointer");
        $("img.plant").css("transition","0.3s");
        $("img.plant").css("box-shadow","5px 10px 18px #3a3a3a");
        $("body").css("background-color","#5969B5");
    })

    $('img').mouseleave(function() {
        $("img").css("width","30%");
        $("img").css("box-shadow","none");
        $("body").css("background-color","white");
    })
});