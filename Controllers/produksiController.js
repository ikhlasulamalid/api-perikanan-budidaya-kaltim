const Models = require("../Models/produksiModels");

// GET ALL

const getAll = async (req, res) => {
  try {
    const [result] = await Models.getAll();

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAll,
};
