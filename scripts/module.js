var app = angular.module('madlibsApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $routeProvider
    .when('/userinput', {
      controller: 'inputCtrl',
      templateUrl:  'views/user-input.html'
    })
    .when('/inputdisplay', {
      controller: 'viewCtrl',
      templateUrl: 'views/input-display.html'
    })

    $locationProvider.hashPrefix('');

});
