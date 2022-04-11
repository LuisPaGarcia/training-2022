import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [name, nameSet] = useState('');
  const [number, numberSet] = useState('');

  const handleOnChangeName = (event) => {
    const re = /^[a-zA-Z ]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      nameSet(event.target.value);
    }
  };

  const handleOnChangeNumber = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      numberSet(event.target.value);
    }
  };
  return (
    <div>
      <label>
        Name:
        <input value={name} onChange={handleOnChangeName} />
      </label>
      <br />
      <label>
        Number:
        <input value={number} onChange={handleOnChangeNumber} />
      </label>
    </div>
  );
}

