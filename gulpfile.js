const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

function gulp_css(done) {
	gulp.src('./scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(browserSync.stream());
	done();
}

function gulp_js(done) {
	gulp.src(['./js/**/*.js', './js/**/*.mjs'])
		.pipe(minify({
			ext: {
            min: '.min.js'
         },
         noSource: true
		}))
		.pipe(gulp.dest('./dist/js/'))
	done();
}

function sync(done) {
	browserSync.init({ 
		server: {
			baseDir: './'
		},
		port: 3000
	});
	done();
}

function browserReload(done) {
	browserSync.reload();
	done();
}

function watchFiles() { 
	gulp.watch('./scss/**/*', gulp_css);
	gulp.watch('./js/**/*', gulp_js);
	gulp.watch('./**/*.html', browserReload);
	gulp.watch('./**/*.php', browserReload);
	gulp.watch('./**/*.js', browserReload);
}

gulp.task('default', gulp.parallel(watchFiles, sync));