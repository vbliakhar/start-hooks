import React, { useState, useEffect, useRef } from "react";
//Якщо ми хочем зберехти щось між рендерами ми використовуєм хук useRef // при цьому він не  викликає сам рендер
//Також часто використовують при фокусі апо посиланні на певний елемент дом дерева
//Ми хояем отримувати значення попереднього Стейта
function App() {
  // const [renderCount, setrenderCount] = useState(1);
  const [value, setValue] = useState("text");
  const renderCount = useRef(1); // useRef - це обєкт .. тому коли  щось  міняєм то нееобхідно звертатись до current
  const inputRef = useRef(null);
  const prevValue = useRef("");
  useEffect(() => {
    renderCount.current++; // приклад  змін і звернення до current
    console.log(inputRef.current.value);
  });
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>
        My Count <span style={{ color: "red" }}>{renderCount.current}</span>
      </h1>
      <h1>Previous conditiona {prevValue.current}</h1>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>
        Focus
      </button>
    </div>
  );
}

export default App;
