$(document).ready(function($){$(function(){$("a.page-scroll").bind("click",function(e){var o=$(this);$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top},1500,"easeInOutExpo"),e.preventDefault()})}),$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$("body").scrollspy({target:".navbar-fixed-top"}),controller=new ScrollMagic,new ScrollScene({triggerElement:"#about",duration:200}).offset(-200).setTween(TweenMax.to("#animate",.5,{autoAlpha:0,y:150})).addTo(controller),new ScrollScene({triggerElement:"#about",duration:400}).setTween(TweenMax.from("#animate1",1,{scale:0,ease:Back.easeOut})).addTo(controller),new ScrollScene({triggerElement:"#skills",duration:400}).setTween(TweenMax.from(".fa-stack",1,{rotation:720})).addTo(controller),new ScrollScene({triggerElement:"#contact",duration:100}).setTween(TweenMax.from(".fa-envelope",1,{scale:0,ease:Back.easeOut})).addTo(controller),new ScrollScene({triggerElement:"#skills",duration:400}).setTween(TweenMax.from("#skills",1,{left:"-50%",marginLeft:-200,ease:Back.easeOut})).addTo(controller),$window=$(window),$('section[data-type="background"]').each(function(){var e=$(this);$(window).scroll(function(){var o=-($window.scrollTop()/e.data("speed")),n="50% "+o+"px";e.css({backgroundPosition:n})})})});