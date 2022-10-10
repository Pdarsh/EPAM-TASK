const AutoSuggestService = require("../services/AutoSuggestService");

exports.getAutoSuggestUsers = async (req,res) => {

    try {
        const users = await AutoSuggestService.getAutoSuggestUsers(req.params.loginSubstring,req.params.loginSubstring.length)
        return res.status(200).json({
          status: 200,
          data: users,
          message: "Users Matched",
        });
        
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });   
    }
}