///////////////////////////////////////
//      smooth-scrolling - http://css-tricks.com/snippets/jquery/smooth-scrolling/
///////////////////////////////////////
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

///////////////////////////////////////
//      inserts current year
///////////////////////////////////////
$('.js-year').html(new Date().getFullYear());

///////////////////////////////////////
//      detects touch device
///////////////////////////////////////
if ("ontouchstart" in document.documentElement){
  $('html').addClass('touch');
}

///////////////////////////////////////
//      SVG image swap
///////////////////////////////////////

  // finds image with class and swaps .png with .svg in img source string
  if (Modernizr.svgasimg) {
    var svgSwap = $('img.js-svg-swap');
    svgSwap.each( function() {
      var currentSrc = $(this).attr('src'),
          newSrc = currentSrc.replace('.png', '.svg');
      $(this).attr('src', newSrc);
    });
  }

///////////////////////////////////////
//        Navigation
///////////////////////////////////////

// mobile nav toggle open & close
$('.js-toggle-mobile-nav').on('click', function(e) {
  $('.mobile-nav').toggleClass('is-open').toggleClass('is-closed');
});

// current page nav highlight
var currentPage = $('body').data('current-page');

// add class to individual nav item
$('[class*=nav__item--' + currentPage + ']').addClass('is-current');



///////////////////////////////////////
//      Sticky microsite nav
///////////////////////////////////////

function stickNav(){
  var st        = $(document).scrollTop();
  var nav       = $('.banner__nav');
  var navHeight = nav.outerHeight();
  var distance  = $('.banner').outerHeight() - navHeight;

  if( st > distance ){
    nav.addClass('is-stuck');
  }else{
    nav.removeClass('is-stuck');
  }
}
$(document).ready(function() { stickNav(); });
$(document).scroll(function() { stickNav(); });