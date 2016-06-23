(function(window) {
  // set up your dojoConfig
  window.dojoConfig = {
    baseUrl: '',
    deps: ['app/main'],
    packages: [
      'app',
      'dijit',
      'dojo',
      'dojox',
      'dstore',
      'dgrid',
      'esri', {
        name: 'moment',
        location: 'moment',
        main: 'moment'
      }
    ]
  };
});