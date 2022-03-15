// Rendering Lists

import React, { useState } from "react";

function App() {
  const [text, textSet] = useState("");
  const [apiResponse, apiResponseSet] = useState([]);

  const handleClick = async (event) => {
    try {
      event.preventDefault();
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
        }),
      };
      const response = await fetch("http://localhost:5000/message/", config);
      const data = await response.json();
      console.log(data);
      apiResponseSet((state) => state.concat(data.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form>
        <input value={text} onChange={(event) => textSet(event.target.value)} />
        <button onClick={handleClick}>Call Api</button>
      </form>
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
    </>
  );
}

export default App;
