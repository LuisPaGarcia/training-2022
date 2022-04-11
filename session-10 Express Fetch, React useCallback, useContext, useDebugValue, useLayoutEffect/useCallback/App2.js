import React, { useState, useCallback } from "react";
import Dogs from "./Dogs";
import shuffle from "./shuffleArray";

const App = () => {
  const [text, setText] = useState("");
  const [charRange, setCharRange] = useState("A-M");

  const handleText = (event) => {
    setText(event.target.value);
  };

  // Now the fetchDog function is wrapped in the
  // useCallback hook, with "charRange" in the hook's
  // dependency array.
  const fetchDog = useCallback(
    (number) => {
      const result = fetch(`https://api.thedogapi.com/v1/breeds/`)
        .then((response) => response.json())
        .then((json) =>
          shuffle(
            json.filter((dog) => {
              return charRange === "A-M"
                ? dog.name[0] < "N"
                : dog.name[0] > "M";
            })
          ).splice(0, number)
        );

      return result;
    },
    [charRange]
  );

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
      <p>
        <label>
          A-M
          <input
            type="radio"
            checked={charRange === "A-M"}
            onChange={() => setCharRange("A-M")}
          />
        </label>
        <label>
          N-Z
          <input
            type="radio"
            checked={charRange === "N-Z"}
            onChange={() => setCharRange("N-Z")}
          />
        </label>
      </p>
      <Dogs onFetchDog={fetchDog} />
    </>
  );
};

export default App;
