var gulp = require('gulp');
var install = require('gulp-install');

const PROD_DEST = '../production';

gulp.task('prod', function () {
    return gulp.src(['./package.json', './env/prod/.env'])
        .pipe(gulp.dest(PROD_DEST))
        .pipe(install({
            args: ['--only=production']
        }));
});

gulp.task('server', function () {
    return gulp.src(['./package.json', './env/server/.env'])
        .pipe(gulp.dest(PROD_DEST))
        .pipe(install({
            args: ['--only=production']
        }));
});