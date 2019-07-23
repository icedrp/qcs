$(document).ready(function() {

  $("#car_recommend").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: $(".home-example-slide-next"),
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

  $('.qcs-popup-input').on('keyup', function(e) {
    var $this = $(this),
        $input = $this.val();
    var id = $this.attr('id');

    if ($input.length > 0) {
      $("label[for=\"" + id + "\"]").addClass('active');
      $(this).addClass('active');

    } else {
      $("label[for=\"" + id + "\"]").removeClass('active');
      $(this).removeClass('active');
    }
  });
});
var lastScrollTop = 0;
$(window).on("scroll", function() {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    $("header").removeClass("active");
    $("nav").addClass("active");
  } else if(st == 0) {
    $("header, nav").removeClass("active");
  } else {
    $("nav").removeClass("active");
    $("header").addClass("active");
  } 
  lastScrollTop = st;
});

/* Goto Profile */
function setProfile(name){
    window.localStorage.setItem('profile', name);
}

// Login & Regis
function closePopup(){
  $('html').removeClass('noScroll');
  $('.qcs-popup, .form-regis, .form-login').hide();
}
function openSignin(){
  $('html').addClass('noScroll');
  $('.form-regis').hide();
  $('.qcs-popup, .form-login').show();
}
function openSignup(){
  $('html').addClass('noScroll');
  $('.form-login').hide();
  $('.qcs-popup, .form-regis').show();
}
