// JavaScript Document

$(document).ready(function(){

	if($('.mountainSlider').length > 0){
  
	  $('.mountainSlider').slick({
		  dots: true,
		  speed: 1000,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  arrows: false,
		  responsive: [
			  {
				breakpoint: 1100,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				
				}
			  },
			  {
				breakpoint: 820,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
			
			]
	  });
	}	
	
	$('.tabLink').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('.innerTab').removeClass('current');
		$('.tabContent').removeClass('current');

		$(this).parent().addClass('current');
		$("#" + tab_id).addClass('current');
	})
	
	$(".scrollDwn").click(function(){

		var hgt = $(this).attr('rel');
		if($(window).width() > 640){
		  var mis = 50;
		}else{
		  var mis = 50;
		}
		$('html,body').animate({
		  scrollTop: $('div#'+hgt).offset().top - mis
		}, 1500);
	});    
	
	$('.scrollTop').click(function(){
		$('html,body').animate({scrollTop: 0}, 1500);
	})

	$(function() {
		$(".accordion > .accordion-item .accordion-thumb").click(function() {
		  $(this).parent().siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		  $(this).parent().toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	  });
	  });
});



