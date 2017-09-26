'use strict';
var globalApp = globalApp || {};

(function(module){
  //hide all the things; show the info for my About page view
  let aboutView = {};
  aboutView.showAbout = function(){
    $('section.fillNavItem').hide();
    $('.about').show();
  }
  module.aboutView = aboutView;
})(globalApp);
