const DataModel = require("../Models/dbpModels2023");

const getAllDatas = async (req, res) => {
  try {
    const [rows] = await DataModel.getAllDatas();

    const result = rows.map((item) => {
      // Ambil semua field bantuan (1–9)
      const bantuanList = [];

      for (let i = 1; i <= 9; i++) {
        const jenis = item[`Jenis_Bantuan_${i}`];

        // Skip jika kosong atau 0
        if (!jenis || jenis.trim() === "") continue;

        bantuanList.push({
          Jenis_Bantuan: jenis,
          Jumlah: item[`Jumlah_${i}`],
        });
      }

      // Buat object baru tanpa field bantuan lama
      const {
        // data utama
        id,
        NAMA_KELOMPOK,
        NAMA_KETUA,
        KABUPATEN_KOTA,
        ALAMAT,
        // hapus semua field bantuan
        ...others
      } = item;

      return {
        id,
        NAMA_KELOMPOK,
        NAMA_KETUA,
        KABUPATEN_KOTA,
        ALAMAT,
        BANTUAN: bantuanList,
      };
    });

    res.json({
      message: "GET : daftar penerima bantuan 2023 - get all data success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2023 tidak dapat diakses",
      serverMessage: error,
    });
  }
};

const createNewData = async (req, res) => {
  const { body } = req;

  if (
    !body.NAMA_KELOMPOK ||
    !body.NAMA_KETUA ||
    !body.KABUPATEN_KOTA ||
    !body.ALAMAT ||
    !body.DESA_KELURAHAN ||
    !body.KECAMATA ||
    !body.Jenis_Bantuan_1 ||
    !body.Jumlah_1 ||
    !body.Jenis_Bantuan_2 ||
    !body.Jumlah_2 ||
    !body.Jenis_Bantuan_3 ||
    !body.Jumlah_3
  ) {
    return res.status(400).json({
      message:
        "Anda mengirimkan data yang salah - daftar penerima bantuan 2023",
      data: null,
    });
  }

  try {
    await DataModel.createNewData(body);
    res.status(201).json({
      message: "CREATE new data success [daftar penerima bantuan 2023]",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2023 tidak dapat diakses",
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
      message: "UPDATE data daftar penerima bantuan 2023 success",
      data: {
        id: idData,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2023 tidak dapat diakses",
      serverMessage: error,
    });
  }
};

const deleteData = async (req, res) => {
  const { idData } = req.params;
  try {
    await DataModel.deleteData(idData);
    res.json({
      message: "DELETE data pokdakan 2023 success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2023 tidak dapat diakses",
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
