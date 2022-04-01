const userService = require("../../services/userServices");
const { handleError, handleResponse } = require("../../utils/helpers");
function getAll(req, res) {
  userService
    .getAll()
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
}

function getById(req, res, next) {
  userService
    .getById(req.params.id)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
}

function saveUser(req, res, next) {
  userService
    .saveUser(req.body.user)
    .then((data) => handleResponse(res, data))
    .catch((err) => handleError(res, err));
}

module.exports = {
  getAll,
  getById,
  saveUser,
};
