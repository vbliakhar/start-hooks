import React, { useState, useEffect } from "react";

function App() {
  const [type, setType] = useState("users");

  // useEffect(() => {
  //   console.log("useEffect");
  // });
  useEffect(() => {
    console.log("type-change", { type });
  }, [type]);
  return (
    <div>
      {type}
      <hr />
      <button onClick={() => setType("users")}>users</button>
      <button onClick={() => setType("todo")}>todo</button>
      <button onClick={() => setType("posts")}>posts</button>
    </div>
  );
}

export default App;
