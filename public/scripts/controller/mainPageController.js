'use strict';
var globalApp = globalApp || {};

//hide all the things; show only my hook statement;
(function(module){
  let mainPage = {};
  mainPage.showMain = function(){
    $('section.fillNavItem').hide();
    $('.home').show();
  }
  module.mainPage = mainPage;
})(globalApp);
