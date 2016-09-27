var gulp = require('gulp');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var react = require('gulp-react');


gulp.task('default', ['test'], () => {
    return gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('test', () => {
    return gulp.src('es6_test/*.js')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('dist/test'));
});