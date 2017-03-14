var app = angular.module('madlibsApp');

app.factory('madlibsFactory', function() {

  var mlInput = {};

  return {
    pass: pass,
    bringItBack: bringItBack
  };

  function pass(noun1, verb1, adj1, noun2, verb2, adj2) {

    mlInput.noun1 = noun1;
    mlInput.verb1 = verb1;
    mlInput.adj1 = adj1;
    mlInput.noun2 = noun2;
    mlInput.verb2 = verb2;
    mlInput.adj2 = adj2;
    console.log(mlInput);

  };

  function bringItBack() {

    return ourInfo;

  };

});
