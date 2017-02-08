(function($) {

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

    drupal_add_js(array('myModule' => array('basepath' => '<your-drupal-base-path>')), 'setting');

    var path = Drupal.settings.myModule.basepath;
    console.log(path);

    // var baseUrl = Drupal.settings.basePath;
    // console.log(baseUrl); // will be '/' if base URL isn't set


}(jQuery));



