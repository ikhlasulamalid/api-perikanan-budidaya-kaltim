const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/userModels");

const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!password || !username) {
    return res.status(400).json({
      message: "Semua field wajib diisi",
    });
  }

  try {
    const [existing] = await UserModel.findByUsername(username);
    if (existing.length > 0) {
      return res.status(409).json({
        message: "Username sudah terdaftar!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.register(username, hashedPassword);

    res.status(201).json({
      message: "Registrasi admin berhasil",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [users] = await UserModel.findByUsername(username);
    const user = users[0];

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        message: "Password salah",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: err.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
