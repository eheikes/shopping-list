/* jshint node:true */
'use strict';

var path        = require('path');
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var concat      = require('gulp-concat');
var connect     = require('gulp-connect');
var ghPages     = require('gulp-gh-pages');
var jshint      = require('gulp-jshint');
var minifyCss   = require('gulp-minify-css');
var ngTemplate  = require('gulp-angular-templatecache');
var uglify      = require('gulp-uglify');
var usemin      = require('gulp-usemin');
var del         = require('del');

var tempFolder  = './.tmp/';
var buildFolder = './dist/';

gulp.task('clean', function(done) {
  del([tempFolder, buildFolder], done);
});

gulp.task('lint', function() {
  return gulp.src([
    'gulpfile.js',
    'app/*.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('copy:fonts', function() {
  return gulp.src('bower_components/bootstrap/fonts/**')
    .pipe(gulp.dest(path.join(buildFolder, 'fonts')))
    .pipe(connect.reload());
});

gulp.task('copy:index', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest(buildFolder))
    .pipe(connect.reload());
});

gulp.task('minify:js', function() {
  return gulp.src(path.join(buildFolder, 'js', 'app.js'))
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(gulp.dest(path.join(buildFolder, 'js')))
    .pipe(connect.reload());
});

gulp.task('minify:css', function() {
  return gulp.src(path.join(buildFolder, 'css', 'app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(path.join(buildFolder, 'css')))
    .pipe(connect.reload());
});

gulp.task('ngtemplates', function() {
  return gulp.src('app/partials/*.html')
    .pipe(ngTemplate({
      module: 'shoppingList',
      filename: 'templates.js'
    }))
    .pipe(gulp.dest(tempFolder));
});

gulp.task('usemin', function () {
  return gulp.src('app/index.html')
      .pipe(usemin())
      .pipe(gulp.dest(buildFolder))
      .pipe(connect.reload());
});

gulp.task('build', function(done) {
  runSequence(
    'clean',
    'ngtemplates',
    ['usemin', 'copy:fonts', 'copy:index'],
    done
  );
});

gulp.task('optimize', ['build'], function(done) {
  runSequence(['minify:js', 'minify:css'], done);
});

gulp.task('publish', ['optimize'], function() {
  return gulp.src(path.join(buildFolder, '**/*'))
    .pipe(ghPages());
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8000,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch([
    'gulpfile.js',
    'app/*.js'
  ], ['lint']);
  gulp.watch([
    'gulpfile.js',
    'app/**/*'
  ], ['build']);
});

gulp.task('default', function(done) {
  runSequence(['lint', 'build'], ['connect', 'watch'], done);
});
