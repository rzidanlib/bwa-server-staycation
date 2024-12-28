const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Set up Cloudinary storage engine
const storageCloudinary = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "bwa-staycation/images",
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
  },
});

// Fungsi upload untuk satu file
const upload = multer({
  storage: storageCloudinary,
  limits: { fileSize: 5000000 },
}).single("image");

// Fungsi upload untuk banyak file
const uploadMultiple = multer({
  storage: storageCloudinary,
  limits: { fileSize: 5000000 },
}).array("images", 12);

module.exports = { upload, uploadMultiple };
