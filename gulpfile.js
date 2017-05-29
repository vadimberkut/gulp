var config = {
    browserify: {
        debug: true,
        entries: ['./src/index.js'],
        development: true,
        destFile: 'bundle.js',
        destFolder: './src/build'
    },
    watchify: {
        debug: true,
        entries: ['./src/index.js'],
        development: true,
        destFile: 'bundle.js',
        destFolder: './src/build'
    },
    server: {
        port: 8080,
        //host:
        root: ['./src'],
        livereload: true
    },
    sass: {
        srcFolder: './src/styles/sass/**/*.+(scss|sass)',
        destFile: 'styles.css',
        destFolder: './src/build',
    },
    livereload: {
        html: './src/**/*.+(html|htm)',
        js: './src/build/**/*.js',
        jsMaps: './src/build/**/*.map',
        css: './src/build/**/*.css'
    }
};

var gulp = require('./gulp')([
    'browserify',
    'watchify',
    'server',
    'sass',
], config);

var connect = require('gulp-connect'); //web server
var watch = require('gulp-watch'); //watching changes
var del = require('del');

//watching only builded files
gulp.task('livereload', function() {
    var entries = [config.livereload.html,config.livereload.js,config.livereload.jsMaps,config.livereload.css];
    gulp.src(entries)
        .pipe(watch(entries))
        .pipe(connect.reload());
});

//wathing for changes to build
gulp.task('watch', function(){
    gulp.watch(config.sass.srcFolder, ['sass']);
});

//Build
gulp.task('build', [
    'sass',
    'browserify'
]);

//Clean deploy files
gulp.task('clean', function(){
    return del([
        './public/**',
    ]);
});

//Prepare deploy - move files
gulp.task('prepare-deploy', [
    'build'
], function(){
    //move files to public
    gulp.src(['src/*.html']).pipe(gulp.dest('./public'));
    gulp.src(['src/build/**/*']).pipe(gulp.dest('./public/build'));
    gulp.src(['src/images/**/*']).pipe(gulp.dest('./public/images'));
});

//Deploy
gulp.task('deploy', [
    'clean',
    'prepare-deploy',
], function(){
    //run deploy comands
});


gulp.task('default', [
    'sass', 
    'server', 
    'livereload',
    'watchify',
    'watch'
]);