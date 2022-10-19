document.addEventListener('DOMContentLoaded', () => {

  const burgerOpen = document.querySelector('.burger--open');
  const burgerClose = document.querySelector('.burger--close');
  const mobileMenu = document.querySelector('.menu');
  const bodyLock = document.querySelector('body');


  burgerOpen.addEventListener('click', function (e) {
    mobileMenu.classList.add('menu--active');
    burgerClose.classList.add('burger--active');
    bodyLock.classList.add('lock');
  });

  burgerClose.addEventListener('click', function (e) {
    mobileMenu.classList.remove('menu--active');
    burgerClose.classList.remove('burger--active');
    bodyLock.classList.remove('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('lock')) {
      burgerClose.classList.remove('burger--active');
      mobileMenu.classList.remove('menu--active');
      bodyLock.classList.remove('lock');
    }
  });
});

$(document).ready(function () {
  $(".menu__link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 100;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
    $('.burger--close').removeClass('burger--active');
    $('.menu').removeClass('menu--active');
    $('body').removeClass('lock');
  });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
    $('.header').addClass('header--fixed');
  } else {
    $('.header').removeClass('header--fixed');
  }
});


$(function () {

  $('.measurements-link, .calculation-link').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
});

var serviceSlick = $('.services__slider').slick({
  dots: true,
  arrows: false
});

$(function () {
  $('.services__link').magnificPopup({
    type: 'inline',

    callbacks: {
      open: function () {
        serviceSlick.slick("refresh");
      },
    },
  });
});


$(function () {
  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');

    $('.product-content__item').removeClass('product-content__item--active');
    $($(this).attr('href')).addClass('product-content__item--active');
  });

  $('.product-slider').slick({
    fade: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick__btn slick__btn--prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick__btn--next"></button>',
    responsive: [{
      breakpoint: 993,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
});

$(function () {
  $('.question__question').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('question__question--active');
  });
});



$(function () {
  $('.portfolio__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick__btn slick__btn--prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick__btn--next"></button>',
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true
      }
    }]
  });

  var portfolioSlick = $('.portfolio__info-slider').slick({
    dots: true,
    arrows: false,
    fade: true
  });


  $('.portfolio__slider').magnificPopup({
    delegate: '.portfolio__link',
    type: 'inline',

    callbacks: {
      open: function () {
        portfolioSlick.slick("refresh");
      },
    }
  });

  portfolioSlick.magnificPopup({
    delegate: '.portfolio__measurements, .portfolio__calculation'
  });
});



$(function () {
  $('.about__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.about__tabs-link').removeClass('about__tabs-link--active');
    $(this).addClass('about__tabs-link--active');

    $('.about__item').removeClass('about__item--active');
    $($(this).attr('href')).addClass('about__item--active');
    $('.about__certificates-slider').slick("refresh");
    $('.about__reviews-slider').slick("refresh");
  });
});

$(function () {
  $('.about__reviews-slider').slick({
    fade: true,
    arrows: false,
    responsive: [{
      breakpoint: 993,
      settings: {
        dots: true
      }
    }]
  });

  $(document).on('click', '.slick-btn--next', function () {
    $('.about__reviews-slider').slick('slickNext');
  });

  $(document).on('click', '.slick-btn--prev', function () {
    $('.about__reviews-slider').slick('slickPrev');
  });

  $('.about__reviews-slider').magnificPopup({
    delegate: '.about__reviews-link',
    type: 'inline'
  });
});


$(function () {
  $('.about__certificates-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<button type="button" class="slick__btn slick__btn--prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick__btn--next"></button>',
    responsive: [{
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          arrows: false,
          dots: true
        }
      }
    ]
  });
});