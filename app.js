new WOW().init();

var thehight = $(window).height();
$("section").css("height", thehight);



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