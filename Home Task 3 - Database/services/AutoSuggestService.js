const UserDemo = require("../models/userdemo");

exports.getAutoSuggestUsers = async (loginSubstring,limit) => {
    try {
        const users = await UserDemo.findAll({
          attributes: ["id", "login", "age"],
          where: {
            isdeleted: false,
          },
        });
        //console.log(filteredUsers)
        const filteredUsers = users
          .filter((user) => user.login.split("@")[0].match(loginSubstring))
          .sort((a, b) => {
            return a.login.localeCompare(b.login);
          });
        if (filteredUsers.length > limit) {
          filteredUsers.length = limit;
        }
        return filteredUsers
    } catch (err) {
        throw new Error("No Users Matched")
    }
}
