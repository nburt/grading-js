describe("GradeParser", function () {

  it("returns an array of up/down/even for the given array", function () {
    var result = GradeParser.getMovements([6, 3, 5, 4, 3, 4, 4, 5]);
    expect(result).toEqual(["down", "up", "down", "down", "up", "even", "up"]);
  });

  it("can tell if a student is in decline", function () {
    var result = GradeParser.getTrend([10, 10, 10, 9, 9, 8, 8, 8, 8, 7]);
    expect(result).toEqual("in decline");
  });

  it("tests another case of a student in decline", function () {
    var result = GradeParser.getTrend([10, 9, 8, 7]);
    expect(result).toEqual("in decline");
  });

  it("tests another case of a student in decline", function () {
    var result = GradeParser.getTrend([10, 9, 8, 7, 8, 7, 6, 5]);
    expect(result).toEqual("in decline");
  });

  it("can tell if a student is not in decline", function () {
    var result = GradeParser.getTrend([10, 9, 8, 7, 8, 7, 6 ]);
    expect(result).toEqual("not in decline");
  });

  it("tests another case of a student who is not in decline", function () {
    var result = GradeParser.getTrend([10, 9, 8, 8, 8, 8]);
    expect(result).toEqual("not in decline");
  });

  it("tests another case of a student who is not in decline", function () {
    var result = GradeParser.getTrend([10, 11, 12, 13]);
    expect(result).toEqual("not in decline");
  });

});
