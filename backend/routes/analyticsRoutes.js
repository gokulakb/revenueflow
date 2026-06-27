const express = require("express");
const {
  getAnalyticsController,
} = require("../controllers/analyticsController");

const router = express.Router();

router.get("/", getAnalyticsController);

module.exports = router;