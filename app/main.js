angular.module('app', ['ui.router'])
var app = angular.module("app")

app.controller('Controller', function($scope) {
    
})

app.factory('usersList', function($q, $http){
    return{
      getUser: function (id){
        var url = 'https://jsonplaceholder.typicode.com/users/';

        var defer = $q.defer();
        var httpU = $http.get(url);
        httpU.then(function(users){
        var user = users.data.filter(function(user){
            return user.id == id;
        })
        defer.resolve(user);
      })
    return defer.promise;
      }
    }
  })

  
  app.component('home',{
      bindings: {
          getResolveUsers:'<'
      },
      template: 'Home page {{$ctrl.getResolveUsers}}',
      controller: function($scope, usersList){
        usersList.getUser(2).then(success, error);
        function success(user){
          $scope.user = user
        }
        function error(err){
          console.log('error')
        }
      }
  })

  app.config(function ($stateProvider){
    $stateProvider.state('home',{
      resolve:{
          getResolveUsers: function($http){
            var url = 'https://jsonplaceholder.typicode.com/users/';
            return $http.get(url)
          }
      },
      component: 'home'
    })
    
    $stateProvider.state('contacts', {
      template: 'Contacts list page',
      controller: function($scope){
      }
    });

  });