const getPool = require("../Config/Config");

const Tabel = "pdb_perikanan";

const getAllDatas = () => {
  const SQLQuery = `SELECT * FROM ${Tabel}`;

  return getPool.execute(SQLQuery);
};

const createNewData = (body) => {
  const SQLQuery = `  INSERT INTO ${Tabel} (title, Tahun, Provinsi, JenisBudidaya, KabKota, Matra, KelompokIkan, JenisIkan, Volume, NilaiProduksi) 
                        VALUES ('${body.title}', '${body.Tahun}', '${body.Provinsi}', '${body.JenisBudidaya}', '${body.KabKota}', '${body.Matra}', '${body.KelompokIkan}', '${body.JenisIkan}', '${body.Volume}', '${body.NilaiProduksi}')`;

  return getPool.execute(SQLQuery);
};

const updateData = (body, idData) => {
  const SQLQuery = `  UPDATE ${Tabel} 
                        SET title='${body.title}', Tahun='${body.Tahun}', Provinsi='${body.Provinsi}', JenisBudidaya='${body.JenisBudidaya}', KabKota='${body.KabKota}', Matra='${body.Matra}', KelompokIkan='${body.KelompokIkan}', JenisIkan='${body.JenisIkan}', Volume='${body.Volume}', NilaiProduksi='${body.NilaiProduksi}' 
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
