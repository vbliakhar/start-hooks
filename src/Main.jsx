import React from "react";
import { useAlert } from "./alert/AlertContext";
function Main() {
  const { show } = useAlert();
  return (
    <>
      <h1>Hello with example context</h1>
      <button
        className="btn btn-success"
        onClick={() => show("it is my text MAin.js")}
      >
        Show alert
      </button>
    </>
  );
}

export default Main;
