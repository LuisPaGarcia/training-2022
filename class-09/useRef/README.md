# useRef and useEffect: DOM interaction

## Background

Often when working with React you'll need to integrate with UI libraries. Some
of these need to work directly with the DOM. Remember that when you do:
`<div>hi</div>` that's actually syntactic sugar for a `React.createElement` so
you don't actually have access to DOM nodes in your function component. In fact,
DOM nodes aren't created at all until the `ReactDOM.render` method is called.
Your function component is really just responsible for creating and returning
React Elements and has nothing to do with the DOM in particular.

So to get access to the DOM, you need to ask React to give you access to a
particular DOM node when it renders your component. The way this happens is
through a special prop called `ref`.

Here's a simple example of using the `ref` prop:

```javascript
function MyDiv() {
  const myDivRef = React.useRef()
  React.useEffect(() => {
    const myDiv = myDivRef.current
    // myDiv is the div DOM node!
    console.log(myDiv)
  }, [])
  return <div ref={myDivRef}>hi</div>
}
```

After the component has been rendered, it's considered "mounted." That's when
the React.useEffect callback is called and so by that point, the ref should have
its `current` property set to the DOM node. So often you'll do direct DOM
interactions/manipulations in the `useEffect` callback.

## Exercise

In this exercise we're going to make a `<Tilt />` component that renders a div
and uses the `vanilla-tilt` library to make it super fancy.

The thing is, `vanilla-tilt` works directly with DOM nodes to setup event
handlers and stuff, so we need access to the DOM node. But because we're not the
one calling `document.createElement` (React does) we need React to give it to
us.

So in this exercise we're going to use a `ref` so React can give us the DOM node
and then we can pass that on to `vanilla-tilt`.

Additionally, we'll need to clean up after ourselves if this component is
unmounted. Otherwise we'll have event handlers dangling around on DOM nodes that
are no longer in the document.


# Documentación extra sobre `useRef`

## React. El hook useRef
### Características y casos de uso del hook useRef

Desde que aparecieron los hooks seguramente te hayas “hartado” de emplear useState y useEffect en vuestros componentes funcionales. Al fin y al cabo son los que probablemente tengan un uso más intuitivo dentro del universo de React.

Sin embargo **el hook** `useRef` es menos habitual pese a sus interesantes características y a que sin él no seríamos capaces de implementar determinadas funcionalidades (algo que veremos al final de este artículo). Por tanto en este artículo quiero hablaros tanto de su funcionamiento como de sus casos de uso más interesantes.

## Características del hook useRef

El hook `useRef` tiene su origen en el método **createRef** que se emplea en los componentes de clases y que permitía crear una “referencia” (valga la redundancia) a un elemento del DOM creado durante el renderizado.

Esta parte es importante. En React, lo más común cuando queremos modificar un elemento del DOM es forzar un nuevo render mediante un cambio en el estado, es decir, delegamos la generación del DOM a React, que en base a las propiedades pasadas a los elementos construirá el árbol. Podemos verlo como un caso de programación declarativa.

Sin embargo, **hay veces en los que necesitamos modificar un elemento del DOM de forma imperativa**, por ejemplo cuando queremos realizar una animación, reproducir un archivo multimedia o forzar un “focus” en un campo. Es aquí cuando resulta útil tener la referencia directa al elemento del DOM para poderlo modificar de forma imperativa.

<img src="https://miro.medium.com/max/700/1*b4lXo87IUAm_ryeCT8UHig.png"/>

En el ejemplo anterior, creamos una referencia en el constructor del componente que posteriormente asignamos mediante la propiedad `ref` del input. Cuando el usuario pulsa el botón, accedemos directamente al elemento del DOM mediante `this.textInput.current` para invocar su método `focus()`.

La versión funcional de este componente empleando el hook `useRef` sería:

<img src="https://miro.medium.com/max/700/1*4qMkItLFKwS84PwKB6Qrow.png"/>

Apenas hay modificaciones entre una versión y otra más allá de lo “limpio” que se el componente cuando lo pasamos a estilo funcional.

## Forwarding refs

Sin embargo esto tiene una limitación muy evidente. Si la referencia al input la quisiéramos establecer desde otro componente, no valdría con intentar algo así:

<img src="https://miro.medium.com/max/700/1*YZc2xPBNBuj-baqY0uIyoQ.png"/>

Es decir, no podemos reenviar directamente una referencia que nos asignen desde el elemento superior en el árbol de componentes. Para que funcione necesitamos envolver el componente con la llamada `React.forwardRef` lo cual permite al componente envuelto recoger una referencia que les asignen y pasarla a sus componentes hijos:

<img src="https://miro.medium.com/max/700/1*lIdhkWeWAMyhcL82Jvl7pQ.png"/>

[Puedes leer más sobre esta característica en la documentación oficial de React, aquí.](https://reactjs.org/docs/forwarding-refs.html)

## useRef. Almacenando información mutable

Pero `useRef` no es tan sólo una forma de declarar referencias a elementos del DOM sino que también podemos emplearlo para almacenar información mutable. De hecho y como dijo en su día Dan Abramov en el [siguiente tweet](https://twitter.com/dan_abramov/status/1099842565631819776?s=20):

> useRef() is basically useState({current: initialValue })[0]

Esto quiere decir que podemos modificar el valor de la propiedad current del valor devuelto por `useRef` en cualquier momento:

```js
const value = useRef('foo');
value.current = 'bar';
```

A diferencia de lo que sucede con el hook `useState` que nos obliga a usar la función `setState` para modificar el valor del estado. Lo importante aquí es: **modificar el valor de la referencia por medio de la propiedad current no produce un nuevo render.**

Por eso muchas veces podemos ver el hook `useRef` como la posibilidad de echar un vistazo al futuro. Creo que este ejemplo lo explica perfectamente:



<img src="https://miro.medium.com/max/700/1*thyX1cFyk2NCqB8YpKahVg.png"/>

Aquí la clave es que si dentro del callback de `setTimeout` estuviéramos empleando la variable `count` asociada al hook `useState`, lo que estaríamos haciendo es una “closure” sobre ella. Es decir, si pulsamos el botón 3 veces provocando 3 efectos y por tanto 3 timeouts lo que obtendríamos en la consola sería lo que “esperamos”:

```
Messages enqued: 1 (valor the count en el instante N-2)
Messages enqued: 2 (valor the count en el instante N-1)
Messages enqued: 3 (valor the count en el instante N)
```

Pero si por la razón que sea necesitamos saber cuantos mensajes hay ya encolados **en el momento en que se resuelve el callback (aunque lo hayamos declarado “en el pasado”)**, el valor mutable devuelto por `useRef` es la clave, ya que nos permite escapar de la “closure” y obtener su valor actual, no el que tenía la variable `count` en el momento en que se declaró el efecto (y que fue “recordado” por la “closure”).

```jsx
import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

function Messenger() {
  const [count, setCount] = useState(0);
  const messagesEnqueued = useRef(0);

  function sendMessage() {
    setCount(count + 1);
  }

  messagesEnqueued.current = count;

  useEffect(
    function () {
      setTimeout(function () {
        console.log(count);
        console.log(`Messages enqued: ${messagesEnqueued.current}`);
      }, 3000);
    },
    [count]
  );

  return (
    <div>
      <input type="button" value="Enviar mensaje" onClick={sendMessage} />
      <div>Mensajes enviados {count}</div>
      <div>Mensajes enviados {messagesEnqueued.current}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>useRef, looking to the future</h1>
      <Messenger />
    </div>
  );
}

```

## Conclusiones
Como pudiste ver el hook `useRef` es mucho más útil de lo que podríamos suponer en un principio, especialmente en este último caso ya que nos permite esquivar algunas de las restricciones que vienen dadas junto a los componentes funcionales y las “closures” que se producen sobre las variables en el momento en que declaramos efectos.

Para entender todo esto en su momento te voy a dejar 3 artículos más (además de como siempre la fantástica documentación que tiene React) para que leáis más si te apetece:

- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [How Are Function Components Different from Classes?](https://overreacted.io/how-are-function-components-different-from-classes/)
- [useRef in React](https://medium.com/javascript-in-plain-english/implementing-useref-in-react-732908aa1998)