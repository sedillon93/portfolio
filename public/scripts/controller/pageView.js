'use strict';

$(document).ready(function(){
  $('section.fillNavItem').hide();
})

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});
