let arr = [1, 2, 4, 6, 7, 8, 43, 4, 2, 3, 4, 5, 6, 7, 8, 9];

const bubbleSort = function (arr) {
  // задаем цикл, который будет выполняться, пока массив не будет отсортирован
  for (let i = 0; i < arr.length; i++) {
    // задаем внутренний цикл, который будет сравнивать элементы попарно
    for (let j = 0; j < arr.length - i; j++) {
      // если элемент слева больше, чем элемент справа, то меняем их местами
      if (arr[j] > arr[j + 1]) {
        // задаем временную переменную, в которую помещаем значение элемента слева
        let temp = arr[j];
        // меняем местами элементы
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

console.log(bubbleSort(arr));



describe('Bubble Sort', () => {
    test('increasing array', () => {
        expect(bubbleSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
    });

    test('decreasing array', () => {
        expect(bubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
    });

    test('random array', () => {
        expect(bubbleSort([1,-5,20,100,40,-4])).toEqual([-5,-4,1,20,40,100]);
    });
});