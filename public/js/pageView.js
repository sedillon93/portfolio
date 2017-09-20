'use strict';

var pageView = {};

$(document).ready(function(){
  $('section.fillNavItem').hide();
})

$('.navItem').on('click', function(event){
  $('section.fillNavItem').hide();
  var identifier = event.target.id;
  $('.' + identifier).show()
})

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});
