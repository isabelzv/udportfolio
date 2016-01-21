// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var gp_jshint = require('gulp-jshint');
var gp_html5Lint = require('gulp-html5-lint');
var gp_csslint = require('gulp-csslint');

var gp_concat = require('gulp-concat');
var gp_uglify = require('gulp-uglify');
var gp_rename = require('gulp-rename');
var gp_sourcemaps = require('gulp-sourcemaps');
var gp_imagemin = require('gulp-imagemin');
var gp_htmlmin = require('gulp-htmlmin');
var pngquant = require('imagemin-pngquant');
var gp_csso = require('gulp-csso');


// Lint Tasks
gulp.task('lint_js', function() {
    return gulp.src(['src/js/*.js', 'src/views/js/*.js'])
        .pipe(gp_jshint())
        .pipe(gp_jshint.reporter('default'));
});

gulp.task('lint_html', function() {
    return gulp.src(['/src/*.html', 'src/views/*.html'])
        .pipe(gp_html5Lint());
});

gulp.task('lint_css', function() {
  gulp.src(['src/css/*.css', 'src/views/css/*.css'])
    .pipe(gp_csslint())
    .pipe(gp_csslint.reporter());
});

gulp.task('lint', ['lint_html', 'lint_js', 'lint_css'])

// Minify Tasks
gulp.task('minify_js', function(){
    return gulp.src('src/js/*.js')
        .pipe(gp_sourcemaps.init())
        // .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist/js'))
        // .pipe(gp_rename('uglify.js'))
        .pipe(gp_uglify())
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minify_views_js', function(){
    return gulp.src('src/views/js/*.js')
        .pipe(gp_sourcemaps.init())
        // .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist/views/js'))
        // .pipe(gp_rename('uglify.js'))
        .pipe(gp_uglify())
        .pipe(gp_sourcemaps.write('./'))
        .pipe(gulp.dest('dist/views/js'));
});

gulp.task('minify_html', function() {
  return gulp.src('src/*.html')
    .pipe(gp_htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('minify_views_html', function() {
  return gulp.src('src/views/*.html')
    .pipe(gp_htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'))
});

gulp.task('minify_css', function () {
    return gulp.src('src/css/*.css')
        .pipe(gp_csso())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('minify_views_css', function () {
    return gulp.src('src/views/css/*.css')
        .pipe(gp_csso())
        .pipe(gulp.dest('dist/views/css'));
});

gulp.task('minify_images', function () {
    return gulp.src('src/img/*')
        .pipe(gp_imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('minify_views_images', function () {
    return gulp.src('src/views/images/*')
        .pipe(gp_imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/views/images'));
});

// Default Task
gulp.task('default', ['minify_js','minify_views_js','minify_images', 'minify_views_images', 'minify_html', 'minify_views_html', 'minify_css', 'minify_views_css']);
