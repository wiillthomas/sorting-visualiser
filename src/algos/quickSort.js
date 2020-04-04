export default function quickSort(arr, left, right, setArray, setColorArray) {
  
  function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot];
    let partitionIndex = left;

    for (var i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }

    swap(arr, right, partitionIndex);

    return partitionIndex;
  }

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    setArray([...arr]);
  }

  
  let len = arr.length;
  let pivot;
  let partitionIndex;
  if (left < right) {
    pivot = right;
    let tmpColorArray = Array(100)
    tmpColorArray[ pivot ] = "red";
    tmpColorArray[ left ] = "blue";
    for ( let i = left; i < pivot; i += 1 ) {
      tmpColorArray[ i ] = "blue";
    }
    setColorArray( [...tmpColorArray] );

    partitionIndex = partition(arr, pivot, left, right);

    setTimeout(() => {
      quickSort(arr, left, partitionIndex - 1, setArray, setColorArray);
    }, 200);
    setTimeout(() => {
      quickSort(arr, partitionIndex + 1, right, setArray, setColorArray);
    }, 250);
  }
  return arr;
}