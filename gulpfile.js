var gulp = require('gulp');
var sass = require('gulp-sass');
var ccss = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gulpSequence = require('gulp-sequence')

gulp.task('styles', ['sass'])
gulp.task('scripts', ['minify-js'])

gulp.task('default', ['styles', 'scripts'], function() {
    gulp.watch('public/styles/scss/*.scss', ['styles']);
    gulp.watch('public/scripts/*.js', ['scripts']);
});

gulp.task('sass', function(){
  return gulp.src('public/styles/scss/*.scss')
    .pipe(sass())
    .pipe(ccss())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('public/dist/css'));
});

gulp.task('minify-css', () => {
  return gulp.src('public/styles/css/*.css')
    .pipe(ccss())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('public/dist/css'));
});

gulp.task('minify-js', () => {
  return gulp.src('public/scripts/*.js')
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('public/dist/js'));
});