//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
    $('header').addClass('header--scroll');
  } else {
    $(".btn-top").fadeOut();
    $('header').removeClass('header--scroll');
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
  $('.modal').removeClass('modal--opened');
  $('.bar').addClass('bar--opened');
  $('.modal--call').addClass('modal--opened');
  $('.overlay').addClass('overlay--show');
});

$('.bar--mail').click(function() {
  $('.modal').removeClass('modal--opened');
  $('.bar').addClass('bar--opened');
  $('.modal--mail').addClass('modal--opened');
  $('.overlay').addClass('overlay--show');
});

$('.bar--feedback').click(function() {
  $('.modal').removeClass('modal--opened');
  $('.bar').addClass('bar--opened');
  $('.modal--feedback').addClass('modal--opened');
  $('.overlay').addClass('overlay--show');
});

$('.subscribe').click(function() {
  $('.modal').removeClass('modal--opened');
  $('.bar').addClass('bar--opened');
  $('.modal--subscribe').addClass('modal--opened');
  $('.overlay').addClass('overlay--show');
});

$('.nav__btn').click(function(evt) {
  evt.preventDefault();
  $('.modal').removeClass('modal--opened');
  $('.nav').slideUp();
  $('.bar').addClass('bar--opened');
  $('.modal--mail').addClass('modal--opened');
  $('.overlay').addClass('overlay--show');
});

$('.call').click(function(evt) {
  evt.preventDefault();
  $('.modal').removeClass('modal--opened');
  $('.bar').addClass('bar--opened');
  $('.modal--call').addClass('modal--opened');
  $('.overlay').addClass('overlay--show');
});

$('.nav__call').click(function(evt) {
  evt.preventDefault();
  $('.modal').removeClass('modal--opened');
  $('.nav').slideUp();
  $('.bar').addClass('bar--opened');
  $('.modal--call').addClass('modal--opened');
  $('.overlay').addClass('overlay--show');
});

$('.sidebar__btn--call').click(function() {
  $('.modal').removeClass('modal--opened');
  $('.bar').addClass('bar--opened');
  $('.modal--call').addClass('modal--opened');
  $('.overlay').addClass('overlay--show');
});

$('.sidebar__btn--mail').click(function() {
  $('.modal').removeClass('modal--opened');
  $('.bar').addClass('bar--opened');
  $('.modal--mail').addClass('modal--opened');
  $('.overlay').addClass('overlay--show');
});

$('.sidebar__btn--feedback').click(function() {
  $('.modal').removeClass('modal--opened');
  $('.bar').addClass('bar--opened');
  $('.modal--feedback').addClass('modal--opened');
  $('.overlay').addClass('overlay--show');
});

//Menu
$('.nav-btn').click(function() {
  $('.nav').slideDown();
  $('.overlay').addClass('overlay--show');
});

$('.nav__close').click(function() {
  $('.nav').slideUp();
  $('.overlay').removeClass('overlay--show');
});

if (window.innerWidth < 1200) {
  $('.nav__close-back').click(function() {
    $('.nav__columns').removeClass('nav__columns--opened');
    $('.nav__point').removeClass('nav__point--opened');
    $(this).removeClass('nav__close-back--show');
    $('.nav__logo').removeClass('nav__logo--hide');
  });
} else {
  $('.nav__close-back').click(function() {
    $('.nav').slideUp();
    $('.overlay').removeClass('overlay--show');
  });
}

$('.nav__arrow').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('nav__arrow--open');
});

$('.nav__mobile').click(function() {
  $('.nav__columns').addClass('nav__columns--opened');
  $(this).next().addClass('nav__point--opened');
  $('.nav__close-back').addClass('nav__close-back--show');
  $('.nav__logo').addClass('nav__logo--hide');
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
  $('.nav').slideUp();
  $('.overlay').removeClass('overlay--show');
});

$('body').keydown(function(e) {
  if (e.keyCode == 27) {
    $('.search').slideUp();
    $('.bar').removeClass('bar--opened');
    $('.modal').removeClass('modal--opened');
    $('.overlay').removeClass('overlay--show');
    $('.nav').slideUp();
  }
});
