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

    /**
     * ----------------------------------
     * Filtering Slick Slides by category
     * ----------------------------------
     * @type {boolean}
     */
    var filtered = false;

    /** All Filter **/
    $('.all-filters').on('click', function () {
        $('.active').removeClass('active');
        $('.all-filters').addClass('active');
        $('.slick-portfolio').slick('slickUnfilter');

        /** Move Dots on top of Slideshow **/
        $('.slick-portfolio>.slick-dots:parent').each(function () {
            $(this).insertBefore($(this).prev('.slick-portfolio>.slick-list'));
        });

        filtered = false;
    });

    /** Sites Filter **/
    $('.sites-filter').on('click', function () {
        $('.slick-portfolio').slick('slickUnfilter');
        $('.slick-portfolio').slick('slickFilter', '.sites');
        $('.active').removeClass('active');
        $('.sites-filter').addClass('active');

        /** Move Dots on top of Slideshow **/
        $('.slick-portfolio>.slick-dots:parent').each(function () {
            $(this).insertBefore($(this).prev('.slick-portfolio>.slick-list'));
        });

        filtered = true;
    });

    /** Logo Filter **/
    $('.logo-filter').on('click', function () {
        $('.slick-portfolio').slick('slickUnfilter');
        $('.slick-portfolio').slick('slickFilter', '.logo');
        $('.active').removeClass('active');
        $('.logo-filter').addClass('active');

        /** Move Dots on top of Slideshow **/
        $('.slick-portfolio>.slick-dots:parent').each(function () {
            $(this).insertBefore($(this).prev('.slick-portfolio>.slick-list'));
        });

        filtered = true;
    });

    /** Animation Filter **/
    $('.animation-filter').on('click', function () {
        $('.slick-portfolio').slick('slickUnfilter');
        $('.slick-portfolio').slick('slickFilter', '.animation');
        $('.active').removeClass('active');
        $('.animation-filter').addClass('active');

        /** Move Dots on top of Slideshow **/
        $('.slick-portfolio>.slick-dots:parent').each(function () {
            $(this).insertBefore($(this).prev('.slick-portfolio>.slick-list'));
        });

        filtered = true;
    });

    /** Left navigation arrow **/
    $('.left').click(function (){
        $('.slick-portfolio').slick('slickPrev');
    });

    /** Right navigation arrow **/
    $('.right').click(function (){
        $('.slick-portfolio').slick('slickNext');
    });

    /** Change slick-dots position for Portfolio section **/
    $('.slick-portfolio>.slick-dots:parent').each(function () {
        $(this).insertBefore($(this).prev('.slick-portfolio>.slick-list'));
    });

    /**
     * ------------------------------------
     * Load Snap animated Navigation Arrows
     * ------------------------------------
     */
    var sNavArrows = Snap("#nav-arrows"), navArrows; // This will use an existing svg element (not a div)

    Snap.load('themes/custom/jptheme/assets/images/slick-nav-arrows.svg', function (response) {
        navArrows = response;
        sNavArrows.append(navArrows);
        initialiseNavArrows();
    });

    initialiseNavArrows = function() {

        /** Put segments in place & group them **/
        var segmentSub3 = sNavArrows.select('#segment-3');
        var segmentSub6 = sNavArrows.select('#segment-6');
        var star = sNavArrows.select('#star');

        /** Fill everything in **/
        sNavArrows.attr({fill: '#2e2e2e'});

        /** Set animating to true **/
        var animating = true;

        /** Begin animation for left arrow **/
        function animOnArrowLeft() {

            if (animating) {

                segmentSub6.stop().animate({
                    fill: '#fcc911'
                }, 200);

                star.stop().animate({
                    fill: '#fcc911'
                }, 200);
            }
        }

        /** Begin animation for right arrow **/
        function animOnArrowRight() {

            if (animating) {

                segmentSub3.stop().animate({
                    fill: '#fcc911'
                }, 200);

                star.stop().animate({
                    fill: '#fcc911'
                }, 200);
            }
        }

        /** Kicks in when mouse leaves element **/
        function animOutArrows() {

            segmentSub6.stop().animate({
                fill: '#2e2e2e'
            }, 200);

            segmentSub3.stop().animate({
                fill: '#2e2e2e'
            }, 200);

            star.stop().animate({
                fill: '#4d4d4d'
            }, 200);
        }

        /** Trigger animation on hover. Set animating to false by mouseleave. Animation stops. **/
        $('.slick-arrows>.left').hover(function () {animating = true; animOnArrowLeft()}, function () {animating = false; animOutArrows()});
        $('.slick-arrows>.right').hover(function () {animating = true; animOnArrowRight()}, function () {animating = false; animOutArrows()});
    }

}(jQuery));