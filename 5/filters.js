angular.module('filters', [])
  .filter('seat', function() {
    return function(val) {
      if (!val || val === '') return 'n/a';
      return val;
    };
  });
