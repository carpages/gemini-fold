/**
 * @fileoverview

Gemini helpers when dealing with the fold of the window, or an individual
element. Simply put, it tells you whether an element is on the screen.

 *
 * @namespace gemini.fold
 * @copyright Carpages.ca 2014
 * @author Matt Rose <matt@mattrose.ca>
 *
 * @requires gemini
 *
 * @example
  G.belowthefold('#js-some-item');
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['gemini'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('gemini'));
  } else {
    // Browser globals
    factory(G);
  }
}(function($) {

  /**
   * Check it the element is below the fold
   *
   * @method
   * @name gemini.fold#belowthefold
   * @param {element} element The dom element that you're inquiring
   * @param {object} options
   * @param {element} options.container The container element that the viewport applies to
   * @param {integer} options.threshhold The pixel threshold beyond the fold
   * @return {boolean} Returns whether the element is below the fold or not
  **/
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

  /**
   * Check it the element is right of the fold
   *
   * @method
   * @name gemini.fold#rightoffold
   * @param {element} element The dom element that you're inquiring
   * @param {object} options
   * @param {element} options.container The container element that the viewport applies to
   * @param {integer} options.threshhold The pixel threshold beyond the fold
   * @return {boolean} Returns whether the element is to the right of the fold or not
  **/
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

  /**
   * Check it the element is above the top
   *
   * @method
   * @name gemini.fold#abovethetop
   * @param {element} element The dom element that you're inquiring
   * @param {object} options
   * @param {element} options.container The container element that the viewport applies to
   * @param {integer} options.threshhold The pixel threshold beyond the top
   * @return {boolean} Returns whether the element is above of the top or not
  **/
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

  /**
   * Check it the element is left of the begininning
   *
   * @method
   * @name gemini.fold#leftofbegin
   * @param {element} element The dom element that you're inquiring
   * @param {object} options
   * @param {element} options.container The container element that the viewport applies to
   * @param {integer} options.threshhold The pixel threshold beyond the beginning
   * @return {boolean} Returns whether the element is to the left of the beginning or not
  **/
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

  /**
   * Check it the element is in the viewport
   *
   * @method
   * @name gemini.fold#inviewport
   * @param {element} element The dom element that you're inquiring
   * @param {object} options
   * @param {element} options.container The container element that the viewport applies to
   * @param {integer} options.threshhold The pixel threshold of the viewport
   * @return {boolean} Returns whether the element is in the viewport
  **/
  $.inviewport = function(element, settings) {
    return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
        !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
  };

  // Custom selectors for your convenience.
  // Use as $("img:below-the-fold").something() or
  // $("img").filter(":below-the-fold").something() which is faster
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
}));
