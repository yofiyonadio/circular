var gulp = require('gulp');
var install = require('gulp-install');

const PROD_DEST = '../production';

gulp.task('prod', function () {
    console.log('default')
    return gulp.src(['./package.json', './.env'])
        .pipe(gulp.dest(PROD_DEST))
        .pipe(install({
            args: ['--only=production']
        }));
});

gulp.task('server', function () {
    console.log('prod')
    return gulp.src(['./package.json', './env/.env'])
        .pipe(gulp.dest(PROD_DEST))
        .pipe(install({
            args: ['--only=production']
        }));
});