const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');


//JS
 function scriptJS(done){
  return gulp.src('./*.js')
  .pipe(babel({
    presets: ['@babel/preset-env']
  }))
  .pipe(gulp.dest('./public'))
  done();
 }


 //css
 function styleCSS(done){
  return gulp.src('./*.css')
  .pipe(sourcemaps.init())
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(cssmin())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./public'))
  done()
}

function liveServer(done){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
}


gulp.task('default', gulp.series(scriptJS, styleCSS))
gulp.task('serve', liveServer)
