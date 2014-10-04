//function for mobile menu hide/show

$(function() {
    $(".navigation--mobile-open").click(function () {
        //$("#navigation--MOBILE").animate({"left": "0"}, "slow");
        $(".site-wrapper").animate({"left": "13em"}, "slow");
        $(".navigation--mobile-open").css("display", "none");
        $(".navigation--mobile-close").css("display", "block");
    });

    $(".navigation--mobile-close").click(function () {
        //$("#navigation--MOBILE").animate({"left": "-13em"}, "slow");
        $(".site-wrapper").animate({"left": "0"}, "slow");
        $(".navigation--mobile-open").css("display", "block");
        $(".navigation--mobile-close").css("display", "none");
    });

});

