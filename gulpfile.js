var gulp = require('gulp'); // npm install gulp
var sass = require('gulp-sass'); // npm install gulp-sass
var watch = require('gulp-watch'); //npm install gulp-watch
var browserify = require('gulp-browserify') // npm install gulp-browserify
var babel = require('gulp-babel'); // npm install gulp-babel babel-preset-es201
// SPECIFYING DEPENDENCIES
gulp.task('default', ['html', 'css'])

// SASS TO CSS
gulp.task('css', function (){
  gulp.src('./sass/styles.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public'))
});

// HTML
gulp.task('html', function () {
    // gulp.src('./templates/*.html').pipe(gulp.dest('./public/templates'));

    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

// JS
// gulp.task('js', function(){
//   gulp.src('./js/*.js')
//     .pipe(browserify())
//     .pipe(babel({
//       presets: ['es2015']
//       }))
//     .pipe(gulp.dest('./public'))
// });

// WATCH CHANGES
gulp.task('watch', function () {
    // gulp.watch('./js/*.js', ['js']);
    // gulp.watch('./js/*/*.js', ['js']);
    gulp.watch('./sass/*.scss', ['css']);
    gulp.watch('./index.html', ['html']);
    // gulp.watch('./templates/*.html', ['html']);
});
