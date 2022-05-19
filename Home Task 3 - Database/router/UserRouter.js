const express = require("express");
const router = express.Router();
const { isvalidUser } = require("../middleware/validateUsers");
const UserController = require("../controller/UserController")


router.route("/")
.get(UserController.getUsers)
.post(isvalidUser, UserController.postUser);
router.route("/:id")
.get(UserController.getUserById)
.put(isvalidUser, UserController.updateUser)
.delete(UserController.deleteUser);


module.exports = router;
