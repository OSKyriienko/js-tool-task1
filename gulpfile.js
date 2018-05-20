const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
const copy = require('gulp-copy');
const concat = require('gulp-concat');
//const uglify = require('gulp-uglify');
const uglify = require('gulp-uglify-es').default;  //for es6
//const pump = require('pump');
const del = require('del');
const livereload = require('gulp-livereload');

gulp.task('eslint',function() {
  return gulp.src('./js/*.js')
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(gulp.dest('./dest_js'))

});

gulp.task('sass',function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dest_css'))
});

gulp.task('copy',function() {
    return gulp.src(['./dest_css/**/*','./dest_js/**/*'])
        .pipe(gulp.dest('./dest_copy'))
});

gulp.task('concat',function() {
    return gulp.src('./dest_js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dest_concat'))
});

gulp.task('compress', function () {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dest_uglify'));
});

/*gulp.task('uglify', function (cb) {     //Show exact location of the error
    pump([
            gulp.src('./js/task1_moment.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});
*/

gulp.task('del', function () {
    return del(['./dest_copy/*.js']);
});

gulp.task('live', function () {
    livereload.listen();
    gulp.watch('./js/*.js',['eslint']).on('change', livereload.changed);
});

gulp.task('prod', ['delProd', 'copyProd', 'copyIndex','minifyProd','concatProd']);

gulp.task('delProd', function () {
    return del(['./prod']);
});

gulp.task('copyProd',function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./prod'))
});

gulp.task('copyIndex',function() {
    return gulp.src('./dest_css/*.css')
        .pipe(gulp.dest('./prod/css'))
});

gulp.task('minifyProd',function() {
    //return gulp.src(['./**/*.js','!node_modules*/**/*.js','./node_modules/jquery/dist/*.js','./node_modules/lodash/*.js','./node_modules/numeral/*.js','./node_modules/moment/*.js','!./gulpfile.js'])
    return gulp.src(['./js/*.js','./node_modules/jquery/dist/*.js','./node_modules/lodash/*.js','./node_modules/numeral/*.js','./node_modules/moment/*.js','!./gulpfile.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dest_uglify'));
});

gulp.task('concatProd',function () {
    return gulp.src('./dest_uglify/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./prod/js'))
});