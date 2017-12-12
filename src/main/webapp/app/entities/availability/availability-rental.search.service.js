(function() {
    'use strict';

    angular
        .module('carsOnRentApp')
        .factory('AvailabilitySearch', AvailabilitySearch);

    AvailabilitySearch.$inject = ['$resource'];

    function AvailabilitySearch($resource) {
        var resourceUrl =  'api/_search/availabilities/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
