//var webpackConfig = require('./webpack.test');
var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [

      // ********* esri load ***********
      // must be able to serve these files for dojo require
      // NOTE: karma gives a cryptic error when 
      // files can't be found  (msg || "").replace is not a function
      { pattern: 'bower_components/dojo/**/*.*', included: false, watched: false },
      { pattern: 'bower_components/dojox/**/*.*', included: false, watched: false },
      { pattern: 'bower_components/dstore/**/*.*', included: false, watched: false },     
      { pattern: 'bower_components/dgrid/**/*.*', included: false, watched: false },
      
      { pattern: 'bower_components/dijit/**/*.*', included: false, watched: false },
      { pattern: 'bower_components/esri/**/*.*', included: false, watched: false },       

      // load dojoConfig so dojo knows where to "require" modules from
      { pattern: './dojoConfigTest.js', included: true, watched: false },
      
      // we need the actual dojo startup file for "require" to be defined
      { pattern: './bower_components/dojo/dojo.js', included: true, watched: false },


      // { pattern: './dojoConfigBrowser.js', included: true, watched: false },
      // 'http://js.arcgis.com/4.0/',

      // ************ END esri load ***************

      './karma-test-shim.js',
      './app/*.spec.ts',
    ],

    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap'],
      './app/*.spec.ts': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
      // stats: {
      //   colors: true
      // }
    },

    webpackServer: {
      noInfo: true
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_DEBUG,
    logLevel: config.LOG_INFO,

    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['Chrome'],
    //browsers: ['PhantomJS'],
    singleRun: false
  };

  config.set(_config);
};