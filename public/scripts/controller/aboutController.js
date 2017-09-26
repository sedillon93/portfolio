'use strict';
var globalApp = globalApp || {};

(function(module){
  //hide all the things; show the info for my About page view
  let aboutView = {};
  aboutView.showAbout = function(){
    $('.about').empty();
    globalApp.renderAboutHTML();
    $('section.fillNavItem').hide();
    $('.about').show();
  }
  module.aboutView = aboutView;
})(globalApp);
