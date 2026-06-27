const express = require('express');
const { saveQualitySignoffController, getQualitySignoffController } = require('../controllers/qualityController');

const router = express.Router();

router.post('/signoff', saveQualitySignoffController);
router.get('/', getQualitySignoffController);

module.exports = router;
