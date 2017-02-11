(function($, drupalSettings) {

    var baseUrl = drupalSettings.path.baseUrl;
    // var baseUrl = Drupal.url.toAbsolute('/');
    // Drupal.myBasePath = baseUrl;

    // console.log('output base path: ' + Drupal.myBasePath);
    console.log('output base path: ' + baseUrl);

    /** Import smoth page scrolling **/
    $.getScript("/themes/custom/jptheme/js/global.js");

    /** Import slick configuration **/
    $.getScript("/themes/custom/jptheme/js/slick.js");

    /** Import snap animated icons **/
    $.getScript("/themes/custom/jptheme/js/snap-icons.js");

    /** Import snap animated buttons **/
    $.getScript("/themes/custom/jptheme/js/snap-buttons.js");

}(jQuery, drupalSettings));

