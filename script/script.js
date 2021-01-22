
'use strict';


// Read more about me
var portafolio = angular.module('portafolio',[]);

portafolio.controller('readMoreController',function readMoreController($scope){
  $scope.readText = "Read More";

  $scope.read = function(){
    if($scope.readText === "Read More"){
      $scope.readText = "Hide";
      return $scope.readText;
    }
    else{
      $scope.readText = "Read More";
      return $scope.readText;
    }
}

readMoreController.$inject = ['$scope'];
});
