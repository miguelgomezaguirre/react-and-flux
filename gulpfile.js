"use strict"

var gulp = require("gulp");
var conn = require("gulp-connect")
var open = require("gulp-open");
var reactify = require("reactify");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var concat = require("gulp-concat");
var eslint = require("gulp-eslint");

var config = {
    port: 5500,
    baseUrl: 'http://localhost',
    path: {
        html: './src/*.html',
        js: './src/**/*.js',
        indexJs: './src/index.js',
        css: './node_modules/bootstrap/dist/css/bootstrap.min.css',
        dist: './dist'
    }
}

gulp.task('conn', function() {
    conn.server({
        root: ['dist'],
        port: config.port,
        base: config.baseUrl,
        livereload: true
    });
});

gulp.task('open', gulp.parallel('conn', function () {
    gulp.src('src/index.html')
        .pipe(open({
            uri: config.baseUrl + ':' + config.port + '/'
        }));
}));

gulp.task('html', function(){
    gulp.src(config.path.html)
        .pipe(gulp.dest(config.path.dist))
        .pipe(conn.reload());
});

gulp.task('js', function () {
    browserify(config.path.indexJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.path.dist + '/js'))
        .pipe(conn.reload());
})

gulp.task('watch', function() {
    gulp.watch(config.path.html, gulp.parallel('html'));
    gulp.watch(config.path.js, gulp.parallel('js'));
})

gulp.task('css', function() {
    gulp.src(config.path.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.path.dist + '/css'))
})

gulp.task('eslint', function() {
    return gulp.src(config.path.js)
        .pipe(eslint({config: '.eslintrc.json'}))
        .pipe(eslint.format())
})

gulp.task('default', gulp.parallel('html', 'open', 'watch', 'js', 'css', 'eslint'));
