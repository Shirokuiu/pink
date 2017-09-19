$(function () {
  $("#reviewsSlider").owlCarousel({
    loop:true,
    margin:0,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive:{
      0:{
        items: 1,
        smartSpeed: 1000,
        autoplay: true
      },
      600:{
        items: 1,
        smartSpeed: 1000,
        autoplay: true
      },
      940:{
        items: 1,
        smartSpeed: 1000,
        autoplay: true
      },
      1000:{
        items: 1,
        smartSpeed: 10
      }
    }
  });
  
  var pageHeaderRowTop = $('#pageHeaderRowTop');
  var mainNavButton = $('#mainNavButton');
  var mainNav = $('#mainNav');
  var mainNavList = $('#mainNavList');
  
  mainNavButton.click(function () {
    $(this).toggleClass('main-nav__button--open');
    pageHeaderRowTop.toggleClass('page-header__rowTop--open');
    mainNav.toggleClass('main-nav--open');
    mainNavList.toggleClass('main-nav__list--open');
  });
  
  if (window.matchMedia('(max-width: 610px)').matches) {
    $('.payment__slider').addClass('owl-carousel');
    $('#paymentSlider').owlCarousel({
      startPosition: 1,
      items: 1
    });
  };
  
  $('#mainForm').validate({
    rules: {
      userSurname: {
        required: true
        
      }
    }
  });
});