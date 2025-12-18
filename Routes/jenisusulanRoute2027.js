const express = require("express");
const DataController = require("../Controllers/jenisusulanController2027");
const { verifyToken } = require("../Middlewares/auth");
const { allowRoles } = require("../Middlewares/authorize");

const router = express.Router();

// CREATE
router.post("/", DataController.createNewData);

// READ
router.get("/", verifyToken, allowRoles("admin"), DataController.getAllDatas);

// UPDATE
router.patch(
  "/:idData",
  verifyToken,
  allowRoles("admin"),
  DataController.updateData
);

// DELETE
router.delete(
  "/:idData",
  verifyToken,
  allowRoles("admin"),
  DataController.deleteData
);

module.exports = router;
