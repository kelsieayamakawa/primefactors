/* globals projectEulerThree */

describe("Primefactors", function() {

  it("should be able to find the largest prime factor of 2", function() {
    expect(projectEulerThree(2)).toEqual(2);
  });

  it("should be able to find the largest prime factor of 2", function() {
    expect(projectEulerThree(10)).toEqual(5);
  });

  it("should be able to find the largest prime factor of 2", function() {
    expect(projectEulerThree(239)).toEqual(239);
  });
});
