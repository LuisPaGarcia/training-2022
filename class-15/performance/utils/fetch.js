import redaxios from "redaxios";
const URL = "https://jsonplaceholder.typicode.com/comments";

// Adding 2 new values to the response
const addValuesToResponse = (data) => {
  return data.map((comment) => ({
    ...comment,
    subscribed: true,
    active: false,
  }));
};

export const fetchComments = () => {
  return redaxios("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.data)
    .then(addValuesToResponse)
    .catch((error) => {
      console.log(error);
      return [];
    });
};

export default fetch;
