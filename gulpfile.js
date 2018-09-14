var gulp=require("gulp");
var less=require("gulp-less");
var watch=require("gulp-watch");

gulp.task("less",function () {
    gulp.src("html/less/*.less")
        .pipe(less())
        .pipe(gulp.dest('html/css/'))
})

gulp.task("watch",function () {
    gulp.watch("html/less/*.less",['less'])
})