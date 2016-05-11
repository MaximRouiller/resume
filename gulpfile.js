var gulp = require('gulp');
var resume = require('gulp-resume');
var rename = require('gulp-rename');
var option = {
    format: 'html',
    theme: 'paper'
};

gulp.task('resume-en', function () {
    return gulp.src('en.json')
        .pipe(resume(option))
        .pipe(rename('en.html'))
        .pipe(gulp.dest('./output'));
});

gulp.task('resume-fr', function () {
    return gulp.src('fr.json')
        .pipe(resume(option))
        .pipe(rename('fr.html'))
        .pipe(gulp.dest('./output'));
});

gulp.task('default', ['resume-en', 'resume-fr']);
