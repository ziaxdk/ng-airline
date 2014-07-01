angular.module('services', [])
  .service('Rest', function($http) {
    this.getBookings = function (argument) {
      return $http.get('/api/2-2');
    };
  });
