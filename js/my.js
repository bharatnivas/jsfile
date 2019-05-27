// JavaScript Document


///Title Tag For A
$(document).find('a').each(function () {
	if ($(this).attr('title') == null || $(this).attr('title') == undefined || $(this).attr('title') == '') {
		if ($(this).parent().parent().hasClass('dropdown-menu') == false) {
			$(this).attr('title', $(this).text().trim());
		}

	}

});
///Title Tag For A Ends



///Scroll to top  / ////
$("#scroll-to-top").on("click", function (e) {
	$("body, html").animate({
		scrollTop: 0
	}, 800);
	return false;
});
$(window).load(function () {
	var $scrollToTop, defaultBottom, scrollArea;
	$scrollToTop = $("#scroll-to-top");
	defaultBottom = $scrollToTop.css("bottom");
	scrollArea = function () {
		return $(document).outerHeight() - $("").outerHeight() - $(window).outerHeight();
	};
	if ($('body').hasClass("boxed")) {
		return $(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				return $scrollToTop.addClass("in");
			} else {
				return $scrollToTop.removeClass("in");
			}
		});
	} else {
		return $(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$scrollToTop.addClass("in");
			} else {
				$scrollToTop.removeClass("in");
			}
			if ($(this).scrollTop() >= scrollArea()) {
				return $scrollToTop.css({
					bottom: $(this).scrollTop() - scrollArea() + 10
				});
			} else {
				return $scrollToTop.css({
					bottom: defaultBottom
				});
			}
		});
	}
});

//Scroll to top end /////


//$("[data-fancybox]").fancybox({
//	// Options will go here
//});
