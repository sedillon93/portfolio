'use strict';
var globalApp = globalApp || {};

(function(module){
  let aboutView = {};
  aboutView.showAbout = function(){
    if (!$('.about').length){
      globalApp.renderAboutHTML();
    }
    $('section.fillNavItem').hide();
    $('.about').show();
  }
  module.aboutView = aboutView;
})(globalApp);
