const DataModel = require("../Models/rplModels");

const getAllDatas = async (req, res) => {
  try {
    const [data] = await DataModel.getAllDatas();

    res.json({
      message: "GET all data PDB Perikanan success",
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
    !body.NAMOBJ ||
    !body.ORDE01 ||
    !body.KODKWS ||
    !body.JNSRPR ||
    !body.WKLPR ||
    !body.WKMH ||
    !body.DLKPEL ||
    !body.TSS ||
    !body.MIGAS ||
    !body.HANKAM ||
    !body.WPMB ||
    !body.APKI ||
    !body.DLPI ||
    !body.PSSA ||
    !body.MBL ||
    !body.PKBL ||
    !body.KS ||
    !body.REMARK ||
    !body.LUASHA ||
    !body.Shape_Lenght ||
    !body.Shape_Area
  ) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await DataModel.createNewData(body);
    res.status(201).json({
      message: "CREATE new data PDB Perikanan success",
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
      message: "UPDATE data PDB Perikanan success",
      data: {
        OBJECTID: idData,
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
