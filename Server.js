// index.js
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const express = require("express");
var cors = require("cors");

const pdbRoute = require("./Routes/pdbRoute");
const ppb2025Route = require("./Routes/ppb2025Route");

const logRequest = require("./Middlewares/logs");

const app = express();

/* ==========================
   🔒 CORS Dinamis
   ========================== */
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? [
        process.env.FRONTEND_URL, // contoh: https://namadomainmu.com
      ]
    : ["http://localhost:5173", "http://localhost:3000"];

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

app.use(logRequest);

app.use("/pdb", pdbRoute);
app.use("/ppb-2025", ppb2025Route);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
  console.log(`🌐 Mode: ${process.env.NODE_ENV || "development"}`);
});
