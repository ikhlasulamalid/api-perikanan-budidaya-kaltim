const getPool = require("../Config/Config");

const Tabel = "daftar_penerima_bantuan_2021";

const getAllDatas = () => {
  const SQLQuery = `SELECT * FROM ${Tabel}`;

  return getPool.execute(SQLQuery);
};

const createNewData = (body) => {
  const SQLQuery = `  INSERT INTO ${Tabel} (JENIS_BANTUAN, KABUPATEN_KOTA, NAMA_POKDAKAN, ALAMAT, KETERANGAN) 
                        VALUES ('${body.JENIS_BANTUAN}', '${body.KABUPATEN_KOTA}', '${body.NAMA_POKDAKAN}', '${body.ALAMAT}', '${body.KETERANGAN}')`;

  return getPool.execute(SQLQuery);
};

const updateData = (body, idData) => {
  const SQLQuery = `  UPDATE ${Tabel} 
                        SET JENIS_BANTUAN='${body.JENIS_BANTUAN}', KABUPATEN_KOTA='${body.KABUPATEN_KOTA}', NAMA_POKDAKAN='${body.NAMA_POKDAKAN}', ALAMAT='${body.ALAMAT}', KETERANGAN='${body.KETERANGAN}' 
                        WHERE id=${idData}`;

  return getPool.execute(SQLQuery);
};

const deleteData = (idData) => {
  const SQLQuery = `DELETE FROM ${Tabel} WHERE id=${idData}`;

  return getPool.execute(SQLQuery);
};

module.exports = {
  getAllDatas,
  createNewData,
  updateData,
  deleteData,
};
