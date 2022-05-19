const Sequelize = require("sequelize");

const sequelize = new Sequelize("test", "postgres", "1234", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;