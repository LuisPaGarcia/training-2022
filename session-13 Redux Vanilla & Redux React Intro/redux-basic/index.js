import { createStore } from "redux";

/*
  1. Definimos las acciones que vamos a utilizar en nuestro reducer
*/
const nameIncrementAction = "@counter/increment";
const nameDecrementAction = "@counter/decrement";
const nameResetAction = "@counter/reset";

const incrementAction = {
  type: nameIncrementAction,
};
const decrementAction = {
  type: nameDecrementAction,
};
const resetAction = {
  type: nameResetAction,
};

/**
 * 2.
 * Esto es un reducer, una función pura con el formato
 * (state, action) => newState. Describe como una acción transforma el estado
 * en el nuevo estado.
 *
 * La forma del estado depende de tí: puede ser un primitivo, un array, un
 * objeto, o incluso una estructura de datos de Immutable.js. La única parte
 * importante es que no debes modificar el objeto del estado, en vez de eso
 * devolver una nuevo objeto si el estado cambió.
 *
 * En este ejemplo, usamos `switch` y strings, pero puedes usar cualquier forma
 * que desees si tiene sentido para tu proyecto.
 */
function counterReducer(state = 0, action) {
  switch (action.type) {
    case nameIncrementAction:
      return state + 1;
    case nameDecrementAction:
      return state - 1;
    case nameResetAction:
      return 0;
    default:
      return state;
  }
}

// 3.
// Creamos un store de Redux almacenando el estado de la aplicación.
// Su API es { subscribe, dispatch, getState }.
let store = createStore(counterReducer);

// 4.
// Puedes suscribirte manualmente a los cambios, o conectar tu vista
// directamente
store.subscribe(() => {
  console.log("dispatch:", store.getState());
  // ** Descomenta esta linea, y repara el uso de redux para que funcione el counter
  // document.querySelector("#counter").innerHTML = store.getState();
});

// 5.
// La única forma de modificar el estado interno es despachando acciones.
// Las acciones pueden ser serializadas, registradas o almacenadas luego para
// volver a ejecutarlas.
// 1
store.dispatch(incrementAction);
// 2
store.dispatch(incrementAction);
// 3
store.dispatch(decrementAction);
// 2
store.dispatch(resetAction);
// 0
