$(document).ready(function() {
	$(".service-gallery-slide").slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    dots: true,
	    arrows: true,
	    infinite: true,
	    autoplay: false,
	    autoplaySpeed: 3000,
	    centerMode: true,
	    centerPadding: "120px",
	    nextArrow: $(".service-gallery-slide-next"),
	    asNavFor: '.qcs-popup-body-service-img',
	    focusOnSelect: true,
	    responsive: [
	      {
	        breakpoint: 1024,
	        settings: {
	          arrows: false,
	          centerMode: true,
	          centerPadding: "60px",
	          slidesToShow: 2
	        }
	      },
	      {
	        breakpoint: 767,
	        settings: {
	          arrows: false,
	          centerMode: true,
	          centerPadding: "40px",
	          slidesToShow: 2
	        }
	      }
	    ]
	});
 	$('.qcs-popup-body-service-img').slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	infinite: true,
	  	centerMode: true,
      	centerPadding: "20vw",
      	autoplay: false,
	  	asNavFor: '.service-gallery-slide'
	});
});

function showServiceImg(){
	$('.qcs-popup-service-img').show();
	$('html, body').addClass('noScroll');
  	$('header, section, footer').addClass('blur-filter');
}
function closeServiceImg(){
	$('.qcs-popup-service-img').hide();
	$('html, body').removeClass('noScroll');
  	$('header, section, footer').removeClass('blur-filter');
}