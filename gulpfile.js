'use strict';

var gulp = require('gulp');
var server = require('browser-sync').create();
var del = require('del');
var minify = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");
var run = require('run-sequence');
var ghPages = require('gulp-gh-pages');

gulp.task('serve', function () {
  server.init({
    server: 'build/',
    notify: false
  });

  gulp.watch('js/*.js', ['js:update']);
});

gulp.task('copy', function () {
  pump([
    gulp.src([
      'fonts/**/*.{woff, woff2}',
      'img/**',
      'photos/**',
      'js/**',
      'css/**',
      '*.html'
    ], {
      base: '.'
    }),
    gulp.dest('build')
  ]);
});

gulp.task('cssmin', function () {
  pump([
    gulp.src('css/style.css'),
    minify(),
    rename('style.min.css'),
    gulp.dest('build/css'),
  ]);
});

gulp.task('js:copy', function () {
  pump([
    gulp.src('js/**.js'),
    gulp.dest('build/js')
  ]);
});

gulp.task('js:update', ['js:copy', 'compress'], function (done) {
  server.reload();
  done();
});

gulp.task('compress', function (callback) {
  pump([
    gulp.src('js/*.js'),
    uglify(),
    rename({suffix: '.min'}),
    gulp.dest('build/js'),
  ],
      callback
  );
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('deploy', function () {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});

gulp.task('build', function (callback) {
  run(
      'clean',
      'copy',
      'cssmin',
      'compress',
      callback
  );
});
