const binarySearch = (arrSorted, target) => {
  let left = 0;
  let right = arrSorted.length - 1;




  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arrSorted[mid] === target) {
      return mid;
    } else if (arrSorted[mid] < target) {
      left = mid + 1;
    } else if (arrSorted[mid] > target) {
      right = mid - 1;
    } 
  } 
  return undefined;


}


describe('Binary Search', () => {
    test('odd length array', () => {
        const array = [0,100,200,300,400];
        expect(binarySearch(array, 0)).toEqual(0);
        expect(binarySearch(array, 100)).toEqual(1);
        expect(binarySearch(array, 200)).toEqual(2);
        expect(binarySearch(array, 300)).toEqual(3);
        expect(binarySearch(array, 400)).toEqual(4);

        expect(binarySearch(array, 123)).toEqual(undefined);
    });

    test('even length array', () => {
        const array = [0,100,200,300,400,500];
        expect(binarySearch(array, 0)).toEqual(0);
        expect(binarySearch(array, 100)).toEqual(1);
        expect(binarySearch(array, 200)).toEqual(2);
        expect(binarySearch(array, 300)).toEqual(3);
        expect(binarySearch(array, 400)).toEqual(4);
        expect(binarySearch(array, 500)).toEqual(5);

        expect(binarySearch(array, 123)).toEqual(undefined);
    });

    test('single element array', () => {
        const array = [100];
        expect(binarySearch(array, 100)).toEqual(0);

        expect(binarySearch(array, 123)).toEqual(undefined);
    });

    test('empty array', () => {
        expect(binarySearch([], 123)).toEqual(undefined);
    })
});