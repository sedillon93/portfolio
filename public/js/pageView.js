'use strict';

var pageView = {};

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});

$(document).ready(function(){
  $('section.fillNavItem').hide();
})

$('.navItem').on('click', function(event){
  $('section.fillNavItem').hide();
  var identifier = event.target.id;
  $('.' + identifier).show()
})
