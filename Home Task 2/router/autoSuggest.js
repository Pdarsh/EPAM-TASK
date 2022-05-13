const express = require("express");
const router = express.Router();
const {getUserData, saveUserData} = require("../Helper/UserDataHelper")



router.get("/:loginSubstring", (req, res) => {
    const loginSubstring = req.params.loginSubstring;
    const autoSuggestUsers = getAutoSuggestUsers(loginSubstring,loginSubstring.length)
    return res.send(autoSuggestUsers);
});

const getAutoSuggestUsers = (loginSubstring,limit) => {
    const existUsers = getUserData();
    const filteredUsers = existUsers.filter((user) =>  user.login.split("@")[0].match(loginSubstring)).sort((a, b) => {
        return a.login.localeCompare(b.login);
    });
    if(filteredUsers.length > limit){
        filteredUsers.length = limit
    }
    return filteredUsers
}

module.exports = router