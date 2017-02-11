(function($) {

    /**
     * --------------------------------
     * Load Snap animated Submit Button
     * --------------------------------
     */

    var sSubmit = Snap("#submit"), btnSubmit; // This will use an existing svg element (not a div)

    if (sSubmit) {

        /** Change submit button (input) in contact form **/
        var submitinput = document.getElementById("edit-submit");
        var submitbtn = document.getElementById("button-submit");
        submitinput.parentNode.replaceChild(submitbtn, submitinput);

        Snap.load(Drupal.myBasePath + 'themes/custom/jptheme/assets/images/button-submit.svg', function (response) {
            btnSubmit = response;
            sSubmit.append(btnSubmit);
            initialiseSubmit();
        });
    }


    initialiseSubmit = function() {

        /** Put segments in place & group them **/
        var segmentSub1 = sSubmit.select('#segment-1');
        var segmentSub2 = sSubmit.select('#segment-2');
        var segmentSub3 = sSubmit.select('#segment-3');
        var segmentSub4 = sSubmit.select('#segment-4');
        var segmentSub5 = sSubmit.select('#segment-5');
        var segmentSub6 = sSubmit.select('#segment-6');
        // var segmentGroup = sSubmit.group(segmentSub2, segmentSub5);
        // var segmentGroupLeft = sSubmit.group(segmentSub1, segmentSub3);
        // var segmentGroupRight = sSubmit.group(segmentSub4, segmentSub6);

        var sendSignal = sSubmit.select('#typo');
        var background = sSubmit.select('.background');
        var stroke = sSubmit.select('.stroke');

        /** Fill everything in **/
        sSubmit.attr({fill: '#2e2e2e'});
        stroke.attr({fill: '#4d4d4d'});
        background.attr({fill: '#fefefe'});
        sendSignal.attr({fill: '#4d4d4d'});

        /** Set animating to true **/
        var animating = true;

        /** Begin animation and loop **/
        function animOnButton() {

            if (animating) {

                segmentSub2.stop().animate({
                    transform: 't-5,0 r0',
                    fill: '#fcc911'
                }, 500);

                segmentSub5.stop().animate({
                    transform: 't5,0 r0',
                    fill: '#fcc911'
                }, 500);

                stroke.stop().animate({
                    fill: '#2e2e2e'
                }, 0);

                background.stop().animate({
                    fill: '#2e2e2e'
                }, 0);

                sendSignal.animate({
                    fill:'#fefefe'
                }, 0);
            }
        }

        /** Kicks in when mouse leaves element **/
        function animOutButton() {

            sendSignal.animate({
                fill:'#4d4d4d'
            }, 500);

            stroke.stop().animate({
                fill: '#4d4d4d'
            }, 0);

            background.stop().animate({
                fill: '#fefefe'
            }, 500);

            segmentSub2.stop().animate({
                transform: 't0,0 r0',
                fill: '#2e2e2e'
            }, 500);

            segmentSub5.stop().animate({
                transform: 't0,0 r0',
                fill: '#2e2e2e'
            }, 500);
        }

        /** Trigger animation on hover. Set animating to false by mouseleave. Animation stops. **/
        $('#button-submit').hover(function () {animating = true; animOnButton()}, function () {animating = false; animOutButton()});

    }

}(jQuery));