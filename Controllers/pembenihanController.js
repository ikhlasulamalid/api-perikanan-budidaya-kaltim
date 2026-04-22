const DataModel = require("../Models/Pembenihan");

const getAllDatas = async (req, res) => {
  try {
    const [data1] = await DataModel.getPembenihan();
    const [data2] = await DataModel.getPembesaran();

    res.json({
      message: "GET : daftar penerima bantuan 2022 - get all data success",
      data: [
        {
          Pembenihan: data1,
          Pembesaran: data2,
        },
      ],
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
};
