import React, { useState, useEffect } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log("value logger" + value);
  }, [value]);
}
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => setValue(event.target.value);
  const clear = () => setValue("");
  return {
    bind: { value, onChange }, //Робиться це для того щоб input не отримував лишніх властивостей
    value,
    clear,
  };
}

function App() {
  const input = useInput("");
  useLogger(input.value);
  return (
    <div className={"container pt-3"}>
      <input type="text" {...input.bind} />
      <h1>{input.value}</h1>
      <button className="btn btn-warning" onClick={() => input.clear()}>
        Clear
      </button>
    </div>
  );
}

export default App;
