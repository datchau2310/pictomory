var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var useref = require('gulp-useref');

var gulpIf = require('gulp-if');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/sass/**/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

// gulp.task('useref', function(){
//   return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.js', uglify()))
//     .pipe(gulp.dest('dist'))
// });


// gulp.task('task-name', function(){
//     return gulp.src('source-file')  // Get source files with gulp.src
//         .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//         .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
// });