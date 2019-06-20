const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const wait = require('gulp-wait');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', () => {
    return gulp.src('js/scripts.js')
        .pipe(plumber(plumber({
            errorHandler: err => {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('styles', () => {
    return gulp.src('./scss/styles.scss')
        .pipe(wait(250))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sketch', () => {
    return gulp.src('js/sketch.js')
        .pipe(plumber(plumber({
            errorHandler: err => {
                console.log(err);
                this.emit('end');
            }
        })))
        .pipe(uglify({
            output: {
                comments: '/^!/'
            }
        }))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', () => {
    gulp.watch('js/scripts.js', gulp.series('scripts'));
    gulp.watch('js/sketch.js', gulp.series('sketch'));
    gulp.watch('scss/styles.scss', gulp.series('styles'));
});