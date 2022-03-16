import React, { memo } from "react";

const Todos = ({ todos }) => {
  console.log("List child component render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

/**
 * Using memo will cause React to skip rendering a component if its props have not changed.
 * This can improve performance.
 */
export default memo(Todos);
