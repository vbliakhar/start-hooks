import React from "react";
import { useAlert } from "./alert/AlertContext";
function Main() {
  const { toggle } = useAlert();
  return (
    <>
      <h1>Hello with example context</h1>
      <button className="btn btn-success" onClick={toggle}>
        Show alert
      </button>
    </>
  );
}

export default Main;
