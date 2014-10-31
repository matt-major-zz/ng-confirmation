var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');

gulp.task('js:min', function() {

    gulp.src('lib/ng-confirmation.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))

});

gulp.task('build', ['js:min']);