const DataModel = require("../Models/jenisusulanModels2026");

// =============================
// GET ALL
// =============================
const getAllDatas = async (req, res) => {
  try {
    const [data] = await DataModel.getAllDatas();

    res.json({
      message: "GET all data jenis usulan 2026 success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

// =============================
// CREATE DATA
// =============================
const createNewData = async (req, res) => {
  const { id_usulan, Nama_Kelompok, jenis, komoditas } = req.body;

  if (!id_usulan || !Nama_Kelompok || !jenis || !komoditas) {
    return res.status(400).json({
      message: "Input tidak lengkap",
      required: ["id_usulan", "Nama_Kelompok", "jenis", "komoditas"],
    });
  }

  try {
    await DataModel.createNewData(req.body);

    res.status(201).json({
      message: "CREATE jenis usulan 2026 success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

// =============================
// UPDATE DATA
// =============================
const updateData = async (req, res) => {
  const { idData } = req.params;
  const updatedBody = req.body;

  try {
    await DataModel.updateData(updatedBody, idData);

    res.json({
      message: "UPDATE jenis usulan 2026 success",
      data: {
        id: idData,
        ...updatedBody,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

// =============================
// DELETE DATA
// =============================
const deleteData = async (req, res) => {
  const { idData } = req.params;

  try {
    await DataModel.deleteData(idData);

    res.json({
      message: "DELETE jenis usulan 2026 success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

module.exports = {
  getAllDatas,
  createNewData,
  updateData,
  deleteData,
};
