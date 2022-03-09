import React from "react";
export function App() {
  // La funcion de handle!
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [ciudad, setCiudad] = React.useState("");
  const [edad, setEdad] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form>
      <label htmlFor="nombre">Nombre:</label>
      <input
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        id="nombre"
      ></input>

      <label htmlFor="apellido">Apellido:</label>
      <input
        value={apellido}
        onChange={(event) => setApellido(event.target.value)}
        id="apellido"
      ></input>

      <label htmlFor="ciudad">Ciudad:</label>
      <input
        value={ciudad}
        onChange={(event) => setCiudad(event.target.value)}
        id="ciudad"
      ></input>

      <label htmlFor="edad">Edad:</label>
      <input
        value={edad}
        onChange={(event) => setEdad(event.target.value)}
        id="edad"
      ></input>

      {/* <button onClick={handleClick}>Submit</button> */}
      {/* {submitted ? ( */}
      <p>
        Mi nombre es {nombre} {apellido}, soy de {ciudad} y tengo {edad} años
      </p>
      {/* ) : null} */}
    </form>
  );
}
