(function() {
    'use strict';

    angular
        .module('PELIS')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope','$http','filmshttp'];
    function homeController($scope, $http, filmshttp) {
        $scope.movies=[];
        $scope.img='https://image.tmdb.org/t/p/w500';
        $scope.filmfinder= filmfinder;
        $scope.genremaker= genremaker;

        activate();

        ////////////////

        function activate() { 
            filmfinder();
            genremaker();

        }
    

    function filmfinder(){
        filmshttp.searchMovie()
        .then(function(movies){
            console.log(movies)
            $scope.movies = $scope.movies.concat(movies);
            })
        }
    function genremaker(){
        filmshttp.movieGenre()
        .then(function(genres){
            $scope.genres = genres; 
        })
    }
    }
})();