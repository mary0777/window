$(function () {

  $('.measurements-link, .calculation-link').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
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

  $('.services__link').magnificPopup({
    type: 'inline',

    callbacks: {
      open: function () {
        $('.services__slider').slick({
          dots: true,
          arrows: false
        });
      },
    }
  });


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



  $('.contacts__textarea').styler();

  
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


  $('.portfolio__link').magnificPopup({
    type: 'inline',

    callbacks: {
      open: function () {
        $('.portfolio__info-slider').slick({
          dots: true,
          arrows: false,
          fade: true,
         
        });
      },
    }
  });


  $('.about__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.about__tabs-link').removeClass('about__tabs-link--active');
    $(this).addClass('about__tabs-link--active');

    $('.about__item').removeClass('about__item--active');
    $($(this).attr('href')).addClass('about__item--active');
  });


  
    $('.about__descr-popup').magnificPopup({
      // disableOn: 700,
      // type: 'iframe',
      // mainClass: 'mfp-fade',
      // removalDelay: 160,
      // preloader: false,
  
      // fixedContentPos: false
    });
  
  $('.about__certificates-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick__btn slick__btn--prev"></button>',
    nextArrow: '<button type="button" class="slick__btn slick__btn--next"></button>'
  });

  
 


  
});


