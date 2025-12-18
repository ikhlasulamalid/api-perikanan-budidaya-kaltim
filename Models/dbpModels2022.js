const getPool = require("../Config/Config");

const Tabel = "daftar_penerima_bantuan_2022";

const getAllDatas = () => {
  const SQLQuery = `SELECT * FROM ${Tabel}`;

  return getPool.execute(SQLQuery);
};

const createNewData = (body) => {
  const SQLQuery = `  INSERT INTO ${Tabel} (
                                  Desa_Kelurahan,
                                  Kecamatan,
                                  Kabupaten_Kota,
                                  Nama_Kelompok,
                                  Nama_Ketua,
                                  Alamat,
                                  JUMLAH_BANTUAN
                                  ) VALUES (
                                   '${body.Desa_Kelurahan}', 
                                   '${body.Kecamatan}', 
                                   '${body.Kabupaten_Kota}', 
                                   '${body.Nama_Kelompok}', 
                                   '${body.Nama_Ketua}', 
                                   '${body.Alamat}', 
                                   '${body.JUMLAH_BANTUAN}'
                                  )`;

  return getPool.execute(SQLQuery);
};

const updateData = (body, idData) => {
  const SQLQuery = `  UPDATE ${Tabel} 
                        SET
                          Desa_Kelurahan='${body.Desa_Kelurahan}',
                          Kecamatan='${body.Kecamatan}',
                          Kabupaten_Kota='${body.Kabupaten_Kota}',
                          Nama_Kelompok='${body.Nama_Kelompok}',
                          Nama_Ketua='${body.Nama_Ketua}',
                          Alamat='${body.Alamat}',
                          JUMLAH_BANTUAN='${body.JUMLAH_BANTUAN}'
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
