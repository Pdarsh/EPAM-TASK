const fs = require("fs");

const saveUserData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./db/users.json", stringifyData);
};

const getUserData = () => {
  const jsonData = fs.readFileSync("./db/users.json");
  return JSON.parse(jsonData);
};

module.exports = {
  saveUserData: saveUserData,
  getUserData: getUserData,
};
