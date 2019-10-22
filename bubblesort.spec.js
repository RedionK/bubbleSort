describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles a one item array", function() {
    expect(bubbleSort([3])).toEqual([3]);
  });
  it("handles a one item array", function() {
    expect(bubbleSort([10])).toEqual([10]);
  });
  it("sorts the array", function() {
    expect(bubbleSort([3, 5, 5, 1, 4, 2])).toEqual([1, 2, 3, 4, 5, 5]);
  });
  it("sorts the array", function() {
    expect(bubbleSort([10, 7, 6, 9, 8])).toEqual([6, 7, 8, 9, 10]);
  });
});
