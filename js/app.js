'use strict';

$('#hamburgerMenu').on('click', function(){
  $('.navbar').toggle();
});

$('.navItem').on('click', function(event){
  $('li').children().css('display', 'none');
  var identifier = event.target.id;
  $('.' + identifier).toggle()
                      .css({position: 'absolute',
                        top: '40vh',
                      })
})
