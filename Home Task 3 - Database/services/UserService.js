const UserDemo = require("../models/userdemo");

exports.getUsers = async () => {
  try {
    const users = await UserDemo.findAll({
      attributes: ["id", "login", "age"],
      where: {
        isdeleted: false,
      },
    });
    return users;
  } catch (err) {
    throw new Error("Error while getting the data");
  }
};

exports.postUser = async (userData) => {
  try {
    const user = await UserDemo.create({
      id: userData.id,
      login: userData.login,
      password: userData.password,
      age: userData.age,
      isdeleted: userData.isDeleted,
    });

    return user;
  } catch (err) {
    throw new Error("Error while adding user");
  }
};

exports.getUserById = async (id) => {
  try {
    const user = await UserDemo.findAll({
      where: {
        id: id,
        isdeleted: false,
      },
      attributes: ["id", "login", "age"],
    });
    if(user.length > 0){
        return user;
    }else{
        throw new Error("No user found");
    }
  } catch (err) {
    throw new Error("No user found");
  }
};

exports.updateUser = async (userData,id) => {
  try {
    const user = await UserDemo.update(
      { login: userData.login, age: userData.age, passowrd: userData.password },
      {
        where: {
          id: id
        },
      }
    );
    return user;
  } catch (err) {
    throw new Error("User not found");
  }
};

exports.deleteUser = async (id) => {
  try {
    const user = await UserDemo.update(
      { isdeleted: true },
      {
        where: {
          id: id,
        },
      }
    );
    return user
  } catch (err) {
    throw new Error("User not found");
  }
};
