
(function($) {
    $(document).foundation();

    $('.slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.slick-hero').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 2000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.slick-portfolio').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.left').click(function(){
        $('.slick-portfolio').slick('slickPrev');
    });

    $('.right').click(function(){
        $('.slick-portfolio').slick('slickNext');
    });

    // Change slick-dots position for Portfolio section
    $('.slick-portfolio>.slick-dots:parent').each(function () {
        $(this).insertBefore($(this).prev('.slick-portfolio>.slick-list'));
    });




}(jQuery));

