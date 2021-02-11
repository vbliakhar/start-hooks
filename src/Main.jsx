import React from "react";

function Main({ toggleAlert }) {
  return (
    <>
      <h1>Hello with example context</h1>
      <button className="btn btn-success" onClick={toggleAlert}>
        Show alert
      </button>
    </>
  );
}

export default Main;
