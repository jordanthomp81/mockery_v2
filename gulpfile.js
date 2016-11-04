var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var svgmin = require('gulp-svgmin');

gulp.task('app_scripts', function() {
  return gulp.src(['static/app/src/js/*.js'])
    .pipe(concat('core.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/app/dist/js'));
});

gulp.task('landing_scripts', function() {
  return gulp.src(['static/landing/src/js/*.js'])
    .pipe(concat('core.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/landing/dist/js'));
});

gulp.task('app_styles', function() {
  return gulp.src('static/app/src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('static/app/dist/css/'));
});

gulp.task('landing_styles', function() {
  return gulp.src('static/landing/src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('static/landing/dist/css/'));
});

gulp.task('app_images', function() {
  return gulp.src('static/app/src/img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
          {removeViewBox: false},
          {cleanupIDs: false}
      ],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('static/app/dist/img'));
});

gulp.task('landing_images', function() {
  return gulp.src('static/landing/src/img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
          {removeViewBox: false},
          {cleanupIDs: false}
      ],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('static/landing/dist/img'));
});

gulp.task('app_svg', function () {
  return gulp.src('static/app/src/inc/vectors/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('static/app/dist/inc/vectors'));
});

gulp.task('landing_svg', function () {
  return gulp.src('static/landing/src/inc/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('static/landing/dist/inc'));
});

gulp.task('app_watch', function() {
  gulp.watch(['static/app/src/scss/*.scss'], ['app_scripts', 'app_styles', 'app_images', 'app_svg'])
});

gulp.task('landing_watch', function() {
  gulp.watch(['static/landing/src/scss/*.scss'], ['scripts', 'styles', 'images', 'svg'])
});

gulp.task('landing_fonts', function() {
	return gulp.src('static/landing/src/scss/fonts/**/*.{ttf,woff,woff2,eof,svg}')
	.pipe(gulp.dest('static/landing/dist/css/fonts'));
});

gulp.task('default', ['app_scripts', 'landing_scripts', 'app_styles', 'landing_styles', 'app_images', 'landing_images', 'app_svg', 'landing_svg', 'app_watch', 'landing_watch', 'landing_fonts']);

gulp.on('stop', function () {
  process.nextTick(function () {
    process.exit(0);
  });
});
