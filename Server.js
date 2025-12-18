require("dotenv").config();
const PORT = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");
const path = require("path");

const pdbRoute = require("./Routes/pdbRoute");
const ppb2025Route = require("./Routes/ppb2025Route");
const rplRoute = require("./Routes/rplRoute");
const usulanRoute2026 = require("./Routes/usulanRoute2026");
const usulanRoute2027 = require("./Routes/usulanRoute2027");
const jenisusulanRoute2026 = require("./Routes/jenisusulanRoute2026");
const jenisusulanRoute2027 = require("./Routes/jenisusulanRoute2027");
const dbpRoute2021 = require("./Routes/dbpRoute2021");
const dbpRoute2022 = require("./Routes/dbpRoute2022");
const dbpRoute2023 = require("./Routes/dbpRoute2023");
const dbpRoute2024 = require("./Routes/dbpRoute2024");
const dbpRoute2025 = require("./Routes/dbpRoute2025");
const userRoute = require("./Routes/userRoute");

const logRequest = require("./Middlewares/logs");

const app = express();

/* ==========================
   🔒 CORS Dinamis
   ========================== */
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        process.env.FRONTEND_URL,
        process.env.BACKEND_URL, // contoh: https://namadomainmu.com
      ]
    : [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
      ];

app.use(
  cors({
    origin: (origin, callback) => {
      // izinkan permintaan tanpa origin (misalnya Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Serve file upload
app.use(
  "/DokumenUsulan",
  express.static(path.join(__dirname, "DokumenUsulan"))
);
app.use("/DokumenUsulan", express.static("DokumenUsulan"));

app.use(logRequest);

app.use("/auth", userRoute);
app.use("/pdb", pdbRoute);
app.use("/ppb-2025", ppb2025Route);
app.use("/rpl", rplRoute);
app.use("/usulan2026", usulanRoute2026);
app.use("/usulan2027", usulanRoute2027);
app.use("/jenis-usulan2026", jenisusulanRoute2026);
app.use("/jenis-usulan2027", jenisusulanRoute2027);
app.use("/daftar-penerima-bantuan-tahun-2021", dbpRoute2021);
app.use("/daftar-penerima-bantuan-tahun-2022", dbpRoute2022);
app.use("/daftar-penerima-bantuan-tahun-2023", dbpRoute2023);
app.use("/daftar-penerima-bantuan-tahun-2024", dbpRoute2024);
app.use("/daftar-penerima-bantuan-tahun-2025", dbpRoute2025);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
  console.log(`🌐 Mode: ${process.env.NODE_ENV || "development"}`);
});
