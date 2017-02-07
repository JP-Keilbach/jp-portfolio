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

/**
 * --------------------------------
 * Load Snap animated Submit Button
 * --------------------------------
 */

/** Change submit button (input) in contact form **/
var submitinput = document.getElementById("edit-submit");
var submitbtn = document.getElementById("button-submit");
submitinput.parentNode.replaceChild(submitbtn, submitinput);

var sSubmit = Snap("#submit"), btnSubmit; // This will use an existing svg element (not a div)

Snap.load('themes/custom/jptheme/assets/images/button-submit.svg', function (response) {
    btnSubmit = response;
    sSubmit.append(btnSubmit);
    initialiseSubmit();
});

initialiseSubmit = function() {

    /** Put segments in place & group them **/
    var segmentSub1 = sSubmit.select('#segment-1');
    var segmentSub2 = sSubmit.select('#segment-2');
    var segmentSub3 = sSubmit.select('#segment-3');
    var segmentSub4 = sSubmit.select('#segment-4');
    var segmentSub5 = sSubmit.select('#segment-5');
    var segmentSub6 = sSubmit.select('#segment-6');
    var segmentGroup = sSubmit.group(segmentSub2, segmentSub5);

    var sendSignal = sSubmit.select('#typo');
    var background = sSubmit.select('.background');
    var stroke = sSubmit.select('.stroke');



    /** Fill everything in **/
    sSubmit.attr({fill: '#4d4d4d'});
    background.attr({fill: '#fefefe'});
    sendSignal.attr({fill: '#4d4d4d'});

    /** Set animating to true **/
    var animating = true;

    /** Begin animation and loop **/
    function animOnButton() {

        if (animating) {

            setTimeout(function () {

            }, 0);

            setTimeout(function () {
                segmentSub2.stop().animate({
                    transform: 't-5,0 r0',
                    opacity: '0'
                }, 500, function () { segmentSub2.animate({
                    transform: 't0,0 r0',
                    opacity: '1'
                }, 0, animOnButton)});

                segmentSub5.stop().animate({
                    transform: 't5,0 r0',
                    opacity: '0'
                }, 500, function () { segmentSub5.animate({
                    transform: 't0,0 r0',
                    opacity: '1'
                }, 0, animOnButton)});

                background.stop().animate({
                    fill: '2e2e2e'
                }, 0);

                sendSignal.animate({
                    fill:'#fcc911'
                }, 0);

            }, 0);
        }
    }

    /** Kicks in when mouse leaves element **/
    function animOutButton() {

        setTimeout(function () {
            sendSignal.animate({
                fill:'#4d4d4d'
            }, 500);

            background.stop().animate({
                fill: '#fefefe'
            }, 500);
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

    /** Trigger animation on hover. Set animating to false by mouseleave. Animation stops. **/
    $('#button-submit').hover(function () {animating = true; animOnButton()}, function () {animating = false; animOutButton()});

}