var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    gulpexpress = require('./gulp-express.js'),
    karma = require('gulp-karma');



gulp.task('express', function() {
  gulpexpress.serve({
    script: 'server.js',
    port: 3000
  });
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([ '1/**/*', '2/**/*', '3/**/*', '4/**/*', '5/**/*' ]).on('change', livereload.changed);

  gulp.watch('server.js', ['express']);
});

gulp.task('test', function() {
  return gulp.src([ '__dummy__'])
    .pipe(karma({
      configFile: './5/ng-airline.conf',
      action: 'watch'
    }));
});

gulp.task('default', ['express', 'watch']);
gulp.task('dev', ['express', 'test', 'watch']);
