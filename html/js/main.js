$(document).ready(function($) {

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
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






    controller = new ScrollMagic();

    new ScrollScene({triggerElement: "#about", duration: 200 })
            .offset(-200)
            .setTween(TweenMax.to("#animate", 0.5, {autoAlpha: 0, y: 150}))
            .addTo(controller);

    new ScrollScene({triggerElement: "#about", duration: 400 })
            .setTween(TweenMax.from("#animate1", 1, {scale: 0, ease: Back.easeOut}))
            .addTo(controller);

    new ScrollScene({triggerElement: "#skills", duration: 400 })
            .setTween(TweenMax.from(".fa-stack", 1, {rotation: 720}))
            .addTo(controller);

    new ScrollScene({triggerElement: "#contact", duration: 100 })
            .setTween(TweenMax.from(".fa-envelope", 1, {scale: 0, ease: Back.easeOut}))
            .addTo(controller);

    new ScrollScene({triggerElement: "#skills", duration: 400 })
        .setTween(TweenMax.from("#skills", 1, {left: "-50%", marginLeft: -200, ease: Back.easeOut}))
        .addTo(controller);





   $window = $(window);
   $('section[data-type="background"]').each(function(){
     var $scroll = $(this);                  
      $(window).scroll(function() {
                          
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 

        var coords = '50% '+ yPos + 'px';

        $scroll.css({ backgroundPosition: coords });    
      });
   });  


});














