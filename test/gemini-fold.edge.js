/* eslint key-spacing: ["error", { "align": "colon" }] */
requirejs.config({
  baseUrl: '../',
  paths  : {
    'underscore'    : 'bower_components/underscore/underscore',
    'jquery'        : 'bower_components/jquery/dist/jquery',
    'handlebars'    : 'bower_components/handlebars/handlebars.runtime',
    'jquery.boiler' : 'bower_components/jquery-boiler/jquery.boiler',
    'gemini.support': 'bower_components/gemini-support/gemini.support',
    'gemini'        : 'bower_components/gemini-loader/gemini'
  }
});

require([ 'gemini', 'gemini.fold' ], function( G ) {
  console.log({
    below: G.belowthefold( '.below' ),
    right: G.rightoffold( '.right' ),
    above: G.abovethetop( '.above' ),
    left : G.leftofbegin( '.left' ),
    start: G.inviewport( '.start' )
  });
});
