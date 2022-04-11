import React, { useState } from "react";
export function App() {
  // La funcion de handle!
  const [nombre, setNombre] = useState("");

  const handleOnChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <form>
      <label htmlFor="nombre">Nombre:</label>
      <input value={nombre} onChange={handleOnChange} id="nombre"></input>
      {/* Los demas campos y el boton aqui! */}
    </form>
  );
}

// para usar un controlled input, recuerda usar useState.
// el event.preventDefault() ayuda a no ejecutar el submit con un GET request, por defecto.
// cada campo debe llevar un value={} y un onChange={} para ser un controlled input
// puedes crear cuantos estados necesites!
