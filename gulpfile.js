'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
var concat         = require('gulp-concat');

gulp.task('sass', async function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/css/'));
});

gulp.task('concat-sass', async function() {
    // ordered so file with theme var is top of concatenated file and solution2 has access to variables
    gulp.src(['assets/concat-sass/style.scss', 'assets/concat-sass/solution2.scss'])
        .pipe(concat('concatenated.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/css/'));
});
