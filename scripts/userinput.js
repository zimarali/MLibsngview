var app = angular.module('madlibsApp');

app.controller('inputCtrl', function($scope, $location, madlibsFactory){

  $scope.sendInput = function(name, verb1, adj1, place, noun1, verb2, adj2){

     madlibsFactory.mlPass(name, verb1, adj1, place, noun1, verb2, adj2);

     //$location.path('/inputdisplay');

     //console.log(name, verb1, adj1, place, noun1, verb2, adj2);

  }

});
