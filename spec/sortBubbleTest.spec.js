const {bubbleSort} = require("../src/sortBubble");

fdescribe('Sorting for array', () => {
    const array = [6, 3, 2, 9, 1, 10, 15, -4, -7];

    it('Verify sorting', () => {
        expect(bubbleSort([...array])).toEqual([...array].sort((a, b) => a - b), '');
    })

    //it('Bubble sorting in a progress', () => {
      //  expect(bubbleSort([6, 3, 2, 9, 1])[array.length - 1]).toBe([1, 3, 2, 9, 1]);
   // })

    // fit('Bubble sorting in a progress', () => {
    //     expect(bubbleSort(array)[array.length-1]).toEqual(bubbleSort(array));
    // })
    //
    // fit('Compare for elements', () => {
    //     expect(bubbleSort(array)).toBe(Math.max(...arr), "Result correct");
    // })
});
