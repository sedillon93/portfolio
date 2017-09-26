'use strict';

$(document).ready(function(){
  $('section.fillNavItem').hide();
})

$('.navItem').on('click', function(event){
  $('section.fillNavItem').hide();
  var identifier = event.target.id;
  //trying to just show the project titles collected with .titlesOnly in app.js
  // $('.' + identifier).find('ul li').hide();
  $('.' + identifier).show()
})

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});
