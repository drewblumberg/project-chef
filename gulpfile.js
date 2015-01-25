var gulp = require('gulp'),
    server = require('gulp-develop-server'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');

var options = {
  path: './server.js'
}

// Start server
gulp.task('server:start', function(){
  server.listen(options, livereload.listen);
});

// Sass compiler
gulp.task('sass', function(){
  gulp.src('./public/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'));
});

// Default gulp task
gulp.task('default', ['sass', 'server:start'], function(){
  function restart(file){
    server.changed(function(error) {
      if(!error) livereload.changed(file.path);
    });
  }

  gulp.watch(['./server.js', './public/views/*.jade']).on('change', restart);
  gulp.watch('./public/scss/*.scss', ['sass']).on('change', function(event){
    console.log('Sass compiled on ' + event.path);
  });
});
