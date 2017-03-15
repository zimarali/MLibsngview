var app = angular.module('madlibsApp');

app.controller('inputCtrl', function($scope, $location, madlibsFactory){

  $scope.sendInput = function(noun1, verb1, adj1, noun2, verb2, adj2){

     madlibsFactory.mlPass(noun1, verb1, adj1, noun2, verb2, adj2)

  }

});
