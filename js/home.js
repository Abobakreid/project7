/*global $*/
$(function () {
    "use strict";
    /* start the head */
    
    $(".head .link ul li:not(:last-of-type) a").on("click", function () {
        
        $(this).addClass("active").parent("li").siblings("li").children("a").removeClass("active");
        
    });
    
    /* end the head */
    /* start the links2 */
    
    $(".head .bar i").on("click", function () {
        $(this).toggleClass("active");
        
        if ($(this).hasClass("active")) {
            
            $(".link2").css("display", "block").animate({
                right: "0"
            }, 1000);
            
        } else {
            
            $(".link2").animate({
                right: "-200px"
            }, 1000, function () {
                $(this).css("display", "none");
            });
        }
    });
    /* end the links2 */
    /* start the slider  */
    
    $(".slid .points li").on("click", function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        $($(this).data("img")).siblings().animate({
            right: "-100%"
        }, 1000, function () {
            $(this).removeClass("active");
        });
        $($(this).data("img")).animate({
            right: 0
        }, 1000, function () {
            $(this).addClass("active");
        });
    });
    
    var setslide = setInterval(function () {
        if ($(".slid .points li:last-of-type").hasClass("active")) {
            $(".slid .points li:last-of-type").closest();
            $(".slid .points li:first-of-type").click();
        } else {
            $(".slid .points li.active").next().click();
        }
    }, 5000);

    /* end the slider */
    /* start lorem ipsum */
    
    $(".lorem ").hover(function () {
        $(this).find("span").animate({
            left: 0
        }, 1000);
    }, function () {
        $(this).find("span").animate({
            left: "100%"
        }, 1000, function () {
            $(".lorem span").css("left", "-100%");
        });
    });
    
    /* end the lorem ipsum */
    /* start the conatct */
    
    $(".footer .contact form button").hover(function () {
        $(this).find("span:first-of-type").animate({
            width: "101%"
        }, 800, function () {
            $(this).next("span").animate({
                width: "101%"
            }, 800);
        });
    }, function () {
        $(this).find("span").animate({
            width: "0"
        }, 500);
    });
    
    /* end th contact */

});