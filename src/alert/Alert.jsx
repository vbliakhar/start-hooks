import React from "react";
import { useAlert } from "./AlertContext";
function Alert() {
  const alert = useAlert();
  if (!alert.visible) return null;
  return (
    <div className="alert alert-danger" onClick={alert.hide}>
      <p>{alert.text}</p>
    </div>
  );
}

export default Alert;
