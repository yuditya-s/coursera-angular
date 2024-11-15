(function(){
  'use strict'; //limit the variable as non global usage
  angular.module('myFirstApp', []).controller('myFirstController', function($scope){
    $scope.name = "Yuditya";
    $scope.greeting = function(){
      return "Hello Coursera";
    }
  });
})();
