var slideCount = null;
$(document).ready(function(){
	$('#brand, #model, #years, #sort_by').selectize();
	$('#car_detail_slide').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 5000,
            prevArrow: $('.qcs-slide-arrow-left'),
            nextArrow: $('.qcs-slide-arrow-right'),
      });
});

$('#car_detail_slide').on('init', function(event, slick){
	slideCount = slick.slideCount;
	setSlideCount();
	setCurrentSlideNumber(slick.currentSlide);
});
$('#car_detail_slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
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