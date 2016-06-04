module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'public/bower_components/angular/angular.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/bower_components/spin.js/spin.js',
      'public/bower_components/angular-spinner/angular-spinner.js',
      'public/bower_components/angular-loading-spinner/angular-loading-spinner.js',
      'public/js/**/!(interface).js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    reporters: ['spec'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-spec-reporter'
    ]
  });
};
