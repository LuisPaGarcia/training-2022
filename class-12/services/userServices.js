const crypto = require("crypto");
const users = [
  { id: "18960d80-b42f-4d1a-aa3c-fae9c961ef90", fullName: "Andrea Martinez" },
  { id: "9c185190-4c8c-4a35-a438-57284a46aa21", fullName: "LuisPa Garcia" },
];

const getAll = () => Promise.resolve(users);
const getById = (id) => Promise.resolve(users.find((u) => u.id == id));
const saveUser = (user) => {
  users.push({ id: crypto.randomUUID(), fullName: user.fullName });
  return Promise.resolve(users);
};

module.exports = {
  getById,
  getAll,
  saveUser,
};
