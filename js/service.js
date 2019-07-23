$(document).ready(function() {
	$(".service-gallery-slide").slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    dots: true,
	    arrows: true,
	    infinite: true,
	    autoplay: true,
	    autoplaySpeed: 3000,
	    centerMode: true,
	    centerPadding: "120px",
	    nextArrow: $(".service-gallery-slide-next"),
	    responsive: [
	      {
	        breakpoint: 1024,
	        settings: {
	          arrows: false,
	          centerMode: true,
	          centerPadding: "60px",
	          slidesToShow: 3
	        }
	      },
	      {
	        breakpoint: 767,
	        settings: {
	          arrows: false,
	          centerMode: true,
	          centerPadding: "60px",
	          slidesToShow: 2
	        }
	      }
	    ]
	  });
});