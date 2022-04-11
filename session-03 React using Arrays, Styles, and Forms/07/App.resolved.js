// Rendering Lists

import React from "react";

const allItemsSimple = ["apple", "orange", "grape", "pear"];
const allItems = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function App() {
  return (
    <div className="keys">
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {allItemsSimple.map(function (simpleItem) {
          return <li key={simpleItem}>{simpleItem}</li>;
        })}
      </ul>
      <hr></hr>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {allItemsSimple.map(function (complexItem) {
          return <li key={complexItem.id}>{complexItem.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
