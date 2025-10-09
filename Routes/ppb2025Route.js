const express = require("express");

const DataController = require("../Controllers/ppb2025Controller");

const router = express.Router();

// CREATE - POST
router.post("/", DataController.createNewData);

// READ - GET
router.get("/", DataController.getAllDatas);

// UPDATE - PATCH
router.patch("/:idData", DataController.updateData);

// DELETE - DELETE
router.delete("/:idData", DataController.deleteData);

module.exports = router;
