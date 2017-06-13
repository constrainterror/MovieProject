(function () {
    'use strict';
    angular.module('PELIS', ['ngRoute','rzModule']).config(config);
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);
        
        $routeProvider
                .when("/", {

                controller: 'homeController',
                templateUrl: 'views/inicio.html'
            })
                .otherwise({redirectTo : "/"});     
    }

})();