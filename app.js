// Initializing animations
new WOW().init();

// Browser-specific styling
var thehight = $(window).height();
var thewidth = $(window).width();

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		
} else {
    $(".section").css("height", thehight);
    $(".map").css("height", thehight);
    $(".final").css("height", thehight);
}

var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

if(is_chrome){
	
		$(".section").css({
			"display": "table",
			"height": "100vh",
			"width": "100%",
			"background-repeat": "no-repeat",
			"background-position": "center center",
			"background-attachment": "fixed",
			"-webkit-background-size": "contain",
			"-moz-background-size": "contain",
			"-o-background-size": "contain",
			"background-size": "contain"
		});

		$(".mobilemap").css("display", "none");
    $(".slideOne").css("background-image", "url(map1.svg)");
    $(".slideTwo").css("background-image", "url(map2.svg)"); 
    $(".slideThree").css("background-image", "url(map3.svg)"); 
    $(".slideFour").css("background-image", "url(map4.svg)"); 
    $(".slideFive").css("background-image", "url(map5.svg)"); 
    $(".slideSix").css("background-image", "url(map6.svg)"); 

}

// Dynamic "Read More" link
$(function() {
    $("#zero").waypoint(function(direction) {
        $("#downarrowlink").attr("href", "#one");
				$("header").css("display", "block");
    });

    $("#one").waypoint(function(direction) {
        $("#downarrowlink").attr("href", "#two");
				$("header").css("display", "block");
				$(".downarrow").css("display", "block");
    });

    $("#two").waypoint(function(direction) {
        $("#downarrowlink").attr("href", "#three");
				$("header").css("display", "block");
				$(".downarrow").css("display", "block");
    });

    $("#three").waypoint(function(direction) {
        $("#downarrowlink").attr("href", "#four");
				$("header").css("display", "block");
				$(".downarrow").css("display", "block");
    });

    $("#four").waypoint(function(direction) {
        $("#downarrowlink").attr("href", "#five");
				$("header").css("display", "block");
				$(".downarrow").css("display", "block");
    });
		
    $("#five").waypoint(function(direction) {
        $("#downarrowlink").attr("href", "#final");
				$("header").css("display", "block");
				$(".downarrow").css("display", "block");
    });
		
		$(".final").waypoint(function(direction) {
			$("header").css("display", "none");
			$(".downarrow").css("display", "none");
		});
		
});

// Smooth scrolling
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});