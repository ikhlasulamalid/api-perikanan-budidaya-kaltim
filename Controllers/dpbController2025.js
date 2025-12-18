const DataModel = require("../Models/dbpModels2025");

const getAllDatas = async (req, res) => {
  try {
    const [rows] = await DataModel.getAllDatas();

    const results = Object.values(
      rows.reduce((acc, row) => {
        const {
          KODE,
          NAMA_KELOMPOK,
          NAMA_KETUA,
          ALAMAT,
          KECAMATAN,
          KAB_KOTA,
          JENIS_BANTUAN,
          HARGA_SATUAN,
          VOLUME,
          SATUAN,
        } = row;

        if (!acc[KODE]) {
          acc[KODE] = { [KODE]: [] };
        }

        let orang = acc[KODE][KODE].find(
          (item) => item.NAMA_KELOMPOK === NAMA_KELOMPOK
        );

        if (!orang) {
          orang = {
            NAMA_KELOMPOK,
            NAMA_KETUA,
            ALAMAT,
            KECAMATAN,
            KAB_KOTA,
            BANTUAN: [],
          };
          acc[KODE][KODE].push(orang);
        }

        orang.BANTUAN.push({ JENIS_BANTUAN, HARGA_SATUAN, VOLUME, SATUAN });

        return acc;
      }, {})
    );

    res.json({
      message: "GET : daftar penerima bantuan 2025 - get all data success",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2025 tidak dapat diakses",
      serverMessage: error,
    });
  }
};

const createNewData = async (req, res) => {
  const { body } = req;
  5;
  if (
    !body.KODE ||
    !body.NAMA_KELOMPOK ||
    !body.NAMA_KETUA ||
    !body.ALAMAT ||
    !body.KECAMATAN ||
    !body.KABUPATEN_KOTA ||
    !body.JENIS_BANTUAN ||
    !body.HARGA_SATUAN ||
    !body.VOLUME ||
    !body.SATUAN
  ) {
    return res.status(400).json({
      message:
        "Anda mengirimkan data yang salah - daftar penerima bantuan 2025",
      data: null,
    });
  }

  try {
    await DataModel.createNewData(body);
    res.status(201).json({
      message: "CREATE new data success [daftar penerima bantuan 2025]",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2025 tidak dapat diakses",
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
      message: "UPDATE data daftar penerima bantuan 2025 success",
      data: {
        id: idData,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2025 tidak dapat diakses",
      serverMessage: error,
    });
  }
};

const deleteData = async (req, res) => {
  const { idData } = req.params;
  try {
    await DataModel.deleteData(idData);
    res.json({
      message: "DELETE data pokdakan 2025 success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2025 tidak dapat diakses",
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
