const getPool = require("../Config/Config");

const Tabel = "informasi_kawasan";

const getAllDatas = () => {
  const SQLQuery = `SELECT * FROM ${Tabel}`;

  return getPool.execute(SQLQuery);
};

const createNewData = (body) => {
  const SQLQuery = `  INSERT INTO ${Tabel} (OBJECTID, NAMOBJ, ORDE01, KODKWS, JNSRPR, WKLPR, WKMH, DLKPEL, TSS, MIGAS, HANKAM, WPMB, APKI, DLPI, PSSA, MBL, PKBL, KS, REMARK, LUASHA, Shape_Lenght, Shape_Area) 
                        VALUES ('${body.OBJECTID}', '${body.NAMOBJ}', '${body.ORDE01}', '${body.KODKWS}', '${body.JNSRPR}', '${body.WKLPR}', '${body.WKMH}', '${body.DLKPEL}', '${body.TSS}', '${body.MIGAS}', '${body.HANKAM}', '${body.WPMB}', '${body.APKI}', '${body.DLPI}', '${body.PSSA}', '${body.MBL}', '${body.PKBL}', '${body.KS}', '${body.REMARK}', '${body.LUASHA}', '${body.Shape_Lenght}', '${body.Shape_Area}')`;

  return getPool.execute(SQLQuery);
};

const updateData = (body, idData) => {
  const SQLQuery = `  UPDATE ${Tabel} 
                        SET NAMOBJ='${body.NAMOBJ}', ORDE01='${body.ORDE01}', KODKWS='${body.KODKWS}', JNSRPR='${body.JNSRPR}', WKLPR='${body.WKLPR}', WKMH='${body.WKMH}', DLKPEL='${body.DLKPEL}', TSS='${body.TSS}', MIGAS='${body.MIGAS}', HANKAM='${body.HANKAM}', WPMB='${body.WPMB}', APKI='${body.APKI}', DLPI='${body.DLPI}', PSSA='${body.PSSA}', MBL='${body.MBL}', PKBL='${body.PKBL}', KS='${body.KS}', REMARK='${body.REMARK}', LUASHA='${body.LUASHA}', Shape_Lenght='${body.Shape_Lenght}', Shape_Area='${body.Shape_Area}' 
                        WHERE OBJECTID=${idData.OBJECTID}`;

  return getPool.execute(SQLQuery);
};

const deleteData = (idData) => {
  const SQLQuery = `DELETE FROM ${Tabel} WHERE OBJECTID=${idData.OBJECTID}`;

  return getPool.execute(SQLQuery);
};

module.exports = {
  getAllDatas,
  createNewData,
  updateData,
  deleteData,
};
