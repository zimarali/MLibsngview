var app = angular.module('madlibsApp');

app.factory('madlibsFactory', function() {

  var mlInput = {};

  return {
    mlPass: mlPass,
    mlInfo: mlInfo
  };

  function mlPass(name, verb1, adj1, noun2, verb2, adj2) {

    mlInput.name = name;
    mlInput.verb1 = verb1;
    mlInput.adj1 = adj1;
    mlInput.noun2 = noun2;
    mlInput.verb2 = verb2;
    mlInput.adj2 = adj2;

  };

  function mlInfo() {

    return mlInput;

  };

});
