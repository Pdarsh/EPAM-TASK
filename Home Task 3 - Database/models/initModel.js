const sequelize = require("./config/database");

sequelize
  .sync({ force: true })
  .catch((err) => {
    console.log(err);
});