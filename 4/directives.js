angular.module('directives', [])
.directive('collapse', function() {
  return {
    scope: {
      header: '@collapse'
    },
    template:
    '<ul class="list-group">' +
      '<li class="list-group-item collapse" ng-click="toggle()"><i class="glyphicon" ng-class="{\'glyphicon-chevron-right\': !visible, \'glyphicon-chevron-down\': visible}"></i> {{header}}</li>' +
      '<li class="list-group-item" ng-show="visible" ng-transclude></li>' +
    '</ul>',
    replace: true,
    transclude: true,
    link: function($scope, iElm, iAttrs, controller) {
      $scope.toggle = function() {
        $scope.visible = !$scope.visible;
      };
    }
  };
})

.directive('debug', function() {
  return {
    scope: true,
    template:
    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
      '<hr>' +
        '<pre>{{ form|json }}</pre>' +
      '<hr>' +
    '</div>'
  };
});
