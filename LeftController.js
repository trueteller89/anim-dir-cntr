'use strict';
angular
.module("myApp1", ["ngAnimate"])
.controller("leftController", ['$scope', '$rootScope', function ($scope, $rootScope) {
$scope.arRandom=[];
  for (var i=0;i<10;i++){$scope.arRandom[i]=Math.random();}
  		$scope.moveDir=function(data){
$rootScope.wave='two';
  	}
}]);