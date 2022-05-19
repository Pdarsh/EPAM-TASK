const UserService = require("../services/UserService");
const req = require("express/lib/request");

exports.getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Users Retrieved Succesfully",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.postUser = async (req, res) => {
  try {
    const user = await UserService.postUser(req.userData);
    return res.status(200).json({
      status: 200,
      data: user,
      message: "User Added Successfully",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    return res.status(200).json({
      status: 200,
      data: user,
      message: "User Retrieved Successfully",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await UserService.updateUser(req.userData,req.params.id);
    return res.status(200).json({
      status: 200,
      data: user,
      message: "User Updated Successfully",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    return res.status(200).json({
      status: 200,
      data: user,
      message: "User Deleted Successfully",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};
