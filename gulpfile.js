"use strict";
require('dotenv').config();

var argv =
        // .demand(['f'])
        require("yargs").usage("Usage: -f [string]").argv,
    browserSync = require("browser-sync").create(),
    del = require("del"),
    fileSystem = require("fs"),
    gulp = require("gulp"),
    rename = require("gulp-rename"),
    path = require("path"),
    gutil = console,
    plugin = require("gulp-load-plugins")({
        lazy: true,
    }),
    // TO DO: Move these paths to gulpconfig.js
    foldersPath = "src/ads/",
    sharedPath = "src/shared/";

var inlinesource = require('gulp-inline-source');
var inlineImages = require('gulp-inline-images');

var inlineImgConfig = {
    selector: 'img[src]',
    attribute: 'src',
};

var inlineImageConfig = {
    selector: 'image[href]',
    attribute: 'href',
};

// var es = require("event-stream");
var mergeStream = require("merge-stream");
var open = require("open")
const fileSync = require("gulp-file-sync");
var DISCLAIMER = require("./" + sharedPath + "disclaimer.txt");

gutil.log(DISCLAIMER);


open('https://h5validator.appspot.com/dcm/asset');
// open("https://codebeautify.org/xmlvalidator");


function getProjectName() {
    return __dirname.replace(/.+(\\|\/)(.+?)$/, "$2");
}
function getFolders(dir) {
    return fileSystem.readdirSync(dir).filter(function (file) {
        return fileSystem.statSync(path.join(dir, file)).isDirectory();
    });
}

/**
 * 750x200 -> width=750,height=200
 */
function getAdsSize(str) {
    return str.replace(/([0-9]+)x([0-9]+).*/i, "width=$1,height=$2");
}

function copySharedLibs(cb) {
    // If there are extra libraries that have to be included
    // These will NOT be concatenated into the main.js file
    var folders = getFolders(foldersPath);

    var tasks = folders.map(function (folder) {
        //    gutil.log(path.join(foldersPath,folder, 'libs/*.js'));
        //    gutil.log(path.join('build/', folder ,'libs'));
        return gulp
            .src(path.join(sharedPath, "js/*.js"))

            .pipe(plugin.replace(/{DISCLAIMER}/g, DISCLAIMER)) // replace {DISCLAIMER} with disclaimer.txt

            .pipe(gulp.dest(path.join("src/ads/", folder, "js")));
    });
    // return gulp.series(tasks);
    cb();
}
exports.copySharedLibs = copySharedLibs;

function copyLibs(cb) {
    // If there are extra libraries that have to be included
    // These will NOT be concatenated into the main.js file
    var folders = getFolders(foldersPath);

    var tasks = folders.map(function (folder) {
        // gutil.log(path.join(foldersPath,folder, 'libs/*.js'));
        // gutil.log(path.join('build/', folder ,'libs'));

        return gulp
            .src(path.join(path.join(foldersPath, folder, "libs/*.js")))
            .pipe(gulp.dest(path.join("build/", folder, "")));
    });
    // return gulp.series(tasks);
    cb();
}
exports.copyLibs = copyLibs;

var buildJs = function (cb) {
    var folders = getFolders(foldersPath);

    var tasks = folders.map(function (folder) {
        return (
            gulp
                .src([
                    path.join(sharedPath, "/js/*.js"),
                    path.join(foldersPath, folder, "*.js"),
                ])
                // .pipe(plugin.concat("main.js"))
                .pipe(plugin.replace(/{DISCLAIMER}/g, DISCLAIMER)) // replace {DISCLAIMER} with disclaimer.txt
                // TO DO: move the minifying to a deploy task
                // .pipe(plugin.uglify())
                .pipe(gulp.dest(path.join("build/", folder)))
                .pipe(gulp.dest(path.join("build-wp-builder/", folder)))
        );
    });

    return mergeStream(tasks);
    cb();
};
exports.buildJs = buildJs;

// gulp.task('uglify-js',[], function() {
//     var folders = getFolders(foldersPath);

//     var tasks = folders.map(
//         function(folder) {
//             return gulp
//                 .src(path.join('build/', folder, '/**/*.js'))
//                 .pipe(plugin.uglify())
//                 .pipe(gulp.dest(path.join('build/', folder)));

//         }
//     );

//     return tasks;
// });

var watchJs = gulp.series(buildJs, buildHtml, wpBuilder, cleanBuildJs, deploy, deployWpBuilder, function (cb) {
    // TO DO:
    // Make it so it is not needed to copy all
    // external JS libraries on each reload
    browserSync.reload();
    cb();
});

function buildHtml(cb) {
    var folders = getFolders(foldersPath);
    var inlineImagesEnabled = process.env.inline_images === 'true';

    var tasks = folders.map(function (folder) {
        console.log("Html for: " + folder);
        var stream = gulp.src(path.join('src/ads', folder, "*.html"))
            .pipe(plugin.replace(/{AD_SIZE}/g, getAdsSize(folder))) // replace {ADS_SIZE}
            .pipe(plugin.replace(/{PROJECT_NAME}/g, getProjectName())) // replace {PROJECT_NAME} with folder name
            .pipe(plugin.replace(/<!--[\s\S]+?-->/g, "")) // remove comments
            .pipe(gulp.dest(path.join("build/", folder)))
            .pipe(inlinesource());

        if (inlineImagesEnabled) {
            stream = stream.pipe(inlineImages({
                selector: 'img[src]',
                attribute: 'src',
                basedir: path.join('build', folder)
            }))
            .pipe(plugin.replace(/src="images\/[^"]+"/g, ''))
            .pipe(inlineImages({
                selector: 'image[href]',
                attribute: 'href',
                basedir: path.join('build', folder)
            }))
            .pipe(plugin.replace(/href="images\/[^"]+"/g, ''))
            .pipe(plugin.replace(/src="(data:image\/[^"]+)"/g, 'href="$1"'));
        }

        return stream.pipe(gulp.dest(path.join("build/", folder)));
    });
    return mergeStream(...tasks);

    cb();
}
exports.buildHtml = buildHtml;

function wpBuilder(cb) {
    var folders = getFolders(foldersPath);
    var inlineImagesEnabled = process.env.inline_images === 'true';

    var tasks = folders.map(function (folder) {
        console.log("Html for WP Builder: " + folder);
        var stream = gulp.src(path.join('src/ads', folder, "*.html"))
            .pipe(plugin.replace(/{AD_SIZE}/g, getAdsSize(folder))) // replace {ADS_SIZE}
            .pipe(plugin.replace(/{PROJECT_NAME}/g, getProjectName())) // replace {PROJECT_NAME} with folder name
            .pipe(plugin.replace(/<!--[\s\S]+?-->/g, "<!--.-->")) // remove comments
            .pipe(plugin.replace(/<script inline src="clicktag\.js"><\/script>/g, "")) // remove comments
            .pipe(plugin.replace(/<a id="clicktag"/g, "<div id=\"clicktag\"")) // 
            .pipe(plugin.replace(/<\/a>/g, "</div>")) // 
            .pipe(gulp.dest(path.join("build-wp-builder/", folder)))
            .pipe(inlinesource());

        if (inlineImagesEnabled) {
            stream = stream.pipe(inlineImages({
                selector: 'img[src]',
                attribute: 'src',
                basedir: path.join('build-wp-builder', folder)
            }))
            .pipe(plugin.replace(/src="images\/[^"]+"/g, ''))
            .pipe(inlineImages({
                selector: 'image[href]',
                attribute: 'href',
                basedir: path.join('build-wp-builder', folder)
            }))
            .pipe(plugin.replace(/href="images\/[^"]+"/g, ''))
            .pipe(plugin.replace(/src="(data:image\/[^"]+)"/g, 'href="$1"'));
        }

        return stream.pipe(gulp.dest(path.join("build-wp-builder/", folder)));
    });
    return mergeStream(...tasks);

    cb();
}
exports.wpBuilder = wpBuilder;

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

function buildCss(cb) {
    var folders = getFolders(foldersPath);

    var tasks = folders.map(function (folder) {
        console.log(sharedPath);
        return (
            gulp
                .src([
                    path.join(sharedPath, "css/*.css"),
                    path.join(foldersPath, folder, "css/*.css"),
                ])
                .pipe(plugin.concat("styles.css"))
                .pipe(
                    plugin.autoprefixer({
                        browsers: ["last 2 versions"],
                    })
                )
                // TO DO: Move the minifying to a deploy task
                .pipe(plugin.cssnano())
                .pipe(gulp.dest(path.join("build/", folder, "css")))
                .pipe(browserSync.stream())
        );
    });

    return mergeStream(tasks);
    cb()
};
exports.buildCss = buildCss;

function copySharedImages(cb) {
    var folders = getFolders(foldersPath);

    var tasks = folders.map(function (folder) {
        return gulp
            .src(path.join(sharedPath, "images/*.*"))
            .pipe(gulp.dest(path.join("build", folder, "images")))
            .pipe(gulp.dest(path.join("build-wp-builder", folder, "images")));
    });
    return mergeStream(tasks);
    cb();
}
exports.copySharedImages = copySharedImages;

function copyImages(cb) {
    var folders = getFolders(foldersPath);

    var tasks = folders.map(function (folder) {
        return gulp
            .src(path.join(foldersPath, folder, "images/*.*"))
            .pipe(gulp.dest(path.join("build", folder, "images")))
            .pipe(gulp.dest(path.join("build-wp-builder", folder, "images")));
    });

    return mergeStream(tasks);
    cb();
};
exports.copyImages = copyImages;

var watchImages = gulp.series(copySharedImages, copyImages, function (cb) {
    browserSync.reload();
    cb();
});

// gulp.task('compress-images', function() {
//     var folders = getFolders(foldersPath);

//     var tasks = folders.map(
//         function(folder) {
//             return gulp
//                 .src(path.join('build/', folder, './*.{gif,jpg,png,svg}'))
//                 .pipe(plugin.imagemin())
//                 .pipe(gulp.dest(path.join('build', folder)));
//         }
//     );

//     return tasks;
// });

function cleanBuild(cb) {
    return Promise.all([ del("build/**/*.*"), del("deploy/**/*.*"), del("build-wp-builder/**/*.*"), del("deploy-wp-builder/**/*.*") ]);
};
exports.cleanBuild = cleanBuild;

function cleanBuildJs(cb) {
    return del(["build/**/*.js", "build-wp-builder/**/*.js"]);
};
exports.cleanBuildJs = cleanBuildJs;

function cleanInlinedImages(cb) {
    if (process.env.inline_images !== 'true') {
        cb();
        return;
    }
    return del(["build/**/images", "build-wp-builder/**/images"]);
};
exports.cleanInlinedImages = cleanInlinedImages;

// gulp.task('clean-deploy', function() {
//    return del.sync('deploy/**/*.*');
// });

// gulp.task('build', [
//     'clean-build',
//     'copy-images',
//     'build-html',
//     'build-css',
//     'build-js'
// ]);

function deploy(cb) {


    var projectName = getProjectName();
    // Zip each ad on its own folder and place them into a 'deploy' folder
    var folders = getFolders('./build/');
    console.log(projectName, folders );

    var tasks = folders.map(function(folder) {
        return gulp
            .src(path.join('build', folder, '**'))
            .pipe(plugin.zip(projectName+'-'+folder + '.zip'))
            .pipe(gulp.dest('deploy/'));
    });

    return mergeStream(tasks);
    cb();
}
exports.deploy = deploy;
function deployWpBuilder(cb) {


    var projectName = getProjectName();
    // Zip each ad on its own folder and place them into a 'deploy' folder
    var folders = getFolders('./build/');
    console.log(projectName, folders );

    var tasks = folders.map(function(folder) {
        return gulp
            .src(path.join('build-wp-builder', folder, '**'))
            .pipe(plugin.zip(projectName+'-'+folder + '.zip'))
            .pipe(gulp.dest('deploy-wp-builder/'));
    });

    return mergeStream(tasks);
    cb();
}
exports.deployWpBuilder = deployWpBuilder;
function duplicateIndexHtml(cb) {



    return gulp
        .src(path.join('index.html'))
        .pipe(plugin.replace(/\/build\//g, "/build-wp-builder/")) // remove comments
        .pipe(rename("index-wp-builder.html")) // remove comments
        .pipe(gulp.dest('.'));

    cb();
}
exports.duplicateIndexHtml = duplicateIndexHtml;

function watch(cb) {
    // var dest = 'build/' + argv.f;
    var dest = "build/";
    console.log("Watching folder: ", argv.f, dest);
    browserSync.init({
        server: dest,
        baseDir: dest,
        directory: true,
    });

    gulp.watch("src/**/*.{gif,jpg,png,svg}", gulp.series(watchImages));
    gulp.watch("src/**/*.css", gulp.series(buildCss));
    gulp.watch(
        "src/**/*.html",
        gulp.series(buildScripts, buildHtml, wpBuilder, cleanInlinedImages, cleanBuildJs, deploy, deployWpBuilder, function (cb) {
            browserSync.reload();
            cb();
        })
    );
  
    
    gulp.watch("src/**/*.js", gulp.series(watchJs));
    gulp.watch("src/shared/*.txt", gulp.series(watchJs));
    cb();
}
// var buildScripts = gulp.series(copyLibs, copySharedLibs, buildJs);
var buildScripts = gulp.series(buildJs);
exports.buildScripts = buildScripts;
var buildAll = gulp.series(
    cleanBuild,
    copySharedImages,
    copyImages,
    buildCss,
    buildScripts,
    buildHtml,
    wpBuilder,
    cleanInlinedImages,
    cleanBuildJs,
    deploy,
    deployWpBuilder,
    // duplicateIndexHtml
);
exports.buildAll = buildAll;
exports.default = gulp.series(buildAll, watch);
// Minify it
// Zip each folder up
// Move each of them to a deploy folder
