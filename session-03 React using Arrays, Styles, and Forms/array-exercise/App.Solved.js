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
    color: "red",
  },
  {
    nombre: "Don React Yey-es",
    color: "blue",
  },
];

export function App() {
  return (
    <div>
      <ul>
        {arrayEstudiantes.map((estudiante) => {
          return estudiante.asistencia ? (
            <li key={estudiante.nombre}>{estudiante.nombre}</li>
          ) : null;
        })}
      </ul>
      <ul>
        {arrayMaestros.map((maestro) => {
          return (
            <li key={maestro.nombre} style={{ color: maestro.color }}>
              {maestro.nombre}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// recuerda que puedes usar [].map para iterar sobre los elementos
// si de la funcion map retornas un `null` no se renderizará el elemento
// No olvides la propiedad `key` en el elemento a retornar
