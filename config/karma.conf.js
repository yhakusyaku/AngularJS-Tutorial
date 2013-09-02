// Contents of: config/karma.conf.js
module.exports = function (config) {
  config.set({
    basePath : '../',

    // Fix for "JASMINE is not supported anymore" warning
    frameworks : ["jasmine"],

    files : [
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    browsers : ['PhantomJS'],
    hostname : process.env.IP,
    port : process.env.PORT,
    runnerPort : 0,

    captureTimeout : 5000,
    
    singleRun: true,

    junitReporter : {
      outputFile : 'test_out/unit.xml',
      suite      : 'unit'
      //...
    }
  });
}