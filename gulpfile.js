const gulp = require('gulp');
const plumber = require('gulp-plumber');
const terser = require('gulp-terser');
const sass = require('gulp-sass')(require('sass'));
const wait = require('gulp-wait');
const rename = require('gulp-rename');

gulp.task('scripts', function() {
    return gulp.src('js/scripts.js')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(terser({
            format: {
                comments: /^!/
            }
        }))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('js'));
});

gulp.task('styles', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(wait(250))
        .pipe(sass.sync({
            outputStyle: 'compressed',
            silenceDeprecations: ['legacy-js-api']
        }).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('js/scripts.js', gulp.series('scripts'));
    gulp.watch('scss/styles.scss', gulp.series('styles'));
});

gulp.task('default', gulp.series('scripts', 'styles'));