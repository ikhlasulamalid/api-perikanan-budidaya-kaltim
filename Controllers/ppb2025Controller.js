const DataModel = require("../Models/ppb2025Models");

const getAllDatas = async (req, res) => {
  try {
    const [data] = await DataModel.getAllDatas();

    res.json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewData = async (req, res) => {
  const { body } = req;

  if (
    !body.ProvinsiSARPRAS ||
    !body.KabKotaSARPRAS ||
    !body.KecSARPRAS ||
    !body.DesaSARPRAS ||
    !body.Nama ||
    !body.Klasifikasi ||
    !body.TeknologiBudidaya ||
    !body.IkanUtama ||
    !body.IkanTambahan ||
    !body.Alamat ||
    !body.Kecamatan ||
    !body.Kelurahan ||
    !body.TotalLuasLahan ||
    !body.LuasLahanDigunakan ||
    !body.NoKusuka
  ) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await DataModel.createNewData(body);
    res.status(201).json({
      message: "CREATE new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateData = async (req, res) => {
  const { idData } = req.params;
  const { body } = req;
  try {
    await DataModel.updateData(body, idData);
    res.json({
      message: "UPDATE user success",
      data: {
        id: idData,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteData = async (req, res) => {
  const { idData } = req.params;
  try {
    await DataModel.deleteData(idData);
    res.json({
      message: "DELETE user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllDatas,
  createNewData,
  updateData,
  deleteData,
};
