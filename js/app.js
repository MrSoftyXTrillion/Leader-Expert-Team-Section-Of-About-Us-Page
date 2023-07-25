$('.slickSliderAnimate').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.leftArrow',
    nextArrow: '.rightArrow',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });