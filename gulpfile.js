var gulp = require('gulp');
var resume = require('gulp-resume');
var rename = require('gulp-rename');

gulp.task('resume', function() {
    return gulp.src('en.json')
        .pipe(resume({
            format: 'html',
            theme: 'slick'
        }))
        .pipe(rename('en.html'))
        .pipe(gulp.dest('./output'));
});
