import React from "react";
import { fetchComments } from "./utils/fetch";
import Table from "./components/Table";
import Row from "./components/Row";
import "./style.css";

export default function App() {
  // Create the state to handle comments
  const [comments, commentsSet] = React.useState([]);

  React.useEffect(() => {
    // Fetch the 500 comments
    fetchComments().then((apiComments) => commentsSet(apiComments));
  }, []);

  const handleOnChange = (event, id) => {
    // Subscribed or Active
    const inputId = event.target.id;
    // Comment id
    const commentId = id;
    commentsSet((prevState) => {
      // Clone the prevState
      const newState = prevState.slice();

      // Find the index-0 of the match id
      const objIndex = newState.findIndex((obj) => obj.id == commentId);

      // Take the prev value of the checkbox
      // Input id can be `subscribed` or `active`
      const prevValue = newState[objIndex][inputId];

      // Update object `subscribed` or `active` name property.
      newState[objIndex][inputId] = !prevValue;
      // Return the new State
      return newState;
    });
  };

  // If theres no comments, show a message
  if (comments.length === 0) return <h1>Loading comments...</h1>;

  // Render the table
  return (
    <Table>
      {comments.map((comment) => (
        <Row
          id={comment.id}
          email={comment.email}
          name={comment.name}
          subscribed={comment.subscribed}
          active={comment.active}
          handleOnChange={handleOnChange}
        />
      ))}
    </Table>
  );
}
