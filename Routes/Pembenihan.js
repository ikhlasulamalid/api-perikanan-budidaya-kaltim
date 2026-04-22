const express = require("express");

const DataController = require("../Controllers/pembenihanController");

const router = express.Router();

// READ - GET
router.get("/", DataController.getAllDatas);

module.exports = router;
