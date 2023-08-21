let arr = [5, 3, 6, 2, 10,213,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15];


const insertionSort = (arr) => {

  for (let i = 1; i < arr.length; i++) {
    // Текущее значение в массиве приравниваем к переменной
    let currentVal = arr[i];
    // предыдущий элемент в массиве
    let min = i - 1;
    // Пока предыдущий элемент больше или равен 0 и предыдущий элемент больше текущего
    while (min >= 0 && arr[min] > currentVal) {
      // в противном случае, предыдущий элемент равен текущему
      arr[min + 1] = arr[min];
      // предыдущий элемент уменьшаем на 1
      min--;
    }
    // текущий элемент равен предыдущему
    arr[min+1] = currentVal;
  }
  return arr;
}

console.log(insertionSort(arr));


describe('Selection Sort', () => {
    test('increasing array', () => {
        expect(insertionSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
    });

    test('decreasing array', () => {
        expect(insertionSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
    });

    test('random array', () => {
        expect(insertionSort([1,-5,20,100,40,-4])).toEqual([-5,-4,1,20,40,100]);
    });
});