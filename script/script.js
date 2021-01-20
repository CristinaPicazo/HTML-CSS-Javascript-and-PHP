$(document).ready(function(){
    //About me card
    $('[data-toggle="tooltip"]').tooltip();

    //flip
    AOS.init({
      duration: 1200,
    });

    (function(){
      'use strict';
      
      angular.module('portafollio',[])
    .controller('readMore',readMore);

    function readMore($scope){
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
    }

    })();
    });
