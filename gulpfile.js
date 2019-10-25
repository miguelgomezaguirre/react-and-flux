

var gulp = require("gulp");
var open = require("gulp-open");
var conn = require("gulp-connect")

var config = {
    port: 5500,
    baseUrl: 'http://localhost',
    path: {
        html: './src/*.html',
        dist: './dist'
    }
}

gulp.task('conn', function() {
    conn.server({
        root: ['dist'],
        port: config.port,
        base: config.baseUrl,
        livereload: true
    })
})

gulp.task('open', ['conn'], function(){
    gulp.src('dist/index.html')
        .pipe(open({
            uri: config.baseUrl + ':' + config.port + '/'
        }))
})

gulp.task('html', function(){
    gulp.src(config.path.html)
        .pipe(gulp.dest(config.path.html))
        .pipe(conn.reload())
})

gulp.task('default', ['hml', 'open']);
