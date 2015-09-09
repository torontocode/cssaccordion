'use strict';
var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function() {
  return gulp.watch('app/**/*', function(){
    livereload.listen({port:35728});
    gulp.src(['app/**/*'])
      .pipe(livereload());
  });
});



gulp.task('default', []);