const getPool = require("../Config/Config");

const Tabel = "bantuan_2025";

const getAllDatas = () => {
  const SQLQuery = `SELECT * FROM ${Tabel}`;

  return getPool.execute(SQLQuery);
};

const createNewData = (body) => {
  const SQLQuery = `  INSERT INTO ${Tabel} (ProvinsiSARPRAS, KabKotaSARPRAS, KecSARPRAS, DesaSARPRAS, Nama, Klasifikasi, TeknologiBudidaya, IkanUtama, IkanTambahan, Alamat, Kecamatan, Kelurahan, TotalLuasLahan, LuasLahanDigunakan, NoKusuka) 
                        VALUES ('${body.ProvinsiSARPRAS}', '${body.KabKotaSARPRAS}', '${body.KecSARPRAS}', '${body.DesaSARPRAS}', '${body.Nama}', '${body.Klasifikasi}', '${body.TeknologiBudidaya}', '${body.IkanUtama}', '${body.IkanTambahan}', '${body.Alamat}', '${body.Kecamatan}', '${body.Kelurahan}', '${body.TotalLuasLahan}', '${body.LuasLahanDigunakan}', '${body.NoKusuka}')`;

  return getPool.execute(SQLQuery);
};

const updateData = (body, idData) => {
  const SQLQuery = `  UPDATE ${Tabel} 
                        SET ProvinsiSARPRAS='${body.ProvinsiSARPRAS}', KabKotaSARPRAS='${body.KabKotaSARPRAS}', KecSARPRAS='${body.KecSARPRAS}', DesaSARPRAS='${body.DesaSARPRAS}', Nama='${body.Nama}', Klasifikasi='${body.Klasifikasi}', TeknologiBudidaya='${body.TeknologiBudidaya}', IkanUtama='${body.IkanUtama}', IkanTambahan='${body.IkanTambahan}', Alamat='${body.Alamat}', Kecamatan='${body.Kecamatan}', Kelurahan='${body.Kelurahan}', TotalLuasLahan='${body.TotalLuasLahan}', LuasLahanDigunakan='${body.LuasLahanDigunakan}', NoKusuka='${body.NoKusuka}' 
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
