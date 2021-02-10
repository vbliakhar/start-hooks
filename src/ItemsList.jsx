import React, { useEffect, useState } from "react";

function ItemsList({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const newItems = getItems(42);
    setItems(newItems);
    console.log("useEffect");
  }, [getItems]);
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default ItemsList;
