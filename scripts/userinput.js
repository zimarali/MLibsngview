var app = angular.module('madlibsApp');

app.controller('inputCtrl' function($scope, $location, madlibsFactory){

  $scope.sendInfo = function(noun1, verb1, adj1, noun2, verb2, adj2){

     console.log(noun1, noun2);

  }


});
