const getPool = require("../Config/Config");

const pembenihan = "pembenihan";
const pembesaran = "pembesaran";

const getPembenihan = () => {
  const SQLQuery = `SELECT * FROM ${pembenihan}`;

  return getPool.execute(SQLQuery);
};
const getPembesaran = () => {
  const SQLQuery = `SELECT * FROM ${pembesaran}`;

  return getPool.execute(SQLQuery);
};

module.exports = {
  getPembenihan,
  getPembesaran,
};
