var app = angular.module("app", ["ngAnimate","myApp1","myApp2"]);
app.directive('switcher', ['$timeout', function($timeout) {
        return {
        	restrict:'AE',
            link: function($scope, $element, $attrs) {
        
            }
        }
    }]);