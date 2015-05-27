requirejs.config({
  baseUrl: '../',
  paths: {
    'underscore':                'bower_components/underscore/underscore',
    'jquery':                    'bower_components/jquery/dist/jquery',
    'handlebars':                'bower_components/handlebars/handlebars.runtime',
    'jquery.boiler':             'bower_components/jquery-boiler/jquery.boiler',
    'gemini.support':            'bower_components/gemini-support/gemini.support',
    'gemini':                    'bower_components/gemini-loader/gemini'
  }
});

require(['gemini', 'gemini.fold'], function(G){
  console.log(G.belowthefold);
  console.log(G.rightoffold);
  console.log(G.abovethetop);
  console.log(G.leftofbegin);
  console.log(G.inviewport);
});
