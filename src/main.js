import './styles.scss';

$(() => {
    $('.slider').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '5rem',
        prevArrow: '.slider-buttons__prev',
        nextArrow: '.slider-buttons__next',
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                centerPadding: '5rem',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1024,
              settings: {
                centerPadding: '2.5rem',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: '1rem',
                slidesToShow: 1
              }
            }
          ]
    });
});