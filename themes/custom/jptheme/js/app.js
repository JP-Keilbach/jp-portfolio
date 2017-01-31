
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

    // Left navigation arrow
    $('.left').click(function(){
        $('.slick-portfolio').slick('slickPrev');
    });

    // Right navigation arrow
    $('.right').click(function(){
        $('.slick-portfolio').slick('slickNext');
    });

    // Change slick-dots position for Portfolio section
    $('.slick-portfolio>.slick-dots:parent').each(function () {
        $(this).insertBefore($(this).prev('.slick-portfolio>.slick-list'));
    });

    // Snap SVG
    // --------

    /**
     * ---------------------------------
     * Load Snap Animated Instagram Icon
     * ---------------------------------
     */
    var sInstagram = Snap("#icon-instagram"), iconInstagram; // This will use an existing svg element (not a div)

    Snap.load('themes/custom/jptheme/assets/images/icon-instagram.svg', function (response) {
        iconInstagram = response;
        sInstagram.append(iconInstagram);
        initialiseInstagram();
    });

    initialiseInstagram = function() {
        /**
         * Put segments in place & group them
         */
        var segmentI1 = sInstagram.select('#segment-instagram-1');
        var segmentI4 = sInstagram.select('#segment-instagram-4');
        var segmentGroupI = sInstagram.group(segmentI1, segmentI4);
        var instagramSymbol = sInstagram.select('#instagram-symbol');

        /** Fill everything in **/
        sInstagram.attr({fill: '#4d4d4d'});

        /** Set animating to true **/
        var animating = true;

        /** Begin animation and loop **/
        function animOnInstagram() {

            if (animating) {

                setTimeout(function () {
                    instagramSymbol.animate({
                        fill:'#fcc911'
                    }, 200);
                }, 0);

                setTimeout(function () {
                    segmentGroupI.stop().animate({
                        fill:'#fcc911'
                    }, 200, function () { segmentGroupI.animate({fill: '#4d4d4d'}, 500, animOnInstagram)});
                }, 0);
            }
        }

        /** Kicks in when mouse leaves element **/
        function animOutInstagram() {

            setTimeout(function () {
                instagramSymbol.animate({
                    fill:'#4d4d4d'
                }, 200);
            }, 0);
        }

        /**
         * Fills segment with certain color
         * @param segement: Snap object
         * @param color: Hex Sting
         * @param timer: Duration in ms
         * @param callback: function to call after completion
         */
        /* var resetColor = function (segment, color, timer, mina, callback) {
         if (segment && color && timer) {
         segment.animate({ fill: color }, timer, mina, callback);
         }
         }; */

        // Trigger animation on hover. Set animating to false by mouseleave. Animation stops.
        $('#icon-instagram-link').hover(function () {animating = true; animOnInstagram()}, function () {animating = false; animOutInstagram()});

    };


    /**
     * --------------------------------
     * Load Snap Animated Dribbble Icon
     * --------------------------------
     */
    var sDribbble = Snap("#icon-dribbble"), iconDribbble; // This will use an existing svg element (not a div)

    Snap.load('themes/custom/jptheme/assets/images/icon-dribbble.svg', function (response) {
        iconDribbble = response;
        sDribbble.append(iconDribbble);
        initialiseDribbble();
    });

    initialiseDribbble = function() {
        /**
         * Put segments in place & group them
         */
        var segmentD1 = sDribbble.select('#segment-dribbble-1');
        var segmentD4 = sDribbble.select('#segment-dribbble-4');
        var segmentGroupD = sDribbble.group(segmentD1, segmentD4);
        var dribbbleSymbol = sDribbble.select('#dribbble-symbol');

        /** Fill everything in **/
        sDribbble.attr({fill: '#4d4d4d'});

        /** Set animating to true **/
        var animating = true;

        /** Begin animation and loop **/
        function animOnDribbble() {

            if (animating) {

                setTimeout(function () {
                    dribbbleSymbol.animate({
                        fill:'#fcc911'
                    }, 200);
                }, 0);

                setTimeout(function () {
                    segmentGroupD.stop().animate({
                        fill:'#fcc911'
                    }, 200, function () { segmentGroupD.animate({fill: '#4d4d4d'}, 500, animOnDribbble)});
                }, 0);
            }
        }

        /** Kicks in when mouse leaves element **/
        function animOutDribbble() {

            setTimeout(function () {
                dribbbleSymbol.animate({
                    fill:'#4d4d4d'
                }, 200);
            }, 0);
        }

        /**
         * Fills segment with certain color
         * @param segement: Snap object
         * @param color: Hex Sting
         * @param timer: Duration in ms
         * @param callback: function to call after completion
         */
        /* var resetColor = function (segment, color, timer, mina, callback) {
         if (segment && color && timer) {
         segment.animate({ fill: color }, timer, mina, callback);
         }
         }; */

        // Trigger animation on hover. Set animating to false by mouseleave. Animation stops.
        $('#icon-dribbble-link').hover(function () {animating = true; animOnDribbble()}, function () {animating = false; animOutDribbble()});

    };


    /**
     * -------------------------------
     * Load Snap Animated Behance Icon
     * -------------------------------
     */
    var sBehance = Snap("#icon-behance"), iconBehance; // This will use an existing svg element (not a div)

    Snap.load('themes/custom/jptheme/assets/images/icon-behance.svg', function (response) {
        iconBehance = response;
        sBehance.append(iconBehance);
        initialiseBehance();
    });

    initialiseBehance = function() {
        /**
         * Put segments in place & group them
         */
        var segmentB1 = sBehance.select('#segment-behance-1');
        var segmentB4 = sBehance.select('#segment-behance-4');
        var segmentGroupB = sBehance.group(segmentB1, segmentB4);
        var behanceSymbol = sBehance.select('#behance-symbol');

        /** Fill everything in **/
        sBehance.attr({fill: '#4d4d4d'});

        /** Set animating to true **/
        var animating = true;

        /** Begin animation and loop **/
        function animOnBehance() {

            if (animating) {

                setTimeout(function () {
                    behanceSymbol.animate({
                        fill:'#fcc911'
                    }, 200);
                }, 0);

                setTimeout(function () {
                    segmentGroupB.stop().animate({
                        fill:'#fcc911'
                    }, 200, function () { segmentGroupB.animate({fill: '#4d4d4d'}, 500, animOnBehance)});
                }, 0);
            }
        }

        /** Kicks in when mouse leaves element **/
        function animOutBehance() {

            setTimeout(function () {
                behanceSymbol.animate({
                    fill:'#4d4d4d'
                }, 200);
            }, 0);
        }

        /**
         * Fills segment with certain color
         * @param segement: Snap object
         * @param color: Hex Sting
         * @param timer: Duration in ms
         * @param callback: function to call after completion
         */
        /* var resetColor = function (segment, color, timer, mina, callback) {
         if (segment && color && timer) {
         segment.animate({ fill: color }, timer, mina, callback);
         }
         }; */

        // Trigger animation on hover. Set animating to false by mouseleave. Animation stops.
        $('#icon-behance-link').hover(function () {animating = true; animOnBehance()}, function () {animating = false; animOutBehance()});

    };


    /**
     * --------------------------------
     * Load Snap Animated Facebook Icon
     * --------------------------------
     */
    var sFacebook = Snap("#icon-facebook"), iconFacebook; // This will use an existing svg element (not a div)

    Snap.load('themes/custom/jptheme/assets/images/icon-facebook.svg', function (response) {
        iconFacebook = response;
        sFacebook.append(iconFacebook);
        initialise();
    });

    initialise = function() {

        /**
         * Put segments in place & group them
         */
        var segmentF1 = sFacebook.select('#s1');
        var segmentF4 = sFacebook.select('#s4');
        var segmentGroupF = sFacebook.group(segmentF1, segmentF4);
        var facebookSymbol = sFacebook.select('#facebook-symbol');

        /** Fill everything in **/
        sFacebook.attr({fill: '#4d4d4d'});

        /** Set animating to true **/
        var animating = true;

        /** Begin animation and loop **/
        function animOn() {

            if (animating) {

                setTimeout(function () {
                    facebookSymbol.animate({
                        fill:'#fcc911'
                    }, 200);
                }, 0);

                setTimeout(function () {
                    segmentGroupF.stop().animate({
                        fill:'#fcc911'
                    }, 200, function () { segmentGroupF.animate({fill: '#4d4d4d'}, 500, animOn)});
                }, 0);
            }
        }

        /** Kicks in when mouse leaves element **/
        function animOut() {

            setTimeout(function () {
                facebookSymbol.animate({
                    fill:'#4d4d4d'
                }, 200);
            }, 0);
        }

        /**
         * Fills segment with certain color
         * @param segement: Snap object
         * @param color: Hex Sting
         * @param timer: Duration in ms
         * @param callback: function to call after completion
         */
        /* var resetColor = function (segment, color, timer, mina, callback) {
            if (segment && color && timer) {
                segment.animate({ fill: color }, timer, mina, callback);
            }
        }; */

        // Trigger animation on hover. Set animating to false by mouseleave. Animation stops.
        $('#icon-facebook-link').hover(function () {animating = true; animOn()}, function () {animating = false; animOut()});

    };


    /**
     * -------------------------------
     * Load Snap animated Twitter Icon
     * -------------------------------
     */
    var sTwitter = Snap("#icon-twitter"), iconTwitter; // This will use an existing svg element (not a div)

    Snap.load('themes/custom/jptheme/assets/images/icon-twitter.svg', function (response) {
        iconTwitter = response;
        sTwitter.append(iconTwitter);
        initialiseTwitter();
    });

    initialiseTwitter = function() {

        /**
         * Put segments in place & group them
         */
        var segmentT1 = sTwitter.select('#segment-twitter-1');
        var segmentT4 = sTwitter.select('#segment-twitter-4');
        var segmentGroupT = sTwitter.group(segmentT1, segmentT4);
        var twitterSymbol = sTwitter.select('#twitter-symbol');

        /** Fill everything in **/
        sTwitter.attr({fill: '#4d4d4d'});

        /** Set animating to true **/
        var animating = true;

        /** Begin animation and loop **/
        function animOnTwitter() {

            if (animating) {

                setTimeout(function () {
                    twitterSymbol.animate({
                        fill:'#fcc911'
                    }, 200);
                }, 0);

                setTimeout(function () {
                    segmentGroupT.stop().animate({
                        fill:'#fcc911'
                    }, 200, function () { segmentGroupT.animate({fill: '#4d4d4d'}, 500, animOnTwitter)});
                }, 0);
            }
        }

        /** Kicks in when mouse leaves element **/
        function animOutTwitter() {

            setTimeout(function () {
                twitterSymbol.animate({
                    fill:'#4d4d4d'
                }, 200);
            }, 0);
        }

        /**
         * Fills segment with certain color
         * @param segement: Snap object
         * @param color: Hex Sting
         * @param timer: Duration in ms
         * @param callback: function to call after completion
         */
        /* var resetColor = function (segment, color, timer, mina, callback) {
         if (segment && color && timer) {
         segment.animate({ fill: color }, timer, mina, callback);
         }
         }; */

        // Trigger animation on hover. Set animating to false by mouseleave. Animation stops.
        $('#icon-twitter-link').hover(function () {animating = true; animOnTwitter()}, function () {animating = false; animOutTwitter()});

    }

}(jQuery));

