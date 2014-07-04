var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    gulpexpress = require('./gulp-express.js');



gulp.task('express', function() {
  gulpexpress.serve({
    script: 'server.js',
    port: 8081
  });
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([ '1/**/*', '2/**/*', '3/**/*', '4/**/*', '5/**/*' ]).on('change', livereload.changed);

  gulp.watch('server.js', ['express']);
});

gulp.task('default', ['express', 'watch']);
