(function() {
    'use strict';
    angular
        .module('carsOnRentApp')
        .factory('Car', Car);

    Car.$inject = ['$resource'];

    function Car ($resource) {
        var resourceUrl =  'api/cars/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
