import React from "react";
import { useAlert } from "./AlertContext";
function Alert() {
  const alert = useAlert();
  if (!alert.visible) return null;
  return (
    <div className="alert alert-danger" onClick={alert.toggle}>
      <p>This is a very, very important massager</p>
    </div>
  );
}

export default Alert;
