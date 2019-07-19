const gulp = require("gulp")
const replace = require("gulp-replace")
const env = require("gulp-env")

env({
  file: '.env.json'
})

gulp.task("replace", () => {
  return gulp.src("config.json")
    .pipe(replace("ENV.username", process.env.username))
    .pipe(replace("ENV.port", process.env.port))
    .pipe(replace("ENV.pin", process.env.pin))
    .pipe(gulp.dest("build"))
})

gulp.task("deploy", () => {
  return gulp.src("./build/config.json")
    .pipe(gulp.dest(".."))
})