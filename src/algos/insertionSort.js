export default function insertionSort(arr, setArray, setColorArray) { 
    let length = arr.length;
    let arrayAnimation = [];
    let colorArrayAnimations = [];
    
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;

            while ( j >= 0 && arr[j] > key ) {
              arr[j + 1] = arr[j];
              j = j - 1;
              arrayAnimation.push([...arr])
              let tmpColorArray = Array(100)
              tmpColorArray[ j + 1 ] = "green"
              colorArrayAnimations.push( [...tmpColorArray] )
            }
            arr[j + 1] = key;


    }
    for ( let i = 0; i < arrayAnimation.length; i += 1 ) {
      setTimeout(() => {
        setArray( [...arrayAnimation[i]] )
        setColorArray( [...colorArrayAnimations[i]] )
      },  )
    }
};