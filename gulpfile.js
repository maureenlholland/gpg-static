'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');

gulp.task('sass', async function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/css/'));
});
