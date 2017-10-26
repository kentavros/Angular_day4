angular.module('app');
app.config(function($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world! </h3>'
    }
  
    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    var pageState = {
        name: 'page',
        url: '/page/:id',
        template: '<h1>Page</h1>'
    }
  
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
    $stateProvider.state(pageState);
  });