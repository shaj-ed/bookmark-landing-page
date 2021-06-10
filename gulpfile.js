// Select Dependencies
const { src, dest, watch, series } = require("gulp");
const scss = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const optImage = require("gulp-imagemin");
const browsersync = require("browser-sync").create();

// Compile SCSS to CSS
function compileScssTask() {
  return src("src/scss/*.scss")
    .pipe(scss().on("error", scss.logError))
    .pipe(
      postcss([
        autoprefixer("last 2 version", { grid: "autoplace" }),
        cssnano(),
      ])
    )
    .pipe(dest("dist/css"));
}

// JS terser
function jsTask() {
  return src("src/js/*.js").pipe(terser()).pipe(dest("dist/js"));
}

// Optimize Image
function imageTask() {
  return src("src/images/*")
    .pipe(
      optImage([
        optImage.mozjpeg({ quality: 80, progressive: true }),
        optImage.optipng({ optimizationLevel: 5 }),
        optImage.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}

// BrowserSync Task
function browserServer(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browserReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Taks
function watchTasks() {
  watch("index.html", browserReload);
  watch(
    ["src/scss/*.scss", "src/js/*.js"],
    series(compileScssTask, jsTask, browserReload)
  );
  watch("src/images/*", imageTask);
}

// Default run Gulp
exports.default = series(
  compileScssTask,
  jsTask,
  imageTask,
  browserServer,
  watchTasks
);
