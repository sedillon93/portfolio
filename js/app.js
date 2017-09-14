'use strict';

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});

$('.navItem').on('click', function(event){
  var identifier = event.target.id;
  $('html, body').animate({
    scrollTop: $('.' + identifier).position().top
  })
})

$('#scroll-down').on('click', function(){
  $('html, body').animate({
    scrollTop: $('#here').position().top
  })
})
// $(document).ready(function(){
//   $('li.navItem').children().hide();
// })

// $('.navItem').on('click', function(event){
//   $('li.navItem').children().hide();
//   var identifier = event.target.id;
//   $('.' + identifier).show()
//                       .css({position: 'absolute',
//                         top: '40vh',
//                       })
