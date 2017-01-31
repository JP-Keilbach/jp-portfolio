// Load Twitter Icon
// ------------------
var twitter = Snap("#icon-twitter"), iconTwitter; // This will use an existing svg element (not a div)

Snap.load('themes/custom/jptheme/assets/images/icon-twitter.svg', function (response) {
    iconTwitter = response;
    twitter.append(iconTwitter);
    initialiseTwitter();
});

initialiseTwitter = function() {

    twitter.attr({fill: '#4d4d4d'});

    // Put segments in place
    var st1 = twitter.select('#segment-twitter-1');
    var st2 = twitter.select('#segment-twitter-2');
    var st3 = twitter.select('#segment-twitter-3');
    var st4 = twitter.select('#segment-twitter-4');
    var st5 = twitter.select('#segment-twitter-5');
    var st6 = twitter.select('#segment-twitter-6');
    var twitterSymbol = twitter.select('#twitter-symbol');

    // Fill everything in
    twitter.attr({fill: '#4d4d4d'})

    // Set animating to true
    var animating = true;

    // Begin animation when mouse enters element
    function twitterAnimOn() {

        if (animating) {

            // Animating one after another
            // ---------------------------
            setTimeout(function () {
                twitterSymbol.animate({
                    fill:'#fcc911'
                }, 200);
            }, 0);

            setTimeout(function () {
                st1.stop().animate({
                    fill:'#fcc911'
                }, 200, function () { st1.animate({fill: '#4d4d4d'}, 500)});
            }, 0);

            setTimeout(function () {
                st2.stop().animate({
                    fill:'#fcc911'
                }, 200, function () { st2.animate({fill: '#4d4d4d'}, 500)});
            }, 200);

            setTimeout(function () {
                st3.stop().animate({
                    fill:'#fcc911'
                }, 200, function () { st3.animate({fill: '#4d4d4d'}, 500)});
            }, 400);

            setTimeout(function () {
                st4.stop().animate({
                    fill:'#fcc911'
                }, 200, function () { st4.animate({fill: '#4d4d4d'}, 500)});
            }, 600);

            setTimeout(function () {
                st5.stop().animate({
                    fill:'#fcc911'
                }, 200, function () { st5.animate({fill: '#4d4d4d'}, 500)});
            }, 800);

            setTimeout(function () {
                st6.stop().animate({
                    fill:'#fcc911'
                }, 200, function () { st6.animate({fill: '#4d4d4d'}, 500, twitterAnimOn)});
            }, 1000);
        }
    }

    // Kicks in when mouse leave element
    function twitterAnimOut() {

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
    $('#icon-twitter-link').hover(function () {animating = true; twitterAnimOn()}, function () {animating = false; twitterAnimOut()});

}