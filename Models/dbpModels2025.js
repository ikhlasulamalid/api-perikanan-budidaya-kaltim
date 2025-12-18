const getPool = require("../Config/Config");

const Tabel = "daftar_penerima_bantuan_2025";

const getAllDatas = () => {
  const SQLQuery = `SELECT * FROM ${Tabel}`;

  return getPool.execute(SQLQuery);
};

const createNewData = (body) => {
  const SQLQuery = `  INSERT INTO ${Tabel} (
                          KODE,
                          NAMA_KELOMPOK,
                          NAMA_KETUA,
                          ALAMAT,
                          KECAMATAN,
                          KAB_KOTA,
                          JENIS_BANTUAN,
                          HARGA_SATUAN,
                          VOLUME,
                          SATUAN
                        ) VALUES (
                          '${body.KODE}',
                          '${body.NAMA_KELOMPOK}',
                          '${body.NAMA_KETUA}',
                          '${body.ALAMAT}',
                          '${body.KECAMATAN}',
                          '${body.KAB_KOTA}',
                          '${body.JENIS_BANTUAN}',
                          '${body.HARGA_SATUAN}',
                          '${body.VOLUME}',
                          '${body.SATUAN}'
                                                  )`;

  return getPool.execute(SQLQuery);
};

const updateData = (body, idData) => {
  const SQLQuery = `  UPDATE ${Tabel} 
                        SET
                          KODE='${body.KODE}',
                          NAMA_KELOMPOK='${body.NAMA_KELOMPOK}',
                          NAMA_KETUA='${body.NAMA_KETUA}',
                          ALAMAT='${body.ALAMAT}',
                          KECAMATAN='${body.KECAMATAN}',
                          KABUPATEN_KOTA='${body.KABUPATEN_KOTA}',
                          JENIS_BANTUAN='${body.JENIS_BANTUAN}',
                          HARGA_SATUAN='${body.HARGA_SATUAN}',
                          VOLUME='${body.VOLUME}',
                          SATUAN='${body.SATUAN}'
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
