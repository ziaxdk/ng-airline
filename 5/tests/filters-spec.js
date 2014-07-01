describe("module directives", function() {
  beforeEach(module('filters'));

  describe("collapse", function() {

    var scope,
        html = '<div>{{data|seat}}</div>';

    beforeEach(inject(function($injector) {
      scope = $injector.get('$rootScope');
    }));
   
    afterEach(function() {
      scope.$destroy();
    });

    it('should contain 17C when provided value is 17C', inject(function($compile) {
      var element = $($compile(html)(scope));
      scope.data = '17C';
      scope.$digest();

      expect($(element)).toHaveHtml('17C');
    }));


    it('should contain n/a when provided value is empty', inject(function($compile) {
      var element = $($compile(html)(scope));
      scope.data = '';
      scope.$digest();

      expect($(element)).toHaveHtml('n/a');
    }));

    it('should contain n/a when provided value is null', inject(function($compile) {
      var element = $($compile(html)(scope));
      scope.data = null;
      scope.$digest();

      expect($(element)).toHaveHtml('n/a');
    }));

    it('should contain n/a when provided value is undefined', inject(function($compile) {
      var element = $($compile(html)(scope));
      scope.data = undefined;
      scope.$digest();

      expect($(element)).toHaveHtml('n/a');
    }));
  });
});