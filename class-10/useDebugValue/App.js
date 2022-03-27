// useDebugValue: useMedia

import React from "react";

function useMedia(query, initialState = false) {
  const [state, setState] = React.useState(initialState);
  // 🐨 call React.useDebugValue here.
  // 💰 here's the formatted label I use: `\`${query}\` => ${state}`

  React.useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    function onChange() {
      if (!mounted) {
        return;
      }
      setState(Boolean(mql.matches));
    }

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
}

function Box() {
  // We cannot use useDebugVaue directly into components
  const isBig = useMedia("(min-width: 601px)");
  const isMedium = useMedia("(max-width: 600px) and (min-width: 400px)");
  const isSmall = useMedia("(max-width: 399px)");
  const color = isBig ? "green" : isMedium ? "yellow" : isSmall ? "red" : null;

  return <div style={{ width: 200, height: 200, backgroundColor: color }} />;
}

function App() {
  return <Box />;
}

export default App;
