const DataModel = require("../Models/usulanModels2026");
const JenisModel = require("../Models/jenisusulanModels2026");
const fs = require("fs");
const path = require("path");

const getAllDatas = async (req, res) => {
  try {
    const [data] = await DataModel.getAllDatas();
    res.json({
      message: "GET all data success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const createNewData = async (req, res) => {
  try {
    const filePath = req.file
      ? `/DokumenUsulan/2026/${req.file.filename}`
      : null;

    const body = {
      ...req.body,
      Dokumen: filePath,
    };

    await DataModel.createNewData(body);

    res.status(201).json({
      message: "Data usulan berhasil dibuat",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const updateData = async (req, res) => {
  try {
    const { idData } = req.params;

    const filePath = req.file
      ? `/DokumenUsulan/2026/${req.file.filename}`
      : req.body.Dokumen;

    const body = {
      ...req.body,
      Dokumen: filePath,
    };

    await DataModel.updateData(body, idData);

    res.json({
      message: "UPDATE success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const deleteDataById = async (req, res) => {
  try {
    const { idData } = req.params; // id_usulan

    // 1. Ambil dokumen dari DB
    const [rows] = await DataModel.getByIdUsulan(idData);

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Data tidak ditemukan",
      });
    }

    const dokumenPath = rows[0].Dokumen;

    // 2. Hapus file fisik (jika ada)
    if (dokumenPath) {
      const fullPath = path.join(__dirname, "..", dokumenPath);

      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
    }

    // 1. Hapus semua jenis usulan
    await JenisModel.deleteByUsulanId(idData);

    // 2. Hapus usulan
    await DataModel.deleteByUsulanId(idData);

    res.json({
      message: "DELETE usulan + jenis usulan success",
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
  deleteDataById,
};
