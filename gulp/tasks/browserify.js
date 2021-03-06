var buildScript = require('../utils/buildScript.js');

//used to build scripts one time
module.exports = function(config) {
    return function(){
        return buildScript(config, false);
    }
}


























//Old implementation

// var gulp = require('gulp');
// var browserify = require('browserify'); // Providers "require" support, CommonJS
// var watchify = require('watchify'); // Watchify for source changes
// var uglify = require('gulp-uglify'); //compressing
// var source = require('vinyl-source-stream'); // Vinyl stream support
// var buffer = require('vinyl-buffer');
// var sourcemaps = require('gulp-sourcemaps'); // Provide external sourcemap files
// var gutil = require('gulp-util'); // Provides gulp utilities, including logging and beep
// var chalk = require('chalk'); // Allows for coloring for logging
// var babelify = require('babelify'); // Used to convert ES6 & JSX to ES5
// var notify = require('gulp-notify'); // Provides notification to both the console and Growel
// var duration = require('gulp-duration'); // Time aspects of your gulp process

// module.exports = function(config) {

//     return function(){
//         return browserify({
//             entries: config.entries,
//             debug: true
//         })
//         .transform(babelify)
//         .bundle()
//         .on('error', mapError)
//         //Pass desired output filename to vinyl-source-stream
//         .pipe(source(config.destFile))
//         .pipe(buffer()) //uglify expects buffered vinyl file objects
//         .pipe(uglify())
//         .pipe(sourcemaps.init({loadMaps: true}))
//         .pipe(sourcemaps.write('./maps'))
//         // Start piping stream to tasks!
//         .pipe(gulp.dest(config.destFolder))
//         .pipe(notify({
//         message: 'Generated file: <%= file.relative %>',
//         })) // Output the file being created
//         .pipe(duration('Javascript bundle time')) // Output time timing of the file creation
//         ;
//     }
// };

// //Errors
// function simpleMapError(err) {
//     gutil.log("Browserify Error", gutil.colors.red(err.message));
// };

// function mapError(err) {
//   if (err.fileName) {
//     // Regular error
//     gutil.log(chalk.red(err.name)
//       + ': ' + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
//       + ': ' + 'Line ' + chalk.magenta(err.lineNumber)
//       + ' & ' + 'Column ' + chalk.magenta(err.columnNumber || err.column)
//       + ': ' + chalk.blue(err.description));
//   } else {
//     // Browserify error..
//     gutil.log(chalk.red(err.name)
//       + ': '
//       + chalk.yellow(err.message));
//   }
// }