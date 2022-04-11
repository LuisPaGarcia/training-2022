// useRef and useEffect: DOM interaction

import React, { useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import VanillaTilt from "vanilla-tilt";

function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
}

function Tilt({ children }) {
  // 🐨 create a ref here with React.useRef()
  const tiltNode = useRef(null);
  const isMounted = useIsMounted();
  console.log(isMounted);

  useEffect(() => {
    if (isMounted) {
      VanillaTilt.init(tiltNode.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
    return () => {
      tiltNode.current.vanillaTilt.destroy();
    };
  }, []);
  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  // const tiltNode = tiltRef.current
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup:
  // `return () => tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`. Ask me about
  // this for a more in depth explanation.

  // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    <div className="tilt-root" ref={tiltNode}>
      <div className="tilt-child">{children}</div>
    </div>
  );
}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  );
}

export default App;
