(function() {
    'use strict';
    var
        argv = require('yargs')
        .usage('Usage: -f [string]')
        // .demand(['f'])
        .argv,
        browserSync = require('browser-sync').create(),
        del = require('del'),
        fileSystem = require('fs'),
        gulp = require('gulp'),
        path = require('path'),
        gutil = require('gulp-util'),
        plugin = require('gulp-load-plugins')({
            lazy: true
        }),
        // TO DO: Move these paths to gulpconfig.js
        foldersPath = 'src/ads/',
        sharedPath = 'src/shared/';

    var DISCLAIMER = require('./'+sharedPath+'disclaimer.txt');

    gutil.log( DISCLAIMER );

    function getProjectName() {
        return __dirname.replace(/.+(\\|\/)(.+?)$/,'$2');
    }
    function getFolders(dir) {
        return fileSystem
            .readdirSync(dir)
            .filter(function(file) {
                return fileSystem.statSync(path.join(dir, file)).isDirectory();
            });
    }

    /**
     * 750x200 -> width=750,height=200
     */
    function getAdsSize(str) {
        return str.replace(/([0-9]+)x([0-9]+)/i,"width=$1,height=$2");
    }

    gulp.task('copy-shared-libs', function() {
        // If there are extra libraries that have to be included
        // These will NOT be concatenated into the main.js file
        var folders = getFolders(foldersPath);



        var tasks = folders.map(
            function(folder) {

                //    gutil.log(path.join(foldersPath,folder, 'libs/*.js'));
                //    gutil.log(path.join('build/', folder ,'libs'));
                return gulp
                    .src(path.join(sharedPath, 'libs/*.js'))
                    .pipe(gulp.dest(path.join('build/', folder, 'libs')));
            }
        );
    });

    gulp.task('copy-libs', function() {
        // If there are extra libraries that have to be included
        // These will NOT be concatenated into the main.js file
        var folders = getFolders(foldersPath);

        var tasks = folders.map(
            function(folder) {

                // gutil.log(path.join(foldersPath,folder, 'libs/*.js'));
                // gutil.log(path.join('build/', folder ,'libs'));

                return gulp
                    .src(path.join(path.join(foldersPath, folder, 'libs/*.js')))
                    .pipe(gulp.dest(path.join('build/', folder, '')));
            }
        );
    });


    gulp.task('build-js', ['copy-libs', 'copy-shared-libs'], function() {
    // gulp.task('build-js', [], function() {
        var folders = getFolders(foldersPath);

        var tasks = folders.map(
            function(folder) {
                return gulp
                    .src([
                        path.join(sharedPath, '/js/*.js'),
                        path.join(foldersPath, folder, '*.js')
                    ])
                    .pipe(plugin.concat('main.js'))
                    .pipe(plugin.replace(/{DISCLAIMER}/g, DISCLAIMER)) // replace {DISCLAIMER} with disclaimer.txt
                    // TO DO: move the minifying to a deploy task
                    // .pipe(plugin.uglify())
                    .pipe(gulp.dest(path.join('build/', folder, '')));
            }
        );

        return tasks;
    });

    gulp.task('uglify-js',[], function() {
        var folders = getFolders(foldersPath);

        var tasks = folders.map(
            function(folder) {
                return gulp
                    .src(path.join('build/', folder, '/**/*.js'))
                    .pipe(plugin.uglify())
                    .pipe(gulp.dest(path.join('build/', folder)));

            }
        );

        return tasks;
    });

    gulp.task('watch-js', ['build-js'], function() {
        // TO DO:
        // Make it so it is not needed to copy all
        // external JS libraries on each reload
        browserSync.reload();
    });

    gulp.task('build-html', function() {
        var folders = getFolders(foldersPath);

        var tasks = folders.map(
            function(folder) {
                console.log('Html for: '+folder);
                return gulp
                    .src(path.join(sharedPath, '*.html'))
                    .pipe(plugin.replace(/{ADS_SIZE}/g, getAdsSize(folder))) // replace {ADS_SIZE}
                    .pipe(plugin.replace(/{PROJECT_NAME}/g, getProjectName())) // replace {PROJECT_NAME} with folder name
                    .pipe(plugin.replace(/<!--.+?-->/g, '<!--.-->')) // remove comments
                    .pipe(gulp.dest(path.join('build/', folder)));
            }
        );

        return tasks;
    });

    // gulp.task('build-html', ['build-html-replace'], function() {
    //     var folders = getFolders(foldersPath);
    //
    //     var tasks = folders.map(
    //         function(folder) {
    //             var file = path.join('build/', folder, 'index.html');
    //             return gulp
    //                 .src(file)
    //                 .pipe(gulp.dest(file));
    //         }
    //     );
    //
    //     return tasks;
    // });

    gulp.task('build-css', function() {
        var folders = getFolders(foldersPath);

        var tasks = folders.map(
            function(folder) {
                console.log(sharedPath);
                return gulp
                    .src([
                        path.join(sharedPath, 'css/*.css'),
                        path.join(foldersPath, folder, 'css/*.css')
                    ])
                    .pipe(plugin.concat('styles.css'))
                    .pipe(plugin.autoprefixer({
                        browsers: ['last 2 versions']
                    }))
                    // TO DO: Move the minifying to a deploy task
                    .pipe(plugin.cssnano())
                    .pipe(gulp.dest(path.join('build/', folder, 'css')))
                    .pipe(browserSync.stream());
            }
        );

        return tasks;
    });

    gulp.task('watch-html', ['build-html'], function() {
        browserSync.reload();
    });

    gulp.task('copy-shared-images', function() {
        var folders = getFolders(foldersPath);

        var tasks = folders.map(
            function(folder) {
                return gulp
                    .src(path.join(sharedPath, 'images/*.*'))
                    .pipe(gulp.dest(path.join('build', folder, 'images')));
            }
        );
    });

    gulp.task('copy-images', ['copy-shared-images'], function() {
        var folders = getFolders(foldersPath);

        var tasks = folders.map(
            function(folder) {
                return [
                    gulp
                    .src(path.join(foldersPath, folder, 'images/*.*'))
                    .pipe(gulp.dest(path.join('build', folder, 'images')))
                    ,
                    gulp
                    .src(path.join(foldersPath, folder, '*.{gif,jpg,png,svg}'))
                    .pipe(gulp.dest(path.join('build', folder)))
                ]
            }
        );
       

        return tasks;
    });

    gulp.task('watch-images', ['copy-images'], function() {
        browserSync.reload();
    });

    gulp.task('compress-images', function() {
        var folders = getFolders(foldersPath);

        var tasks = folders.map(
            function(folder) {
                return gulp
                    .src(path.join('build/', folder, './*.{gif,jpg,png,svg}'))
                    .pipe(plugin.imagemin())
                    .pipe(gulp.dest(path.join('build', folder)));
            }
        );

        return tasks;
    });

    gulp.task('clean-build', function() {
        return del.sync('build/**/*.*');
        /*
        TO DO
        Figure out a way to call the following
        compress-images, build-html, build-css, build-js
        once the del task is completed
        */
    });

    gulp.task('clean-deploy', function() {
       return del.sync('deploy/**/*.*');
    });

    gulp.task('build', [
        'clean-build',
        'copy-images',
        'build-html',
        'build-css',
        'build-js'
    ]);

    gulp.task('deploy', ['clean-deploy', 'uglify-js'], function() {
        /* TO DO:
          Run the clean-deploy task first then, run the build task

          BUG !
          The compressed images are NOT being zipped into the deploy folders
        */


        var projectName = getProjectName();
        // Zip each ad on its own folder and place them into a 'deploy' folder
        var folders = getFolders('./build/');
        console.log(projectName, folders );

        var tasks = folders.map(function(folder) {
            return gulp
                .src(path.join('build', folder ,'**/*'))
                .pipe(plugin.zip(projectName+'-'+folder + '.zip'))
                .pipe(gulp.dest('deploy/'));
        });

        return tasks;
    });

    gulp.task('watch', ['build'], function() {
        var dest = 'build/' + argv.f;
        console.log("Watching folder: ", argv.f, dest);
        browserSync.init({
            server: dest
        });

        gulp.watch('src/**/*.{gif,jpg,png,svg}', ['watch-images']);
        gulp.watch('src/**/*.css', ['build-css']);
        gulp.watch('src/**/*.html', ['watch-html']);
        gulp.watch('src/**/*.js', ['watch-js']);
        gulp.watch('src/shared/*.txt', ['watch-js']);
    });

    gulp.task('default', ['build']);
    // Minify it
    // Zip each folder up
    // Move each of them to a deploy folder
})();
