const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Set up Cloudinary storage engine
const storageCloudinary = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "bwa-staycation/images", // Nama folder di Cloudinary
    allowed_formats: ["jpg", "jpeg", "png", "gif"], // Format gambar yang diperbolehkan
  },
});

// Fungsi upload untuk satu file
const upload = multer({
  storage: storageCloudinary,
  limits: { fileSize: 5000000 }, // Batasi ukuran file, misalnya 1MB
}).single("image"); // Menggunakan "image" sebagai field untuk single file

// Fungsi upload untuk banyak file
const uploadMultiple = multer({
  storage: storageCloudinary,
  limits: { fileSize: 5000000 }, // Batasi ukuran file, misalnya 1MB
}).array("images", 12); // "images" adalah nama field pada form dan 12 adalah jumlah maksimal file yang di-upload

// Menggabungkan keduanya dalam satu ekspor
module.exports = { upload, uploadMultiple };
