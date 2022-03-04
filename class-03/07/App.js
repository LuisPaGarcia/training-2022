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
        {/* Create a list of li using the `allItemsSimple` array  */}
        {/* You can use [].map to iterate and return the JSX */}
      </ul>
      <hr></hr>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {/* Create a list of li using the `allItems` array  */}
        {/* Use [].map to iterate and return the JSX */}
      </ul>
    </div>
  );
}

export default App;
