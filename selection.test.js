let arr = [5, 3, 6, 2, 10];

function selectionSort(arr) {
  // 1. Find the minimum value in the array
  let min = 0;
//  2. Swap the minimum value with the value at the current index  
  let temp = 0;
//  3. Repeat until the array is sorted
while (min < arr.length-1){
  const  [value,index] = findMin(arr,min)
  temp = arr[min]
  arr[min] = value
  arr[index] = temp
  min++
} 
return arr
}


function findMin (num,min){
  let value = Infinity
  let index = 0
for (let i = min;i<num.length;i++){
if (num[i]<value){
  value = num[i]
  index = i
}
}
return [value,index]
}

console.log(selectionSort(arr));

describe('Selection Sort', () => {
    test('increasing array', () => {
        expect(selectionSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
    });

    test('decreasing array', () => {
        expect(selectionSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
    });

    test('random array', () => {
        expect(selectionSort([1,-5,20,100,40,-4])).toEqual([-5,-4,1,20,40,100]);
    });
});