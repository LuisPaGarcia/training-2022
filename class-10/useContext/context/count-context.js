import React from "react";
const CountContext = React.createContext();

export const CountProvider = (props) => {
  const [count, countSet] = React.useState(0);
  const value = [count, countSet];
  return <CountContext.Provider value={value} {...props} />;
};

export function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error(
      "Must wrapp the context correctly for `useCount` by using `CountProvider`"
    );
  }
  return context;
}
