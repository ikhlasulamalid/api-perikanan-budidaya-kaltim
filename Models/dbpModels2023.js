const getPool = require("../Config/Config");

const Tabel = "daftar_penerima_bantuan_2023";

const getAllDatas = () => {
  const SQLQuery = `SELECT * FROM ${Tabel}`;

  return getPool.execute(SQLQuery);
};

const createNewData = (body) => {
  const SQLQuery = `  INSERT INTO ${Tabel} (
                          NAMA_KELOMPOK,
                          NAMA_KETUA,
                          KABUPATEN_KOTA,
                          ALAMAT,
                          Jenis_Bantuan_1,
                          Jumlah_1,
                          Jenis_Bantuan_2,
                          Jumlah_2,
                          Jenis_Bantuan_3,
                          Jumlah_3
                        ) VALUES (
                          '${body.NAMA_KELOMPOK}',
                          '${body.NAMA_KETUA}',
                          '${body.KABUPATEN_KOTA}',
                          '${body.ALAMAT}',
                          '${body.Jenis_Bantuan_1}',
                          '${body.Jumlah_1}',
                          '${body.Jenis_Bantuan_2}',
                          '${body.Jumlah_2}',
                          '${body.Jenis_Bantuan_3}',
                          '${body.Jumlah_3}'
                          
                                                  )`;

  return getPool.execute(SQLQuery);
};

const updateData = (body, idData) => {
  const SQLQuery = `  UPDATE ${Tabel} 
                        SET
                          NAMA_KELOMPOK='${body.NAMA_KELOMPOK}',
                          NAMA_KETUA='${body.NAMA_KETUA}',
                          KABUPATEN_KOTA='${body.KABUPATEN_KOTA}',
                          ALAMAT='${body.ALAMAT}',
                          Jenis_Bantuan_1='${body.Jenis_Bantuan_1}',
                          Jumlah_1='${body.Jumlah_1}',
                          Jenis_Bantuan_2='${body.Jenis_Bantuan_2}',
                          Jumlah_2='${body.Jumlah_2}',
                          Jenis_Bantuan_3='${body.Jenis_Bantuan_3}',
                          Jumlah_3='${body.Jumlah_3}'
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
