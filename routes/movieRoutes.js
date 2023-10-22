// routes/movieRoutes.js
const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.post("/upload/:movieId", movieController.uploadPhoto);

module.exports = router;
