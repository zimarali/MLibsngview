var app = angular.module('madlibsApp');

app.controller('inputCtrl', function($scope, $location, madlibsFactory){

  $scope.sendInput = function(name, verb1, adj1, place, noun2, verb2, adj2){

     madlibsFactory.mlPass(name, verb1, adj1, place, noun2, verb2, adj2);

     console.log(name, verb1, adj1, place, noun2, verb2, adj2);

  }

});
