
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
        // variableWidth: true,
        // centerMode: true,
        // centerPadding: '',
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

    // Snap
    // --------------------------------
    var s = Snap("#icon-facebook"), iconFacebook; // This will use an existing svg element (not a div)

    Snap.load('themes/custom/jptheme/assets/images/icon-facebook.svg', function (response) {
        iconFacebook = response;
        s.append(iconFacebook);
        initialise();
    });

    initialise = function() {

        // Work in progress v1
        // -------------------

        var s1 = s.select('#s1');
        var s2 = s.select('#s2');
        var s3 = s.select('#s3');
        var s4 = s.select('#s4');
        var s5 = s.select('#s5');
        var s6 = s.select('#s6');
        var facebook = s.select('#facebook');
        // console.log(s1 + s2);

        s.attr({ fill: '#4d4d4d'});

        var outerSegments = s.select('#outer-segments');
        console.log(outerSegments);

        var animating = true;

        var a = ["a", "b", "c"];


        function animOn() {

            var sg = s.group(s1, s2, s3, s4, s5, s6);

            if(animating) {
                outerSegments.animate({
                    fill: '#fcc911'
                }, 200, animOut);
            }
        }

        function animOut() {
            outerSegments.animate({
                fill: '#4d4d4d'
            }, 200, animOn);
        };

        s.hover(function() { animating=true; animOn() }, function() { animating=false });


        // Work in progress
        // ----------------
        /*
        function changeColor(curNumber){
            var curNumber = 0;
            curNumber++;

            if(curNumber > 6) {
               curNumber = 1;
            }

            s.select('#s' + curNumber).attr({ fill: "#fcc911" });
            // document.getElementById('s' + curNumber).setAttribute('class', 'active-segment');
            setTimeout(function(){changeColor(curNumber)}, 2000);
        }

        function resetSVG() {
            // something here to reset SVG??
            s.select('#s' + curNumber).attr({ fill: "red" });
            console.log(s.select('#s2'));
        }

        startSeg.mouseover(changeColor,resetSVG);
        */

    };

}(jQuery));

