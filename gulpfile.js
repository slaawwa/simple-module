
'use strict';

const gulp = require('gulp'),
	// del = require('del'),
	server = require('./server')//,
	// googlecdn = require('gulp-google-cdn'),
	// mainBowerFiles = require('main-bower-files'),
	// cdnizer = require('cdnizer')
    ;

gulp.task('all', ['clearDist', 'mainJS', 'mainCSS', 'mainFONTS', 'mainHTML', 'server'],function () {
    console.log('************ DONE ************')
});

gulp.task('default', ['server'], function () {
    console.log('************ DONE ************')
});

gulp.task('mainHTML', function () {
    // return gulp.src('client/app/index.html')
    //     .pipe(googlecdn(require('./bower.json')))
    //     .pipe(gulp.dest('client/dist'));
});

gulp.task('clearDist', function () {
	// del.sync(['client/dist/**']);
});

gulp.task('mainJS', function () {
	// return gulp.src(mainBowerFiles('**/*.js'))
 //    .pipe(gulp.dest('client/dist/assets/js'))
});
gulp.task('mainCSS', function () {
	// return gulp.src(mainBowerFiles('**/*.css'))
 //    .pipe(gulp.dest('client/dist/assets/css'))
});
gulp.task('mainFONTS', function () {
	// return gulp.src(mainBowerFiles(/.*\.(eot|svg|ttf|woff|woff2)$/))
 //    .pipe(gulp.dest('client/dist/assets/fonts'))
});

gulp.task('server', function () {
	server.start();
});

gulp.task('cdn', function() {

    /*return gulp.src('client/app/index.html')
        .pipe(cdnizer({
        	bowerComponents: './client/bower',
            allowRev: true,
            allowMin: true,
            files: [*//*{
            	file: '/client/bower/angular/angular.js',
                package: 'angular',
                cdn: '//ajax.googleapis.com/ajax/libs/angularjs/${ major }.${ minor }.${ patch }/angular.min.js'
            },*//* {
            	file: '/client/bower/jquery/jquery.js',
                package: 'angular',
                cdn: '//ajax.googleapis.com/ajax/libs/jquery/${ major }.${ minor }.${ patch }/jquery.min.js'
            }]
        }))
        .pipe(gulp.dest('client/dist'));*/
});
