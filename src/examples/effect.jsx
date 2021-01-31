import React, { useState, useEffect } from "react";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  // useEffect(() => {
  //   console.log("useEffect");
  // });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json)); //Асинхронний виклик JSON
    return () => {
      console.log("clean type");
    };
  }, [type]);
  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX, //mousemove->>clientX це координати мишки
      y: event.clientY,
    });
  };
  useEffect(() => {
    console.log("ComponentDidMount");
    window.addEventListener("mousemove", mouseMoveHandler); //Метод addEventListener() позволяет добавлять обработчики событий к любому объекту HTML DOM
  }, []);
  return (
    <div>
      {type}
      <hr />
      <button onClick={() => setType("users")}>users</button>
      <button onClick={() => setType("todos")}>todo</button>
      <button onClick={() => setType("posts")}>posts</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre>{" "} */}
      {/*Метод JSON. stringify() преобразует значение JavaScript в строку JSON, возможно с заменой значений, если указана функция замены, или с включением только определённых свойств, если указан массив замены.  */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
