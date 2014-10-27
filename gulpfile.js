var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');

gulp.task('build', function() {

    //Minify our JS...
    gulp.src('lib/ng-confirmation.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))

});
