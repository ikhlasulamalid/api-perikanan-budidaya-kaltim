const express = require("express");

const DataController = require("../Controllers/usulanController2027");
const { verifyToken } = require("../Middlewares/auth");
const { allowRoles } = require("../Middlewares/authorize");
const createUpload = require("../Middlewares/uploads");
const upload2027 = createUpload(2027);
const router = express.Router();

// CREATE - POST
router.post("/", upload2027.single("Dokumen"), DataController.createNewData);
router.put("/:idData", upload2027.single("Dokumen"), DataController.updateData);

// READ - GET
router.get("/", verifyToken, allowRoles("admin"), DataController.getAllDatas);

// UPDATE - PATCH
router.patch(
  "/:idData",
  verifyToken,
  allowRoles("admin"),
  DataController.updateData
);

router.delete(
  "/:idData",
  verifyToken,
  allowRoles("admin"),
  DataController.deleteDataById
);

module.exports = router;
