// some response handlers in /utils
const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);

module.exports = {
  handleResponse,
  handleError,
};
