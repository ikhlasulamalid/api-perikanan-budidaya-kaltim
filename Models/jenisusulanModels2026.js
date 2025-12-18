const getPool = require("../Config/Config");

const Tabel = "jenis_usulan_2026";

const getAllDatas = () => {
  const SQLQuery = `SELECT * FROM ${Tabel}`;
  return getPool.execute(SQLQuery);
};

const createNewData = (body) => {
  const SQLQuery = `
    INSERT INTO ${Tabel} 
    (id_usulan, Nama_Kelompok, jenis, komoditas) 
    VALUES (?, ?, ?, ?)
  `;

  const params = [
    body.id_usulan,
    body.Nama_Kelompok,
    body.jenis,
    body.komoditas,
  ];

  return getPool.execute(SQLQuery, params);
};

const updateData = (body, idData) => {
  const SQLQuery = `
    UPDATE ${Tabel}
    SET 
      id_usulan = ?,
      Nama_Kelompok = ?,
      jenis = ?,
      komoditas = ?
    WHERE id = ?
  `;

  const params = [
    body.id_usulan,
    body.Nama_Kelompok,
    body.jenis,
    body.komoditas,
    idData,
  ];

  return getPool.execute(SQLQuery, params);
};

const deleteByUsulanId = (idData) => {
  const SQLQuery = `DELETE FROM ${Tabel} WHERE id_usulan = ?`;
  return getPool.execute(SQLQuery, [idData]);
};

module.exports = {
  getAllDatas,
  createNewData,
  updateData,
  deleteByUsulanId,
};
