const gulp = require ('gulp')
const postcss = require ('gulp-postcss')
const sass = require ('gulp-sass')
const rename = require ('gulp-rename')
const sourcemaps = require ('gulp-sourcemaps')

const autoprefixer = require ('autoprefixer')
const stylefmt = require ('stylefmt')
const cssnano = require ('cssnano')

gulp.task ('default', function () {
    const processors = [
        autoprefixer,
        stylefmt,
    ]
    const min = [ cssnano ]

    return gulp.src ([ './global.scss', './src/*.scss' ])
        .pipe (sass ().on ('error', sass.logError))
        .pipe (postcss (processors))
        .pipe (gulp.dest ('./dist'))
        .pipe (sourcemaps.init())
        .pipe (postcss (min))
        .pipe (rename ({ extname : '.min.css' }))
        .pipe (sourcemaps.write('.'))
        .pipe (gulp.dest ('./dist'))
})