import React, { useEffect, useState } from "react";

const Dogs = ({ onFetchDog }) => {
  const [number, setNumber] = useState(1);
  const [dogList, setDogList] = useState([]);

  // Runs the "fetchDog" function when either the number
  // variable or the onFetchDog variable changes.
  useEffect(
    () => {
      if (number && typeof onFetchDog === "function") {
        async function fetchDog() {
          const response = await onFetchDog(number);
          setDogList(response);
        }
        fetchDog();
      }
    },
    [onFetchDog, number] // dependencies of the useEffect
  );

  return (
    <>
      <label>
        Number of dogs:{" "}
        <input
          max="10"
          min="1"
          value={number}
          type="number"
          onChange={(event) => setNumber(event.target.value)}
        />
      </label>
      {dogList && (
        <ul>
          {dogList.map((dog) => (
            <li key={dog.id}>{dog.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Dogs;
