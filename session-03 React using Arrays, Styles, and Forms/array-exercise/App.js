import React from "react";

const arrayEstudiantes = [
  {
    nombre: "Andrea Martinez",
    promedio: 80,
    genero: "Femenino",
    asistencia: true,
  },
  {
    nombre: "Diego Renato",
    promedio: 61,
    genero: "Masculino",
    asistencia: false,
  },
  {
    nombre: "Jorge Alejandro",
    promedio: 100,
    genero: "Masculino",
    asistencia: true,
  },
  {
    nombre: "Norma Morales",
    promedio: 23,
    genero: "Femenino",
    asistencia: false,
  },
];

const arrayMaestros = [
  {
    nombre: "Vicente Fernandez",
    color: "green",
  },
  {
    nombre: "Lebron James",
    color: "orange",
  },
  {
    nombre: "Frank Ocean",
    color: "yellow",
  },
  {
    nombre: "Don React Yey-es",
    color: "blue",
  },
  {
    nombre: "LuisPa",
  },
];

function ItemMaestros() {
  return arrayMaestros.map((maestroObj) => (
    <li
      key={maestroObj.nombre}
      style={{
        backgroundColor: maestroObj.color ?? "red",
      }}
    >
      {maestroObj.nombre}
    </li>
  ));
}

function ItemEstudiantes() {
  return (
    arrayEstudiantes
      // .filter((estudianteObjFilter) => {
      //   return estudianteObjFilter.promedio > 50;
      // })
      .map((estudianteObj) => {
        if (estudianteObj.promedio <= 50) {
          return null;
        }

        return <li key={estudianteObj.nombre}>{estudianteObj.nombre}</li>;
      })
  );
}
export function App() {
  const listaARenderizar = "maestros";
  const listaEsEstudiante = listaARenderizar === "estudiantes";
  console.log(listaEsEstudiante);
  return (
    <div>
      {listaEsEstudiante ? (
        <ul>
          <ItemEstudiantes />
        </ul>
      ) : (
        <ol>
          <ItemMaestros />
        </ol>
      )}
    </div>
  );
}

// recuerda que puedes usar [].map para iterar sobre los elementos
// si de la funcion map retornas un `null` no se renderizará el elemento
// No olvides la propiedad `key` en el elemento a retornar
