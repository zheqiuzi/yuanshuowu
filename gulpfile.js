var gulp=require("gulp");
var less=require("gulp-less");
var watch=require("gulp-watch");

gulp.task("less",function () {
    gulp.src("index/*.less")
        .pipe(less())
        .pipe(gulp.dest('index/'))
})

gulp.task("watch",function () {
    gulp.watch("index/*.less",['less'])
})