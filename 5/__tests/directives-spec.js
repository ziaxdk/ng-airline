describe("module directives", function() {
  beforeEach(module('directives'));

  describe("collapse", function() {

    var scope,
        html = '<div collapse="foobar"><div class="test-ng-transclude" style="height: 10px">Hello</div></div>';

    beforeEach(inject(function($injector) {
      scope = $injector.get('$rootScope');
    }));
   
    afterEach(function() {
      scope.$destroy();
    });


    it('should expand when clicked', inject(function ($compile) {
      var element = $($compile(html)(scope));
      scope.$digest();
      
      expect($('li', element)).toHaveLength(2);
      expect($('li:nth-child(1) > i', element)).toHaveClass('glyphicon-chevron-right');
      expect($('li:nth-child(2)', element)).toContainElement('div.test-ng-transclude');
      expect($('li:nth-child(2)', element)).toHaveClass('ng-hide');

      $('li:nth-child(1)', element).click();

      expect($('li:nth-child(1) > i', element)).toHaveClass('glyphicon-chevron-down');
      expect($('li:nth-child(2)', element)).not.toHaveClass('ng-hide');
    }));


  });
});