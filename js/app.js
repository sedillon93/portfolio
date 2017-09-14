'use strict';

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});

//saving this feature for later
// $('.navItem').on('click', function(event){
//   var identifier = event.target.id;
//   $('html, body').animate({
//     scrollTop: $('.' + identifier).position().top
//   })
// })

$(document).ready(function(){
  $('div.fillNavItem').hide();
})

$('.navItem').on('click', function(event){
  $('div.fillNavItem').hide();
  $('.navbar').toggle();
  var identifier = event.target.id;
  $('.' + identifier).show()
}
)
