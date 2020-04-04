export default function bubbleSort(array, setArray, setColorArray) {
    let complete;
    const arrayLength = array.length;

    function bubblePass() {
      complete = false;

      setInterval(() => {
        if ( !complete ){
          for (let i = 0; i < arrayLength; i += 1) {
            complete = true
            setTimeout(() => {
              if (array[i] > array[i + 1]) {
                let tmpColorArray = Array(100)
                tmpColorArray[i] = "green"
                setColorArray(tmpColorArray)

                let tmp = array[i];
                let mutatedArray = array;
                mutatedArray[i] = array[i + 1];
                mutatedArray[i + 1] = tmp;
                complete = false;
                setArray([...mutatedArray]);
              } else {
                let tmpColorArray = Array(100)
                tmpColorArray[i] = "red"
                setColorArray(tmpColorArray)
              }
            }, i );
          }
        } else {
          clearInterval()
          return;
        }
      }, arrayLength  )
    }

    bubblePass();
  }

