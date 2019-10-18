$('.slider_single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
   useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider_nav')
    .on('init', function(event, slick) {
        $('.slider_nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
           }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
       }
        }]
    });

$('.slider_single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider_nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider_nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider_nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider_nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider_single').slick('slickGoTo', goToSingleSlide);
});


// slider multiple-items homepage
$('.multiple_items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});