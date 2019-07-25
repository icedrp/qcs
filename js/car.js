var slideCount = null;
$(document).ready(function(){
	$('#brand, #model, #years, #sort_by').selectize();
	$('#car_detail_slide_ex').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 5000,
            prevArrow: $('.qcs-slide-arrow-left'),
            nextArrow: $('.qcs-slide-arrow-right'),
            responsive: [
	          {
	            breakpoint: 1024,
	            settings: {
	              arrows: false,
	              dots: true,
	            }
	          },
	          {
	            breakpoint: 767,
	            settings: {
	              arrows: false,
	              dots: true,
	            }
	          }
	        ]

    });

    // $('#list-interior').on('click', function(){

    // 	ttt();
    // });
});

$('#car_detail_slide_ex').on('init', function(event, slick){
	slideCount = slick.slideCount;
	setSlideCount();
	setCurrentSlideNumber(slick.currentSlide);
});
$('#car_detail_slide_ex').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	setCurrentSlideNumber(nextSlide);
});
function setSlideCount() {
	var $el = $('.slide-count-wrap').find('.total');
	$el.text(slideCount);
}
function setCurrentSlideNumber(currentSlide) {
	var $el = $('.slide-count-wrap').find('.current');
	$el.text(currentSlide + 1);
}


// Interior
function carInterior(){
	if($('#car_detail_slide_in.slick-slider').length == 0) {
		$('#car_detail_slide_in').slick({
	        infinite: true,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: false,
	        arrows: true,
	        autoplay: false,
	        autoplaySpeed: 5000,
	        prevArrow: $('.qcs-slide-in-arrow-left'),
	        nextArrow: $('.qcs-slide-in-arrow-right'),
	        responsive: [
	          {
	            breakpoint: 1024,
	            settings: {
	              arrows: false,
	              dots: true,
	            }
	          },
	          {
	            breakpoint: 767,
	            settings: {
	              arrows: false,
	              dots: true,
	            }
	          }
	        ]
	    });
		$('#car_detail_slide_in').slick("refresh");
	}
}
$('#car_detail_slide_in').on('init', function(event, slick){
	slideCount = slick.slideCount;
	setSlideCountIn();
	setCurrentSlideNumberIn(slick.currentSlide);
});
$('#car_detail_slide_in').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	setCurrentSlideNumberIn(nextSlide);
});
function setSlideCountIn() {
	var $el = $('.slide-count-wrap-in').find('.total');
	$el.text(slideCount);
}
function setCurrentSlideNumberIn(currentSlide) {
	var $el = $('.slide-count-wrap-in').find('.current');
	$el.text(currentSlide + 1);
}


// Hide
function specDetail(){
	if (window.matchMedia('(max-width: 768px)').matches) {
		if($("#spec_detail.up").length > 0) {
			$("#spec_detail").toggle( "slow");
			$('#spec_detail').removeClass('up');
			$('#spec_detail').addClass('down');
			$('.up-spec').hide();
			$('.down-spec').show();
		} else {
			$("#spec_detail").toggle( "slow");
			$('#spec_detail').removeClass('down');
			$('#spec_detail').addClass('up');
			$('.down-spec').hide();
			$('.up-spec').show();
		}	
	}
}
function equipmentDetail(){
	if (window.matchMedia('(max-width: 768px)').matches) {
		if($("#equipment_detail.up").length > 0) {
			$("#equipment_detail").toggle( "slow");
			$('#equipment_detail').removeClass('up');
			$('#equipment_detail').addClass('down');
			$('.up-equipment').hide();
			$('.down-equipment').show();
		} else {
			$("#equipment_detail").toggle( "slow");
			$('#equipment_detail').removeClass('down');
			$('#equipment_detail').addClass('up');
			$('.down-equipment').hide();
			$('.up-equipment').show();
		}
	}
}