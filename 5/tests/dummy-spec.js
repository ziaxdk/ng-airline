describe("A suite", function() {
  beforeEach(module('directives'));

  it("contains spec with an expectation", function() {
    expect(beforeEach).not.toBeNull();
    expect(true).toBe(true);
  });
});