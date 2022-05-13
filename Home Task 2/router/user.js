const express = require("express");
const UserSchema = require("../models/UserSchema");
const router = express.Router();
const { getUserData, saveUserData } = require("../helper/UserDataHelper");
const { isvalidUser } = require("../middleware/validateUsers");

router
  .route("/")
  .get((req, res) => {
    const users = getUserData()
    return res.status(200).send(users);
  })
  .post(isvalidUser, (req, res) => {
    const existUsers = getUserData();
    const findExist = existUsers.find(
      (user) => user.login.toLowerCase() === req.userData.login.toLowerCase()
    );
    if (findExist) {
      return res
        .status(409)
        .send({ error: true, msg: "login name already exist" });
    }
    existUsers.push(req.userData);
    saveUserData(existUsers);
    return res
      .status(200)
      .send({ success: true, msg: "User data added successfully" });
  });

router
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    const existUsers = getUserData();
    const user = existUsers.filter((user) => user.id === id);
    return res.status(200).send(user);
  })
  .put(isvalidUser, (req, res) => {
    const id = req.params.id;
    const existUsers = getUserData();
    const userIndex = existUsers.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
      // existUsers[userIndex].login = userData.login
      // existUsers[userIndex].password = userData.password
      // existUsers[userIndex].age = userData.age
      existUsers[userIndex] = req.userData;
      existUsers[userIndex].id = id;
      existUsers[userIndex].isDeleted = false;
      saveUserData(existUsers);
      return res.status(200).send(existUsers);
    }
    return res.send({ error: true, msg: "User not found" });
  })
  .delete((req, res) => {
    const id = req.params.id;
    const existUsers = getUserData();
    const userIndex = existUsers.findIndex((user) => user.id === id);
    if (userIndex >= 0) {
      existUsers[userIndex].isDeleted = true;
      saveUserData(existUsers)
      return res.status(200).send(existUsers);
    }
    res.status(400).send({ error: true, msg: "User Not Found" });
  });


module.exports = router;
