const DataModel = require("../Models/dbpModels2022");

const getAllDatas = async (req, res) => {
  try {
    const [data] = await DataModel.getAllDatas();

    res.json({
      message: "GET : daftar penerima bantuan 2022 - get all data success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2022 tidak dapat diakses",
      serverMessage: error,
    });
  }
};

const createNewData = async (req, res) => {
  const { body } = req;

  if (
    !body.Desa_Kelurahan ||
    !body.Kecamatan ||
    !body.Kabupaten_Kota ||
    !body.Nama_Kelompok ||
    !body.Nama_Ketua ||
    !body.Alamat ||
    !body.JUMLAH_BANTUAN
  ) {
    return res.status(400).json({
      message:
        "Anda mengirimkan data yang salah - daftar penerima bantuan 2022",
      data: null,
    });
  }

  try {
    await DataModel.createNewData(body);
    res.status(201).json({
      message: "CREATE new data success [daftar penerima bantuan 2022]",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2022 tidak dapat diakses",
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
      message: "UPDATE data daftar penerima bantuan 2022 success",
      data: {
        id: idData,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2022 tidak dapat diakses",
      serverMessage: error,
    });
  }
};

const deleteData = async (req, res) => {
  const { idData } = req.params;
  try {
    await DataModel.deleteData(idData);
    res.json({
      message: "DELETE data pokdakan 2022 success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2022 tidak dapat diakses",
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
