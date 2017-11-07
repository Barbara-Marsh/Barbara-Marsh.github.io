/**
 * Created by Barbara on 11/04/2017.
 */

var app = angular.module('myApp', []);

app.controller('AppCtrl', function ($scope) {
    $scope.date = new Date();
});
