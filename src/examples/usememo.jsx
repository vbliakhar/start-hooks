import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  console.log("complexCompute");
  let i = 0;
  while (i < 2000000000) i++;
  console.log(i);
  return num * 2;
}
function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? "red" : "blue",
    };
  }, [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("useEffect");
  }, [styles]);
  return (
    <>
      <h1 style={styles}>
        Calculated value {number} {computed}
      </h1>
      <p className={"text-danger text-center"}>Test</p>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((pre) => pre + 1)}
      >
        Add
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setNumber((pre) => pre - 1)}
      >
        subtract
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((pre) => !pre)}
      >
        Colored
      </button>
    </>
  );
}
export default App;
