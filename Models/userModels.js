const getPool = require("../Config/Config");

const register = (username, hashedPassword) => {
  const SQL = `
    INSERT INTO users (username, password)
    VALUES (?, ?)
  `;
  return getPool.execute(SQL, [username, hashedPassword]);
};

const findByUsername = (username) => {
  const SQL = `
    SELECT * FROM users WHERE username = ?
  `;
  return getPool.execute(SQL, [username]);
};

module.exports = {
  register,
  findByUsername,
};
