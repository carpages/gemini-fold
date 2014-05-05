// jQuery helpers when dealing with the fold
define(['jquery-loader'], function($){
	// Convenience methods in jQuery namespace.
	// Use as  $.belowthefold(element, {threshold : 100, container : window})

	$.belowthefold = function(element, options) {
		var fold;
		var settings = $.extend({}, {container:window, threshold: 0}, options);

		if (settings.container === undefined || settings.container === window) {
			fold = $(window).height() + $(window).scrollTop();
		} else {
			fold = $(settings.container).offset().top + $(settings.container).height();
		}

		return fold <= $(element).offset().top - settings.threshold;
	};

	$.rightoffold = function(element, options) {
		var fold;
		var settings = $.extend({}, {container:window, threshold: 0}, options);

		if (settings.container === undefined || settings.container === window) {
			fold = $(window).width() + $(window).scrollLeft();
		} else {
			fold = $(settings.container).offset().left + $(settings.container).width();
		}

		return fold <= $(element).offset().left - settings.threshold;
	};

	$.abovethetop = function(element, options) {
		var fold;
		var settings = $.extend({}, {container:window, threshold: 0}, options);

		if (settings.container === undefined || settings.container === window) {
			fold = $(window).scrollTop();
		} else {
			fold = $(settings.container).offset().top;
		}

		return fold >= $(element).offset().top + settings.threshold  + $(element).height();
	};

	$.leftofbegin = function(element, options) {
		var fold;
		var settings = $.extend({}, {container:window, threshold: 0}, options);

		if (settings.container === undefined || settings.container === window) {
			fold = $(window).scrollLeft();
		} else {
			fold = $(settings.container).offset().left;
		}

		return fold >= $(element).offset().left + settings.threshold + $(element).width();
	};

	$.inviewport = function(element, settings) {
		return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
				!$.belowthefold(element, settings) && !$.abovethetop(element, settings);
	};

	/* Custom selectors for your convenience.   */
	/* Use as $("img:below-the-fold").something() or */
	/* $("img").filter(":below-the-fold").something() which is faster */
	/*
	$.extend($.expr[':'], {
		"below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
		"above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
		"right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
		"left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
		"in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
		"above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
		"right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
		"left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
	});
	*/

	return $;
});
