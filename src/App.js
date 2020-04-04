import React, { useState, useEffect } from "react";
import { bubbleSort, quickSort, insertionSort } from "./algos/index"
import "./App.css";


function App() {
  const [array, setArray] = useState(Array(100));
  const [colorArray, setColorArray] = useState(Array(100));

  useEffect(() => {
    randomiseArray();
  }, []);

  function randomiseArray() {
    setColorArray([])
    let newArray = [];
    for (let i = 0; i < array.length; i += 1) {
      newArray.push(Math.floor(Math.random() * 100));
    }
    setArray(newArray);
  }

  function handleDraw(e, id) {
    if (e.buttons == 1 || e.buttons == 3 ) {
      setColorArray([])
      let pagePosition = e.clientY - e.target.offsetTop;
      let graphPosition = Math.abs((pagePosition - 399) / 2);
      let mutatedArray = array;
      mutatedArray[id] = graphPosition;
      setArray([...mutatedArray]);
    }
  }

  return (
    <div className="app__wrapper">
      <div className="header">
        <h2>Sorting Algo Visualiser</h2>
        <h3>Will Thomas</h3>
        <button className="button-primary" onClick={() => randomiseArray()}>
          Randomise Array
        </button>
      </div>
      <div className="array__container">
        <div className="bars__background">
          {array.map((element, id) => (
            <div
              onMouseMove={e => handleDraw(e, id)}
              key={id}
              style={{ height: "100%" }}
            ></div>
          ))}
        </div>
        <div className="bars">
          {array.map((element, id) => {
            if ( colorArray[ id ] ){
              return <div key={id} style={{ height: `${element}%`, background: colorArray[ id ] }}></div>
            } else {
              return <div key={id} style={{ height: `${element}%` }}></div>
            }
          }
          )}
        </div>
      </div>
      <div className="controls">
        <button
          className="button-primary"
          onClick={() => bubbleSort(array, setArray, setColorArray)}
        >
          Bubble Sort
        </button>
        <button
          className="button-primary"
          onClick={() => insertionSort([...array], setArray, setColorArray)}
        >
          Insertion Sort
        </button>
        <button
          className="button-primary"
          onClick={() => quickSort([...array], 0, array.length - 1, setArray, setColorArray)}
        >
          Quick Sort
        </button>
      </div>
      <div className="instructions">
        <div className="row">
          <span>✏️</span><span>Draw on the array grid with your mouse or click 'Random Array' for a randomised array.</span>
        </div>
        <div className="row">
          <span>📈</span><span>Click the different sorting algorithms to visualise the array being sorted!</span>
        </div>
      </div>
    </div>
  );
}

export default App;
