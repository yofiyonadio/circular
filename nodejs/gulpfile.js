var gulp = require('gulp');
var install = require('gulp-install');

const PROD_DEST = '../production';

gulp.task('default', function () {
    return gulp.src(['./package.json', './.env'])
        .pipe(gulp.dest(PROD_DEST))
        .pipe(install({
            args: ['--only=production']
        }));
});