'use strict';
angular
.module("myApp2", ["ngAnimate"])
.controller("rightController", ['$scope', '$rootScope', function ($scope, $rootScope) {
$scope.arRandom=[];
  for (var i=0;i<10;i++){$scope.arRandom[i]=1+Math.random();}
  	$scope.moveDir=function(data){
$rootScope.wave='one';
  	}
}]);