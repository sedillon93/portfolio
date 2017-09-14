'use strict';

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});

$('.navItem').on('click', function(event){
  var identifier = event.target.id;
  console.log(identifier);
  $('.' + identifier).toggle();
})
