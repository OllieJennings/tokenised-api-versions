var gulp = require('gulp');

gulp.task('date', function() {
  var currentDate = new Date().toISOString().split('T')[0];
  console.log(currentDate);
});


filesToMove = [
  'routes/**/*.js',
  '!routes/index.js',
  '!routes/versions/**/*.js',
  '!routes/keys.js'
];

gulp.task('versionDate', function() {
  var currentDate = new Date().toISOString().split('T')[0];
  currentDate = '2014-08-21';
  gulp.src(filesToMove, { base: './routes' })
  .pipe(gulp.dest('./routes/versions/' + currentDate));
});

gulp.task('versionTag', function() {
  var tag = 'v1';
  gulp.src(filesToMove, { base: './routes' })
  .pipe(gulp.dest('./routes/versions/' + tag));
});
