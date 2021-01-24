import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  const test = () => {
    return setCounter(counter + 6);
  };
  return (
    <div>
      <h1>
        <span className="badge badge-warning">Counter:</span>
        {counter}
      </h1>
      <button onClick={increment} className="btn btn-success">
        add
      </button>
      <button onClick={decrement} className="btn btn-danger">
        subtract
      </button>
      <button onClick={test} className="btn btn-dark">
        Test
      </button>
    </div>
  );
}

export default App;
