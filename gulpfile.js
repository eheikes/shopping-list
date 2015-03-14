/* jshint node:true */
'use strict';

var path        = require('path');
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var concat      = require('gulp-concat');
var ghPages     = require('gulp-gh-pages');
var jshint      = require('gulp-jshint');
var minifyCss   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');
var del         = require('del');

var buildFolder = './dist/';

gulp.task('clean', function(done) {
  del(buildFolder, done);
});

gulp.task('lint', function() {
  return gulp.src([
    'gulpfile.js',
    'app/*.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('concat:js', function() {
  return gulp.src([
    'bower_components/angular/angular.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-ui-select/dist/select.js',
    'bower_components/ng-group/src/ngGroup.js',
    'app/ShoppingListModule.js',
    'app/ShoppingListController.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(path.join(buildFolder, 'js')));
});

gulp.task('concat:css', function() {
  return gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.css',
    'bower_components/angular-ui-select/dist/select.css',
    'app/app.css'
  ])
    .pipe(concat('app.css'))
    .pipe(gulp.dest(path.join(buildFolder, 'css')));
});

gulp.task('copy:fonts', function() {
  return gulp.src('bower_components/bootstrap/fonts/**')
    .pipe(gulp.dest(path.join(buildFolder, 'fonts')));
});

gulp.task('copy:index', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest(buildFolder));
});

gulp.task('minify:js', function() {
  return gulp.src(path.join(buildFolder, 'js', 'app.js'))
    .pipe(uglify({
      mangle: false,
      preserveComments: 'some'
    }))
    .pipe(gulp.dest(path.join(buildFolder, 'js')));
});

gulp.task('minify:css', function() {
  return gulp.src(path.join(buildFolder, 'css', 'app.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(path.join(buildFolder, 'css')));
});

gulp.task('build', function(done) {
  runSequence(
    ['clean'],
    ['concat:js', 'concat:css', 'copy:fonts', 'copy:index'],
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

gulp.task('default', function(done) {
  runSequence(['lint', 'build'], done);
});
