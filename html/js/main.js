$(document).ready(function($) {
  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1000, 'easeInOutExpo');
          event.preventDefault();
      });
  });
  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });
  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '.navbar-fixed-top'
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('#page-top').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
  });


  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  }else {
    $window = $(window);
    $('section[data-type="background"], header[data-type="background"]').each(function(){
     var $scroll = $(this);                  
      $(window).scroll(function() {
                          
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 

        var coords = '50% '+ yPos + 'px';

        $scroll.css({ backgroundPosition: coords });    
      });
    });  
  }

});









