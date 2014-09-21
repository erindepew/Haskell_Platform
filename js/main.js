//function for mobile menu hide/show

$(function() {


    $("#navigation--mobile-button").click(function(){
        console.log("clicked");
        var menu = document.getElementById("navigation--MOBILE");
        console.log("get element" + menu);
        var state = menu.getAttribute("data-state");

        console.log("state" + state);
        if (state == 'open'){
            $("#navigation--MOBILE").animate({left: '-13em'}, "slow");
            menu.setAttribute("data-state", "closed");

        }

        else {
            $("#navigation--MOBILE").animate({left: '0'}, "slow");
            menu.setAttribute("data-state", "open");
        }
    });

});
