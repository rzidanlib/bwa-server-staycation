const router = require("express").Router();
const apiController = require("../controllers/apiController");
// const { upload } = require("../middlewares/multer");
const { upload } = require("../middlewares/cloudinary.storage");

router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post("/booking-page", upload, apiController.bookingPage);

module.exports = router;
