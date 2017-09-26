'use strict';
var globalApp = globalApp || {};

(function(module){
  let contactView = {};
  contactView.showContactInfo = function(){
    $('.contact').empty();
    globalApp.renderContactHTML();
    $('section.fillNavItem').hide();
    $('.contact').show();
  }
  module.contactView = contactView;
})(globalApp);
