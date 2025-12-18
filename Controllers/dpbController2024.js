const DataModel = require("../Models/dbpModels2024");

const getAllDatas = async (req, res) => {
  try {
    const [rows] = await DataModel.getAllDatas();

    const result = rows.map((item) => {
      // Ambil semua field bantuan (1–9)
      const bantuanList = [];

      for (let i = 1; i <= 9; i++) {
        const jenis = item[`Jenis_Bantuan_${i}`];
        const nilai = item[`Nilai_${i}`];

        // Skip jika kosong atau 0
        if (!jenis || jenis.trim() === "" || !nilai || nilai === 0) continue;

        bantuanList.push({
          Jenis_Bantuan: jenis,
          Harga_Satuan: item[`Harga_Satuan_${i}`],
          Volume: item[`Volume_${i}`],
          Satuan: item[`Satuan_${i}`],
          Nilai: nilai,
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
        DESA_KELURAHAN,
        KECAMATAN,
        // hapus semua field bantuan
        ...others
      } = item;

      return {
        id,
        NAMA_KELOMPOK,
        NAMA_KETUA,
        KABUPATEN_KOTA,
        ALAMAT,
        DESA_KELURAHAN,
        KECAMATAN,
        BANTUAN: bantuanList,
      };
    });

    res.json({
      message: "GET : daftar penerima bantuan 2024 - get all data success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2024 tidak dapat diakses",
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
    !body.Harga_Satuan_1 ||
    !body.Volume_1 ||
    !body.Satuan_1 ||
    !body.Nilai_1 ||
    !body.Jenis_Bantuan_2 ||
    !body.Harga_Satuan_2 ||
    !body.Volume_2 ||
    !body.Satuan_2 ||
    !body.Nilai_2 ||
    !body.Jenis_Bantuan_3 ||
    !body.Harga_Satuan_3 ||
    !body.Volume_3 ||
    !body.Satuan_3 ||
    !body.Nilai_3 ||
    !body.Jenis_Bantuan_4 ||
    !body.Harga_Satuan_4 ||
    !body.Volume_4 ||
    !body.Satuan_4 ||
    !body.Nilai_4 ||
    !body.Jenis_Bantuan_5 ||
    !body.Harga_Satuan_5 ||
    !body.Volume_5 ||
    !body.Satuan_5 ||
    !body.Nilai_5 ||
    !body.Jenis_Bantuan_6 ||
    !body.Harga_Satuan_6 ||
    !body.Volume_6 ||
    !body.Satuan_6 ||
    !body.Nilai_6 ||
    !body.Jenis_Bantuan_7 ||
    !body.Harga_Satuan_7 ||
    !body.Volume_7 ||
    !body.Satuan_7 ||
    !body.Nilai_7 ||
    !body.Jenis_Bantuan_8 ||
    !body.Harga_Satuan_8 ||
    !body.Volume_8 ||
    !body.Satuan_8 ||
    !body.Nilai_8 ||
    !body.Jenis_Bantuan_9 ||
    !body.Harga_Satuan_9 ||
    !body.Volume_9 ||
    !body.Satuan_9 ||
    !body.Nilai_9
  ) {
    return res.status(400).json({
      message:
        "Anda mengirimkan data yang salah - daftar penerima bantuan 2024",
      data: null,
    });
  }

  try {
    await DataModel.createNewData(body);
    res.status(201).json({
      message: "CREATE new data success [daftar penerima bantuan 2024]",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2024 tidak dapat diakses",
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
      message: "UPDATE data daftar penerima bantuan 2024 success",
      data: {
        id: idData,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2024 tidak dapat diakses",
      serverMessage: error,
    });
  }
};

const deleteData = async (req, res) => {
  const { idData } = req.params;
  try {
    await DataModel.deleteData(idData);
    res.json({
      message: "DELETE data pokdakan 2024 success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Server Error : daftar penerima bantuan 2024 tidak dapat diakses",
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
