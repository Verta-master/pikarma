//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});

//Search
$('.header__search').click(function(e) {
  e.stopPropagation();
  $('.search').slideDown();
  $('.overlay').addClass('overlay--show');
});

$('.search__close').click(function() {
  $('.search').slideUp();
  $('.overlay').removeClass('overlay--show');
});

//Side buttons
$('.bar--call').click(function() {
  $('.bar').toggleClass('bar--opened');
  $('.modal--call').toggleClass('modal--opened');
  $('.overlay').toggleClass('overlay--show');
});

$('.bar--mail').click(function() {
  $('.bar').toggleClass('bar--opened');
  $('.modal--mail').toggleClass('modal--opened');
  $('.overlay').toggleClass('overlay--show');
});

$('.bar--feedback').click(function() {
  $('.bar').toggleClass('bar--opened');
  $('.modal--feedback').toggleClass('modal--opened');
  $('.overlay').toggleClass('overlay--show');
});

//Remove modal windows
$('.modal__close').click(function() {
  $('.bar').removeClass('bar--opened');
  $('.modal').removeClass('modal--opened');
  $('.overlay').removeClass('overlay--show');
});

$('.overlay').click(function() {
  $('.search').slideUp();
  $('.bar').removeClass('bar--opened');
  $('.modal').removeClass('modal--opened');
  $('.overlay').removeClass('overlay--show');
});

$('body').keydown(function(e) {
  if (e.keyCode == 27) {
    $('.search').slideUp();
    $('.bar').removeClass('bar--opened');
    $('.modal').removeClass('modal--opened');
    $('.overlay').removeClass('overlay--show');
  }
});
