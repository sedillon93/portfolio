'use strict';
var globalApp = globalApp || {};

(function(module){
  let mainPage = {};
  mainPage.showMain = function(){
    $('section.fillNavItem').hide();
    $('.home').show();
  }
  module.mainPage = mainPage;
})(globalApp);
