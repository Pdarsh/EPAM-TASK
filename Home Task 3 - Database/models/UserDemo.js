const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const userdemo = sequelize.define("userdemo", {
  id: {
    type: Sequelize.TEXT,
    allowNull: false,
    primaryKey: true,
  },
  login: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  isdeleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  }
},{timestamps: false});

module.exports = userdemo