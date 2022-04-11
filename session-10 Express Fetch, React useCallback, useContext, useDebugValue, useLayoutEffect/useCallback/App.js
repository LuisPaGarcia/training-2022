import React, { useState, useCallback } from "react";
import Dogs from "./Dogs";
import shuffleArray from "./shuffleArray";

const App = () => {
  const [text, setText] = useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  // Gets a new object reference when it is re-created.
  // It is re-created whenever DogPark re-renders.
  const fetchDog = (number) => {
    const result = fetch(`https://api.thedogapi.com/v1/breeds/`)
      .then((response) => response.json())
      .then((json) => shuffleArray(json).splice(0, number));

    return result;
  };

  return (
    <>
      <h1>Welcome to {text || "The Dog Park"}!</h1>
      <p>
        <label>
          Name your dog park:{" "}
          <input type="text" value={text} onChange={handleText} />
        </label>
      </p>
      <p>Add the perfect Dogs to your park! Maximum of 10.</p>
      <Dogs onFetchDog={fetchDog} />
    </>
  );
};

export default App;
