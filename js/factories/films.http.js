(function() {
    'use strict';

    angular
        .module('PELIS')
        .factory('filmshttp', filmshttp);

    filmshttp.$inject = ['$http'];
    function filmshttp($http) {
        var service = {
            searchMovie:searchMovie,
            movieGenre:movieGenre,
            genrefilter:genrefilter,
            topRated:topRated,
            popular:popular,
            release:release,
            searchFilms:searchFilms,
            totalResults:totalResults,
            releaseSlider:releaseSlider
        };
        
        var staticUrl='https://api.themoviedb.org/3';
        var APIkey='api_key=c2b981b82300ca00fbdde242818c45c7';
        var genre='&with_genres='

        return service;

        ////////////////
        function searchMovie() {
            return $http.get(staticUrl+'/discover/movie?'+APIkey+'&language=es-ES&sort_by=popularity.desc&page=1')
            .then(function(response){
                return response.data.results;
            });
         }
         function movieGenre(){
             return $http.get(staticUrl+'/genre/movie/list?'+APIkey+'&language=en-US')
             .then(function(response){
                 return response.data.genres;
             })
         }
         function genrefilter(genreId){
              return $http.get(staticUrl+'/discover/movie?'+APIkey+'&language=es-ES&sort_by=popularity.desc&page=1'+genre+genreId)
             .then(function(response){
                 return response.data.results;
             })
         }
         function topRated(){
            return $http.get(staticUrl+'/discover/movie?'+APIkey+'&language=es-ES&sort_by=vote_average.desc&page=1')
            .then(function(response){
                return response.data.results;
            })
        }
         function popular(){
            return $http.get(staticUrl+'/discover/movie?'+APIkey+'&language=es-ES&sort_by=popularity.desc&page=1')
            .then(function(response){
                return response.data.results;
            })
        }
        function release(){
            return $http.get(staticUrl+'/discover/movie?'+APIkey+'&language=es-ES&sort_by=release_date.desc&page=1')
            .then(function(response){
                return response.data.results;
            })
        }
        function searchFilms(buscapeli){
            return $http.get(staticUrl+'/search/movie?'+APIkey+'&query='+buscapeli+'&page=1')
            .then(function(response){
                return response.data.results;
            })
        }
        function totalResults(){
            return $http.get(staticUrl+'/discover/movie?'+APIkey+'&language=es-ES&sort_by=popularity.desc&page=1')
            .then(function(response){
                return response.data.total_results;
            })
        }

         function year() {
            return $http.get(staticUrl+'/discover/movie?'+APIkey+'&language=es-ES&sort_by=popularity.desc&page=1')
            .then(function(response){
                return response.data.results;
            });
        }

        function releaseSlider(minimumYear, maximumYear){
            console.log(' Voy a buscar las pelis entre el año ' + minimumYear  + ' y '  + maximumYear);
            return $http.get(staticUrl+'/discover/movie?'+APIkey+'&language=es-ES&sort_by=primary_release_date.asc&page=1&primary_release_date.gte='+minimumYear+'&primary_release_date.lte='+maximumYear)
            .then(function(response){
                return response.data.results;
            })
        }
    }
})();