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

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));