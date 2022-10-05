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
    nextArrow: '<button type="button" class="slick__btn slick__btn--next"></button>'
  });
});

$(function () {
  $('.question__question').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('question__question--active');
  });

  $('.portfolio__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick__btn slick__btn--prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick__btn--next"></button>'
  });
});


var portfolioSlick = $('.portfolio__info-slider').slick({
  dots: true,
  arrows: false,
  fade: true,
});

$(function () {
  $('.portfolio__link').magnificPopup({
    type: 'inline',

    callbacks: {
      open: function () {
        portfolioSlick.slick("reinit");
      },
    }
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
 arrows: false
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


// $(function () {  
//   $('.about__reviews-slider').slick({
//     // fade: true,
//  arrows: true,
//     appendArrows: $('.slider-arrows'),
//     prevArrow: '<button type="button" class="slick__btn slick__btn--prev"></button>',
//     nextArrow: '<button type="button" class="slick__btn slick__btn--next"></button>',
    
//   });

//   $('.about__reviews-slider').magnificPopup({
//     delegate: '.about__reviews-link',
//     type: 'inline'
//     });
// });



$(function () {  
  $('.about__certificates-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick__btn slick__btn--prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick__btn--next"></button>'
  });
});

