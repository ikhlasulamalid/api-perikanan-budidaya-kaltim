const getPool = require("../Config/Config");

const Tabel = "usulan_2026";

const getAllDatas = () => {
  const SQLQuery = `SELECT * FROM ${Tabel}`;
  return getPool.execute(SQLQuery);
};

const createNewData = (body) => {
  const SQLQuery = `
    INSERT INTO ${Tabel}
    (id_usulan, Nama_Kelompok, Nama_Ketua, KabKota, Kecamatan, 
     Alamat, Klasifikasi, JenisIkan, Phone, NoKusuka, Dokumen)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const params = [
    body.id_usulan,
    body.Nama_Kelompok,
    body.Nama_Ketua,
    body.KabKota,
    body.Kecamatan,
    body.Alamat,
    body.Klasifikasi,
    body.JenisIkan,
    body.Phone,
    body.NoKusuka,
    body.Dokumen,
  ];

  return getPool.execute(SQLQuery, params);
};

const updateData = (body, idData) => {
  const SQLQuery = `
    UPDATE ${Tabel}
    SET 
      id_usulan = ?,
      Nama_Kelompok = ?,
      Nama_Ketua = ?,
      KabKota = ?,
      Kecamatan = ?,
      Alamat = ?,
      Klasifikasi = ?,
      JenisIkan = ?,
      Phone = ?,
      NoKusuka = ?,
      Dokumen = ?
    WHERE id = ?
  `;

  const params = [
    body.id_usulan,
    body.Nama_Kelompok,
    body.Nama_Ketua,
    body.KabKota,
    body.Kecamatan,
    body.Alamat,
    body.Klasifikasi,
    body.JenisIkan,
    body.Phone,
    body.NoKusuka,
    body.Dokumen,
    idData,
  ];

  return getPool.execute(SQLQuery, params);
};

const deleteData = (idData) => {
  const SQLQuery = `DELETE FROM ${Tabel} WHERE id = ?`;
  return getPool.execute(SQLQuery, [idData]);
};

const deleteByUsulanId = (idData) => {
  const SQLQuery = `DELETE FROM ${Tabel} WHERE id_usulan = ?`;
  return getPool.execute(SQLQuery, [idData]);
};

const getByIdUsulan = (idUsulan) => {
  const SQLQuery = `SELECT Dokumen FROM ${Tabel} WHERE id_usulan = ?`;
  return getPool.execute(SQLQuery, [idUsulan]);
};

module.exports = {
  getAllDatas,
  createNewData,
  updateData,
  deleteData,
  deleteByUsulanId,
  getByIdUsulan,
};
