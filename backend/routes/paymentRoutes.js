const express = require('express');
const { createPaymentController, getPaymentsController } = require('../controllers/paymentController');

const router = express.Router();

router.post('/', createPaymentController);
router.get('/', getPaymentsController);

module.exports = router;
