'use strict';
var globalApp = globalApp || {};

(function(module){
  module.renderAboutHTML = function(){
    var $aboutHTML = $('#aboutTemplate').html();
    var $fillAboutTemplate = Handlebars.compile($aboutHTML);
    var $filledTemplate = $fillAboutTemplate({
      greeting: `Welcome to my portfolio. Take a look around and be sure to get in touch.`,
      blurb: `This is a test blurb about myself to see how it renders to the page.`
    });
    $('#aboutInfo').addClass('about').append($filledTemplate);
  }
})(globalApp)
