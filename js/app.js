'use strict';

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});

$('.navItem').on('click', function(event){
  $('li.navItem').children().hide();
  var identifier = event.target.id;
  console.log(identifier);
  $('.' + identifier).show()
                      .css({position: 'absolute',
                        top: '40vh',
                      })
})

$(document).ready(function(){
  $('li.navItem').children().hide();
})
