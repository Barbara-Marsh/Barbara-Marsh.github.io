/**
 * Created by Barbara Marsh on 11/04/2017.
 */

var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: './assets/templates/home.html' })
        .when('/about', { templateUrl: './assets/templates/about.html' })
        .otherwise({ redirectTo: "/" });
})
    .controller('AppCtrl', function ($scope, $rootScope, $location) {
        $scope.date = new Date();

        $scope.location = $location.path();
        $rootScope.$on('$routeChangeSuccess', function() {
            $scope.location = $location.path();
        });
    });
