//function for mobile menu hide/show

$(function() {
    $(".navigation--mobile-open").click(function () {
        $(".site-wrapper").animate({"left": "21rem"}, "slow");
        $(".navigation--mobile-open").css("display", "none");
        $(".navigation--mobile-close").css("display", "block");
    });

    $(".navigation--mobile-close").click(function () {
        $(".site-wrapper").animate({"left": "0"}, "slow");
        $(".navigation--mobile-open").css("display", "block");
        $(".navigation--mobile-close").css("display", "none");
    });

});

