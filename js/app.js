'use strict';

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});

$(document).ready(function(){
  $('div.fillNavItem').hide();
})

$('.navItem').on('click', function(event){
  $('div.fillNavItem').hide();
  var identifier = event.target.id;
  $('.' + identifier).show()
}
)
