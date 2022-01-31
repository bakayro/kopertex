// var lazyLoadInstance = new LazyLoad({ });

/* HEADER Fixed after scrolling */
$(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 100) $("header").addClass('fixed');
    else $("header").removeClass('fixed');
});

/* SEARCH MODAL */
$(".header-right .search-btn").click(function () {
    $('.mobile-menu').removeClass('show-menu');
    $(".search-form").toggleClass("active");
});

$(".btn-close").click(function () {
    $(".search-form").removeClass("active");
});

$('.burger').click(function () {
    $(".search-form").removeClass("active");
    $('.mobile-menu').toggleClass('show-menu');
});

$('.main-page-slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                arrows: false
            }
        }
    ]
});


$('.main-page-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {

    $('.main-page-slider .slick-active img').addClass('zooming');
});

$('.counter').counterUp();

$('.team-slider').slick({
    infinite: true,
    dots: true,
    speed: 900,
    autoplaySpeed: 3500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.client-slider').slick({
    infinite: true,
    dots: true,
    speed: 900,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(".scroll-up").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 100);
    return false;
});

$(".anchor-link").click(function (e) {
    var data_scroll = $($(this).data("scroll"));
    $("html, body").animate({ scrollTop: data_scroll.offset().top }, "fast", "swing", function () { });
    return false;
});