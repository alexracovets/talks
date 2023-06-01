// // SWIPER
Swiper({
    type: 'bouncer',
    pageName: 'aff_page',
    selectBack: false,
    loop: false,
    dev: false
});

// SLIDERS
$(document).ready(function () {
    $('.event-slider_me').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 300,
        centerMode: true,
        // autoplay: true,
        asNavFor: '.slider_dots1',

    });
    $('.slider_dots1').slick({
        infinite: true,
        slidesToShow: 9,
        asNavFor: '.event-slider_me',
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 7
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    });

    $('.arhive-slider_me').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        focusOnSelect: true,
        centerMode: true,
        asNavFor: '.slider_dots2',
        responsive: [{
            breakpoint: 1771,
            settings: {
                slidesToShow: 2
            }

        }]
    });
    $('.slider_dots2').slick({
        infinite: true,
        slidesToShow: 4,
        asNavFor: '.arhive-slider_me',
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        responsive: [{
            breakpoint: 720,
            settings: {
                slidesToShow: 5
            },
            breakpoint: 568,
            settings: {
                slidesToShow: 3
            }

        }]
    });
});


// BURGER
$(document).ready(function () {
    $(".menuToggle").click(function () {
        $(this).toggleClass("active");
        $('.menu').slideToggle(300, function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });
    $("nav.navigation ul li").click(function () {
        $('.menu').slideToggle(300, function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });
});