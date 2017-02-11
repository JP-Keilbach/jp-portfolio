(function($, drupalSettings) {

    /** Set base path **/
    var baseUrl = Drupal.url.toAbsolute('/');
    Drupal.myBasePath = baseUrl;

    /** Make smooth scrolling possible **/
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

}(jQuery, drupalSettings));



