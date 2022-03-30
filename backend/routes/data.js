const express = require("express");
const router = express.Router();

const { all_fetch } = require("../controllers/data.js");

router.get("/all", all_fetch);

module.exports = router;
