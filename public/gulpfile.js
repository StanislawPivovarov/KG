"use strict";

var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');

var sourcemaps = require('gulp-sourcemaps');

var _require = require('gulp'),
    dest = _require.dest,
    series = _require.series;

var browserSync = require('browser-sync').create();

var babel = require('gulp-babel');

var fs = require("fs");

var babelify = require('babelify');

var _require2 = require('jquery'),
    css = _require2.css;

var cssmin = require('gulp-cssmin');

var rename = require('gulp-rename'); //JS


function scriptJS(done) {
  return gulp.src('./*.js').pipe(babel({
    presets: ['@babel/preset-env']
  })).pipe(gulp.dest('./public'));
  done();
} //css


function styleCSS(done) {
  return gulp.src('./*.css').pipe(sourcemaps.init()).pipe(autoprefixer({
    cascade: false
  })).pipe(cssmin()).pipe(rename({
    suffix: '.min'
  })).pipe(sourcemaps.write('./')).pipe(gulp.dest('./public'));
  done();
}

gulp.task('default', gulp.series(scriptJS, styleCSS));