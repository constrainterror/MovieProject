(function() {
    'use strict';

    angular
        .module('PELIS')
        .factory('filmshttp', filmshttp);

    filmshttp.$inject = ['$http'];
    function filmshttp($http) {
        var service = {
            searchMovie:searchMovie,
            movieGenre:movieGenre
        };
        
        var staticUrl='https://api.themoviedb.org/3';
        var APIkey='api_key=c2b981b82300ca00fbdde242818c45c7'
        return service;

        ////////////////
        function searchMovie() {
            return $http.get(staticUrl+'/discover/movie?'+APIkey+'&language=en-US&sort_by=popularity.desc&page=1')
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
    }
})();