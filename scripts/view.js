var app = angular.module('madlibsApp');

app.controller('viewCtrl', function($scope, madlibsFactory){

  $scope.mlInput = madlibsFactory.mlInfo();

});
