//function for mobile menu hide/show

/*
$(function() {
    $("#navigation--mobile-button").click(function(){
        $("#navigation--MOBILE").animate({width: 'toggle'});
    });

});
       */

$(function() {
    $(".open").click(function () {
        $("#navigation--MOBILE").animate({"left": "0"}, "slow");
        $(".open").css("display", "none");
        $(".close").css("display", "block");
    });

    $(".close").click(function () {
        $("#navigation--MOBILE").animate({"left": "-13em"}, "slow");
        $(".open").css("display", "block");
        $(".close").css("display", "none");
    });

});