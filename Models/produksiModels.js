const getPool = require("../Config/Config");

const Tabel = "data_produksi";

const getAll = () => {
  const SQLQuery = `SELECT * FROM ${Tabel}`;

  return getPool.execute(SQLQuery);
};

const getById = () => {
  const SQLQuery = `SELECT * FROM ${Tabel} WHERE id = ?`;
  return getPool.execute(SQLQuery, [id]);
};

const createNewData = (data) => {
  const fields = Object.keys(data);
  const values = Object.values(data);
  const placehorders = fields.map(() => "?").join(", ");

  const SQLQuery = `INSERT INTO ${Tabel} (${fields.join(", ")}) VALUES (${placehorders})`;

  return getPool.execute(SQLQuery, values);
};

const updateData = (id, data) => {
  const fields = Object.keys(data)
    .map((key) => `${key} = ?`)
    .join(", ");

  const values = [...Object.values(data), id];

  const SQLQuery = `UPDATE ${Tabel} SET ${fields} WHERE id = ?`;

  return getPool.execute(SQLQuery, values);
};

const deleteData = (id) => {
  const SQLQuery = `DELETE FROM ${Tabel} WHERE id = ?`;

  return getPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAll,
  getById,
  createNewData,
  updateData,
  deleteData,
};
