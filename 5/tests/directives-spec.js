describe("module directives", function() {
  beforeEach(module('directives'));

  describe("collapse", function() {

    var scope,
        html = '<div collapse="foobar"><span class="test-ng-transclude"></span></div>';

    beforeEach(inject(function($injector) {
      scope = $injector.get('$rootScope');
    }));
   
    afterEach(function() {
      scope.$destroy();
    });


    it('should have classes', inject(function ($compile) {
      var element = $($compile(html)(scope));
      scope.$digest();
      
      console.log(element);

      expect($('li', element).length).toBe(2);
      expect($('li:nth-child(1) > i', element)).toHaveClass('glyphicon-chevron-right');
      expect($('li:nth-child(2)', element)).toContainElement('span.test-ng-transclude');
      expect($('li:nth-child(2)', element)).toBeHidden();

      $('li:nth-child(1)', element).click();
      console.log(element)
      expect($('li:nth-child(1) > i', element)).toHaveClass('glyphicon-chevron-down');
      expect($('li:nth-child(2)', element)).toBeVisible();
    }));


  });
});