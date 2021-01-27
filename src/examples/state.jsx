// import React, { useState } from "react";

function computeInitialCounter() {
  console.log("Some calculations ...");
  return Math.trunc(Math.random() * 10);
}

function App() {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter());
  const [counter, setCounter] = useState(() => computeInitialCounter()); //щоб не викликаласть повторно функція computeInitialCounter

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now(),
  });
  function increment() {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    // setCounter((prev) => prev + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  function updateState() {
    setState((prev) => {
      return {
        ...prev,
        title: "update Title",
      };
    });
  }
  // const change = () => setState({ title: "change Title" });
  return (
    <div>
      <h1>
        <span className="badge badge-warning">Counter:</span>
        {counter}
        <hr />
        {state.title}
      </h1>
      <button onClick={increment} className="btn btn-success">
        add
      </button>
      <button onClick={decrement} className="btn btn-danger">
        subtract
      </button>
      <button onClick={updateState} className="btn btn-default">
        Change title name
      </button>
    </div>
  );
}

export default App;
