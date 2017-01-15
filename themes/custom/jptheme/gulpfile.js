var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

var browserSync = require('browser-sync').create();

// Setting up the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        proxy: "http://jp-portfolio.dev"
    })
});

// Setting up the sass task
gulp.task('sass', function() {
  // Taking the path from the above objekt
  return gulp.src('scss/**/*.scss')
    //
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css')) // Output to destination folder
    .pipe(browserSync.reload({
        stream: true
    }))
});

// This is the default task - which is run when 'gulp' is run
// The tasks passed in as an array are run before the tasks within the funciton
gulp.task('watch', ['browserSync', 'sass'], function() {
  // Watch the files in the path object, and when there is a change, run the functions in the array
  gulp.watch(['scss/**/*.scss'], ['sass']);
  // gulp.watch(['scss/**/*.scss'], browserSync.reload);
});