import React from "react";
import { useAlert } from "../alert/AlertContext";
function MyTextTest() {
  const textTest = useAlert();
  if (!textTest.display)
    return (
      <>
        <hr />
        <button onClick={textTest.textChange}>Show My Text Test</button>
      </>
    );
  return (
    <div>
      <hr />
      <button onClick={textTest.textChange}>Show My Text Test</button>
      <p>My Text what i thing</p>
      <h1>{textTest.test}</h1>
    </div>
  );
}

export default MyTextTest;
