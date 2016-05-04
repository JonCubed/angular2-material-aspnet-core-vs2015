﻿(function(global) {

    // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'libs/js/rxjs',
    'angular2-in-memory-web-api': 'libs/js/angular2-in-memory-web-api',
    '@angular':                   'libs/js/@angular'
    };

    // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' }
    };

  var packageNames = [
    'libs/js/@angular/common',
    'libs/js/@angular/compiler',
    'libs/js/@angular/core',
    'libs/js/@angular/http',
    'libs/js/@angular/platform-browser',
    'libs/js/@angular/platform-browser-dynamic',
    'libs/js/@angular/router',
    'libs/js/@angular/testing',
    'libs/js/@angular/upgrade'
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
      packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
            packages: packages
    }

      // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

  })(this);