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
        $scope.newMovie= {};
        $scope.detailView= detailView;
        $scope.GenreFilter= GenreFilter;
        $scope.topRatedd= topRatedd;
        $scope.Popular= Popular;
        $scope.Release= Release;
        $scope.ReleaseSlider = ReleaseSlider;
        $scope.searchFilmss= searchFilmss;
        $scope.totalresults= totalresults;
        $scope.amountresults= {};
       
        $scope.slider = {
            minValue: 1895,
            maxValue: 2050,
            options: {
                floor: 1960,
                ceil: 2000,
                step: 1,
                noSwitching: true
            }
        };
        activate();

        ////////////////

        function activate() { 
            filmfinder();
            genremaker();
            totalresults();

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
    function detailView(movie){
        $scope.newMovie = movie;
    }
    function GenreFilter(genreId){
        filmshttp.genrefilter(genreId)
        .then(function(movies){
            $scope.movies = movies;
        })
    }
    function topRatedd(){
             filmshttp.topRated()
             .then(function(movies){
                 $scope.movies = movies;
             })
         }
     function Popular(){
             filmshttp.popular()
             .then(function(movies){
                 $scope.movies = movies;
             })
         }
    function Release(){
             filmshttp.release()
             .then(function(movies){
                 $scope.movies = movies;

             })
         }
    function searchFilmss(buscapeli){
             filmshttp.searchFilms(buscapeli)
             .then(function(movies){
                 $scope.movies = movies;
             })
         }
        
        function totalresults(){
                filmshttp.totalResults()
                .then(function(response){
                    $scope.amountresults = response;
                })
        }
    
        function ReleaseSlider(){
            filmshttp.releaseSlider($scope.slider.minValue, $scope.slider.maxValue )
            .then(function(movies){
                $scope.movies = movies;

            })
        }
    }
})();