// useRef & Api Call

import React, { useRef, useState } from "react";

function App() {
  const [message, messageSet] = useState("");
  const [apiResponse, apiResponseSet] = useState([]);
  const inputRef = useRef(null);

  const handleClick = async (event) => {
    try {
      event.preventDefault();
      if (message === "") return;

      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message,
        }),
      };

      const response = await fetch("http://localhost:5000/message/", config);
      const data = await response.json();
      console.log(data);
      apiResponseSet((state) => state.concat(data.data));
      messageSet("");
      inputRef.current.focus();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form>
        <input
          value={message}
          onChange={(event) => messageSet(event.target.value)}
          placeholder="Message"
          ref={inputRef}
        />
        <button onClick={handleClick} disabled={message === ""}>
          Call Api
        </button>
      </form>
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
    </>
  );
}

export default App;
