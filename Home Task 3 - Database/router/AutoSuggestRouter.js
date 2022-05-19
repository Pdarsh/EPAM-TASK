const express = require("express");
const router = express.Router();
const AutoSuggestController = require("../controller/AutoSuggestController")

router.get("/:loginSubstring",AutoSuggestController.getAutoSuggestUsers);

module.exports = router