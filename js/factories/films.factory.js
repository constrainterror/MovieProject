(function() {
    'use strict';

    angular
        .module('PELIS')
        .factory('filmsfactory', filmsfactory);

    filmsfactory.$inject = [];
    function filmsfactory($inject) {
        var service = {
            getAll:getAll
        };
        
        return service;

        ////////////////
        function getAll() { }
    }
})();