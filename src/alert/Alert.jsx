import React, { useContext } from "react";
import { AlertContext } from "../App";

function Alert() {
  const alert = useContext(AlertContext);
  if (!alert) return null;
  return (
    <div className="alert alert-danger">
      <p>This is a very, very important massager</p>
    </div>
  );
}

export default Alert;
