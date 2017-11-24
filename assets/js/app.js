/**
 * Created by Barbara Marsh on 11/04/2017.
 */

var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: '../templates/home.html' })
        .when('/about', { templateUrl: '../templates/about.html' })
        .otherwise({ redirectTo: "/" });
})
    .controller('AppCtrl', function ($scope) {
        $scope.date = new Date();
    });
