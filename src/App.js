import React, { useState, useCallback } from "react";
import ItemsList from "./ItemsList";
function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);
  const styles = {
    color: colored ? "red" : "green",
  };
  const generateItemsFromAPI = useCallback(
    (index) => {
      return new Array(count).fill("").map((_, i) => `Element ${i + index}`);
    },
    [count]
  );
  return (
    <>
      <h1 style={styles}>Numbers of elements {count}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setCount((pre) => pre + 1)}
      >
        Add
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((pre) => !pre)}
      >
        Change
      </button>
      <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
}
export default App;
