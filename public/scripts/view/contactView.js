'use strict';
var globalApp = globalApp || {};

(function(module){
  module.renderContactHTML = function(){
    var contactHTML = $('#contactTemplate').html();
    var $fillContactTemplate = Handlebars.compile(contactHTML);
    var filledTemplate = $fillContactTemplate({
      phone: `(215)-806-8039`,
      email: `sedillon93@gmail.com`
    });
    $('#contactInfo').addClass('contact').append(filledTemplate);
  }
})(globalApp)
