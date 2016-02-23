var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var del = require('del');

gulp.task('clean', function () {
  del('dist');
})

gulp.task('js', function () {
  gulp.src('src/js/**/*')
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.babel())
    .pipe(plugins.concat('app.js'))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('scss', function () {
  gulp.src('src/scss/**/*')
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.concat('app.css'))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream({match: '**/*.css'}))
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('src/js/**/*', ['js'])
  gulp.watch('src/scss/**/*', ['scss'])
  gulp.watch('index.html').on('change', browserSync.reload);
});


gulp.task('default', ['clean', 'js', 'scss', 'browser-sync']);