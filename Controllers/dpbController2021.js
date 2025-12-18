const DataModel = require("../Models/dbpModels2021");

const getAllDatas = async (req, res) => {
  try {
    const [data] = await DataModel.getAllDatas();

    res.json({
      message: "GET : daftar penerima bantuan 2021 - get all data success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2021 tidak dapat diakses",
      serverMessage: error,
    });
  }
};

const createNewData = async (req, res) => {
  const { body } = req;

  if (
    !body.JENIS_BANTUAN ||
    !body.KABUPATEN_KOTA ||
    !body.NAMA_POKDAKAN ||
    !body.ALAMAT ||
    !body.KETERANGAN
  ) {
    return res.status(400).json({
      message:
        "Anda mengirimkan data yang salah - daftar penerima bantuan 2021",
      data: null,
    });
  }

  try {
    await DataModel.createNewData(body);
    res.status(201).json({
      message: "CREATE new data success [daftar penerima bantuan 2021]",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2021 tidak dapat diakses",
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
      message: "UPDATE data daftar penerima bantuan 2021 success",
      data: {
        id: idData,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2021 tidak dapat diakses",
      serverMessage: error,
    });
  }
};

const deleteData = async (req, res) => {
  const { idData } = req.params;
  try {
    await DataModel.deleteData(idData);
    res.json({
      message: "DELETE data pokdakan 2021 success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2021 tidak dapat diakses",
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
