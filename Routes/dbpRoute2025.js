const express = require("express");

const DataController = require("../Controllers/dpbController2025");
const { verifyToken } = require("../Middlewares/auth");
const { allowRoles } = require("../Middlewares/authorize");

const router = express.Router();

// CREATE - POST
router.post(
  "/",
  verifyToken,
  allowRoles("admin"),
  DataController.createNewData
);

// READ - GET
router.get("/", DataController.getAllDatas);

// UPDATE - PATCH
router.patch(
  "/:idData",
  verifyToken,
  allowRoles("admin"),
  DataController.updateData
);

// DELETE - DELETE
router.delete(
  "/:idData",
  verifyToken,
  allowRoles("admin"),
  DataController.deleteData
);

module.exports = router;
