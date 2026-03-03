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
var subsetFont = require('subset-font');
var sharp = require('sharp');
var fonteditor = require('fonteditor-core');

var woff2Initialized = false;

var inlineImgConfig = {
    selector: 'img[src]',
    attribute: 'src',
};

var inlineImageConfig = {
    selector: 'image[href]',
    attribute: 'href',
};

function subsetFonts(cb) {
    var folders = getFolders(foldersPath);
    var inlineFontsEnabled = process.env.inline_fonts === 'true';
    var useWoff2 = process.env.use_woff2 === 'true';
    
    if (!inlineFontsEnabled) {
        cb();
        return;
    }
    
    if (useWoff2 && !woff2Initialized) {
        fonteditor.woff2.init().then(() => {
            woff2Initialized = true;
            subsetFonts(cb);
        });
        return;
    }
    
    var targetText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()ąćęłńóśźżĄĆĘŁŃÓŚŹŻ';
    
    var allPromises = [];
    var fontBase64Map = {};
    
    folders.forEach(function (folder) {
        var srcDir = path.join(foldersPath, folder, "fonts");
        var destDir = path.join("build", folder, "fonts");
        var destDirWp = path.join("build-wp-builder", folder, "fonts");
        
        if (!fileSystem.existsSync(srcDir)) {
            return;
        }
        
        if (!fileSystem.existsSync(destDir)) {
            fileSystem.mkdirSync(destDir, { recursive: true });
        }
        if (!fileSystem.existsSync(destDirWp)) {
            fileSystem.mkdirSync(destDirWp, { recursive: true });
        }
        
        var files = fileSystem.readdirSync(srcDir);
        var fontBase64 = {};
        fontBase64Map[folder] = fontBase64;
        
        files.forEach(function (file) {
            var srcFile = path.join(srcDir, file);
            var destFile = path.join(destDir, file);
            var destFileWp = path.join(destDirWp, file);
            
            if (file.endsWith('.ttf')) {
                var promise = (async function() {
                    try {
                        var fontData = fileSystem.readFileSync(srcFile);
                        var subsetBuffer = await subsetFont(fontData, targetText);
                        
                        if (useWoff2) {
                            var woff2ArrayBuffer = fonteditor.ttftowoff2(subsetBuffer);
                            var woff2Buffer = Buffer.from(woff2ArrayBuffer);
                            var base64 = woff2Buffer.toString('base64');
                            var woff2File = file.replace('.ttf', '.woff2');
                            fontBase64[file] = {
                                woff2: 'data:font/woff2;base64,' + base64,
                                ttf: 'data:font/ttf;base64,' + subsetBuffer.toString('base64'),
                                woff2File: woff2File
                            };
                            fileSystem.writeFileSync(path.join(destDir, woff2File), woff2Buffer);
                            fileSystem.writeFileSync(path.join(destDirWp, woff2File), woff2Buffer);
                        } else {
                            fontBase64[file] = 'data:font/ttf;base64,' + subsetBuffer.toString('base64');
                            fileSystem.writeFileSync(destFile, subsetBuffer);
                            fileSystem.writeFileSync(destFileWp, subsetBuffer);
                        }
                    } catch (err) {
                        console.log('subset-font error for ' + file + ': ' + err.message);
                        fileSystem.copyFileSync(srcFile, destFile);
                        fileSystem.copyFileSync(srcFile, destFileWp);
                    }
                })();
                allPromises.push(promise);
            } else if (file.endsWith('.css')) {
                fontBase64._cssFile = srcFile;
                fontBase64._destFile = destFile;
                fontBase64._destFileWp = destFileWp;
            } else {
                fileSystem.copyFileSync(srcFile, destFile);
                fileSystem.copyFileSync(srcFile, destFileWp);
            }
        });
    });
    
    Promise.all(allPromises).then(function() {
        folders.forEach(function (folder) {
            var fontBase64 = fontBase64Map[folder];
            if (fontBase64 && fontBase64._cssFile) {
                var cssContent = fileSystem.readFileSync(fontBase64._cssFile, 'utf8');
                Object.keys(fontBase64).forEach(function (fontFile) {
                    if (fontFile === '_cssFile' || fontFile === '_destFile' || fontFile === '_destFileWp') return;
                    
                    var fontData = fontBase64[fontFile];
                    if (useWoff2 && typeof fontData === 'object' && fontData.woff2) {
                        var escapedFontFile = fontFile.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                        var woff2File = fontData.woff2File;
                        var escapedWoff2File = woff2File.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                        cssContent = cssContent.replace(
                            new RegExp('url\\([^)]*' + escapedFontFile + '[^)]*\\)', 'gi'),
                            'url(' + fontData.woff2 + ')'
                        );
                        cssContent = cssContent.replace(
                            new RegExp('format\\s*\\(\\s*[\'"]?truetype[\'"]?\\s*\\)'),
                            'format(\'woff2\')'
                        );
                    } else if (typeof fontData === 'string') {
                        var escapedFontFile = fontFile.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                        cssContent = cssContent.replace(
                            new RegExp('url\\([^)]*' + escapedFontFile + '[^)]*\\)', 'gi'),
                            'url(' + fontData + ')'
                        );
                    }
                });
                fileSystem.writeFileSync(fontBase64._destFile, cssContent);
                fileSystem.writeFileSync(fontBase64._destFileWp, cssContent);
            }
        });
        cb();
    });
}
exports.subsetFonts = subsetFonts;

// var es = require("event-stream");
var mergeStream = require("merge-stream");
var open = require("open").default;
const fileSync = require("gulp-file-sync");
var DISCLAIMER = require("./" + sharedPath + "disclaimer.txt");

gutil.log(DISCLAIMER);


// open('https://h5validator.appspot.com/dcm/asset');
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
    var fileSystem = require("fs");

    var tasks = folders.map(function (folder) {
        var srcFiles = [path.join(sharedPath, "/js/*.js")];
        var folderJs = path.join(foldersPath, folder, "*.js");
        
        // Check if folder JS exists
        var folderJsDir = path.join(foldersPath, folder);
        if (fileSystem.existsSync(folderJsDir)) {
            var files = fileSystem.readdirSync(folderJsDir).filter(f => f.endsWith('.js'));
            if (files.length > 0) {
                srcFiles.push(folderJs);
            }
        }
        
        return (
            gulp
                .src(srcFiles, { allowEmpty: true })
                .pipe(plugin.replace(/{DISCLAIMER}/g, DISCLAIMER))
                .pipe(gulp.dest(path.join("build/", folder)))
                .pipe(gulp.dest(path.join("build-wp-builder/", folder)))
        );
    });

    return mergeStream(tasks);
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

var watchJs = gulp.series(cleanInlinedImages, cleanInlinedFonts, copySharedImages, copyImages, subsetFonts, buildJs, buildHtml, wpBuilder, cleanBuildJs, cleanInlinedImages, cleanInlinedFonts, deploy, deployWpBuilder, function (cb) {
    // TO DO:
    // Make it so it is not needed to copy all
    // external JS libraries on each reload
    browserSync.reload();
    cb();
});

function buildHtml(cb) {
    var folders = getFolders(foldersPath);
    var inlineImagesEnabled = process.env.inline_images === 'true';
    var inlineFontsEnabled = process.env.inline_fonts === 'true';
    var compressImages = process.env.compress_images === 'true';

    var tasks = folders.map(function (folder) {
        console.log("Html for: " + folder);
        var stream = gulp.src(path.join('src/ads', folder, "*.html"))
            .pipe(plugin.replace(/{AD_SIZE}/g, getAdsSize(folder))) // replace {ADS_SIZE}
            .pipe(plugin.replace(/{PROJECT_NAME}/g, getProjectName())) // replace {PROJECT_NAME} with folder name
            .pipe(plugin.replace(/<!--[\s\S]+?-->/g, "")); // remove comments
        
        if (compressImages) {
            stream = stream
                .pipe(plugin.replace(/href="images\/([^"]+)\.jpg"/g, 'href="images/$1.webp"'))
                .pipe(plugin.replace(/href="images\/([^"]+)\.png"/g, 'href="images/$1.webp"'))
                .pipe(plugin.replace(/src="images\/([^"]+)\.jpg"/g, 'src="images/$1.webp"'))
                .pipe(plugin.replace(/src="images\/([^"]+)\.png"/g, 'src="images/$1.webp"'));
        }
        
        stream = stream
            .pipe(gulp.dest(path.join("build/", folder)))
            .pipe(inlinesource({
                compress: false,
                rootpath: path.join('build', folder)
            }));

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

        if (inlineFontsEnabled) {
            var fontsDir = path.join('build', folder, 'fonts');
            var fontCssFile = path.join(fontsDir, 'fonts.css');
            var fileSystem = require("fs");
            if (fileSystem.existsSync(fontsDir) && fileSystem.existsSync(fontCssFile)) {
                stream = stream.pipe(inlinesource({
                    compress: true,
                    rootpath: fontsDir
                }));
            }
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
    var inlineFontsEnabled = process.env.inline_fonts === 'true';
    var compressImages = process.env.compress_images === 'true';

    var tasks = folders.map(function (folder) {
        console.log("Html for WP Builder: " + folder);
        var stream = gulp.src(path.join('src/ads', folder, "*.html"))
            .pipe(plugin.replace(/{AD_SIZE}/g, getAdsSize(folder))) // replace {ADS_SIZE}
            .pipe(plugin.replace(/{PROJECT_NAME}/g, getProjectName())) // replace {PROJECT_NAME} with folder name
            .pipe(plugin.replace(/<!--[\s\S]+?-->/g, "<!--.-->")) // remove comments
            .pipe(plugin.replace(/<script inline src="clicktag\.js"><\/script>/g, "")) // remove comments
            .pipe(plugin.replace(/<a id="clicktag"/g, "<div id=\"clicktag\"")) // 
            .pipe(plugin.replace(/<\/a>/g, "</div>"));
        
        if (compressImages) {
            stream = stream
                .pipe(plugin.replace(/href="images\/([^"]+)\.jpg"/g, 'href="images/$1.webp"'))
                .pipe(plugin.replace(/href="images\/([^"]+)\.png"/g, 'href="images/$1.webp"'))
                .pipe(plugin.replace(/src="images\/([^"]+)\.jpg"/g, 'src="images/$1.webp"'))
                .pipe(plugin.replace(/src="images\/([^"]+)\.png"/g, 'src="images/$1.webp"'));
        }
        
        stream = stream
            .pipe(gulp.dest(path.join("build-wp-builder/", folder)))
            .pipe(inlinesource({
                compress: true,
                rootpath: path.join('build-wp-builder', folder)
            }));

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

        if (inlineFontsEnabled) {
            var fontsDir = path.join('build-wp-builder', folder, 'fonts');
            var fontCssFile = path.join(fontsDir, 'fonts.css');
            var fileSystem = require("fs");
            if (fileSystem.existsSync(fontsDir) && fileSystem.existsSync(fontCssFile)) {
                stream = stream.pipe(inlinesource({
                    compress: true,
                    rootpath: fontsDir
                }));
            }
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
    var fileSystem = require("fs");
    var path = require("path");

    var tasks = folders.map(function (folder) {
        var sharedCss = path.join(sharedPath, "css/*.css");
        var folderCss = path.join(foldersPath, folder, "css/*.css");
        
        // Check if folder css exists
        var folderCssExists = fileSystem.existsSync(path.join(foldersPath, folder, "css"));
        
        var srcFiles = [sharedCss];
        if (folderCssExists) {
            srcFiles.push(folderCss);
        }
        
        if (srcFiles.length === 0) {
            return;
        }
        
        return (
            gulp
                .src(srcFiles, { allowEmpty: true })
                .pipe(plugin.concat("styles.css"))
                .pipe(
                    plugin.autoprefixer({
                        browsers: ["last 2 versions"],
                    })
                )
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
    var fileSystem = require("fs");
    var compressImages = process.env.compress_images === 'true';
    var compression = parseFloat(process.env.image_compression || '0.5');
    
    var allPromises = [];
    
    folders.forEach(function (folder) {
        var srcDir = path.join(sharedPath, "images");
        var destDir = path.join("build", folder, "images");
        var destDirWp = path.join("build-wp-builder", folder, "images");
        
        if (!fileSystem.existsSync(srcDir)) {
            return;
        }
        
        if (!fileSystem.existsSync(destDir)) {
            fileSystem.mkdirSync(destDir, { recursive: true });
        }
        if (!fileSystem.existsSync(destDirWp)) {
            fileSystem.mkdirSync(destDirWp, { recursive: true });
        }
        
        var files = fileSystem.readdirSync(srcDir);
        files.forEach(function (file) {
            if (file.endsWith('.DS_Store')) return;
            
            var srcFile = path.join(srcDir, file);
            var ext = path.extname(file).toLowerCase();
            var baseName = path.basename(file, ext);
            var destFile = path.join(destDir, baseName + '.webp');
            var destFileWp = path.join(destDirWp, baseName + '.webp');
            
            if (compressImages && ['.jpg', '.jpeg', '.png'].includes(ext)) {
                var promise = sharp(srcFile)
                    .webp({ quality: Math.round(compression * 100) })
                    .toFile(destFile)
                    .then(() => sharp(srcFile)
                        .webp({ quality: Math.round(compression * 100) })
                        .toFile(destFileWp))
                    .catch(err => {
                        console.log('Shared image compression error for ' + file + ': ' + err.message);
                        fileSystem.copyFileSync(srcFile, path.join(destDir, file));
                        fileSystem.copyFileSync(srcFile, path.join(destDirWp, file));
                    });
                allPromises.push(promise);
            } else {
                fileSystem.copyFileSync(srcFile, path.join(destDir, file));
                fileSystem.copyFileSync(srcFile, path.join(destDirWp, file));
            }
        });
    });
    
    if (allPromises.length > 0) {
        Promise.all(allPromises).then(() => cb()).catch(err => { console.log(err); cb(); });
    } else {
        cb();
    };
}
exports.copySharedImages = copySharedImages;

function copyImages(cb) {
    var folders = getFolders(foldersPath);
    var fileSystem = require("fs");
    var compressImages = process.env.compress_images === 'true';
    var compression = parseFloat(process.env.image_compression || '0.5');
    
    var allPromises = [];
    
    folders.forEach(function (folder) {
        var srcDir = path.join(foldersPath, folder, "images");
        var destDir = path.join("build", folder, "images");
        var destDirWp = path.join("build-wp-builder", folder, "images");
        
        if (!fileSystem.existsSync(srcDir)) {
            return;
        }
        
        if (!fileSystem.existsSync(destDir)) {
            fileSystem.mkdirSync(destDir, { recursive: true });
        }
        if (!fileSystem.existsSync(destDirWp)) {
            fileSystem.mkdirSync(destDirWp, { recursive: true });
        }
        
        var files = fileSystem.readdirSync(srcDir);
        files.forEach(function (file) {
            if (file.endsWith('.DS_Store')) return;
            
            var srcFile = path.join(srcDir, file);
            var ext = path.extname(file).toLowerCase();
            var baseName = path.basename(file, ext);
            var destFile = path.join(destDir, baseName + '.webp');
            var destFileWp = path.join(destDirWp, baseName + '.webp');
            
            if (compressImages && ['.jpg', '.jpeg', '.png'].includes(ext)) {
                var promise = sharp(srcFile)
                    .webp({ quality: Math.round(compression * 100) })
                    .toFile(destFile)
                    .then(() => sharp(srcFile)
                        .webp({ quality: Math.round(compression * 100) })
                        .toFile(destFileWp))
                    .catch(err => {
                        console.log('Image compression error for ' + file + ': ' + err.message);
                        var origDest = path.join(destDir, file);
                        var origDestWp = path.join(destDirWp, file);
                        fileSystem.copyFileSync(srcFile, origDest);
                        fileSystem.copyFileSync(srcFile, origDestWp);
                    });
                allPromises.push(promise);
            } else {
                var destOrig = path.join(destDir, file);
                var destOrigWp = path.join(destDirWp, file);
                fileSystem.copyFileSync(srcFile, destOrig);
                fileSystem.copyFileSync(srcFile, destOrigWp);
            }
        });
    });
    
    if (allPromises.length > 0) {
        Promise.all(allPromises).then(() => cb()).catch(err => { console.log(err); cb(); });
    } else {
        cb();
    }
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
    if (process.env.debug === 'true') {
        cb();
        return;
    }
    return del(["build/**/images", "build-wp-builder/**/images"]);
};
exports.cleanInlinedImages = cleanInlinedImages;

function cleanInlinedFonts(cb) {
    if (process.env.inline_fonts !== 'true') {
        cb();
        return;
    }
    if (process.env.debug === 'true') {
        cb();
        return;
    }
    return del(["build/**/fonts", "build-wp-builder/**/fonts"]);
};
exports.cleanInlinedFonts = cleanInlinedFonts;

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
        gulp.series(cleanInlinedImages, cleanInlinedFonts, copySharedImages, copyImages, subsetFonts, buildScripts, buildHtml, wpBuilder, cleanBuildJs, cleanInlinedImages, cleanInlinedFonts, deploy, deployWpBuilder, function (cb) {
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
    subsetFonts,
    buildCss,
    buildScripts,
    buildHtml,
    wpBuilder,
    cleanInlinedImages,
    cleanInlinedFonts,
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
