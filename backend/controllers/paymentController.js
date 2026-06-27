const crypto = require("crypto");
const {
  createPayment,
  getPayments,
} = require("../models/paymentModel");

const createPaymentController = async (req, res) => {
  try {
    console.log("========== NEW PAYMENT ==========");
    console.log("Headers:", req.headers["content-type"]);
    console.log("Body:", req.body);

    const body = req.body || {};

    const candidate = String(body.candidate || "").trim();
    const job = String(body.job || "").trim();
    const amount = Number(body.amount);

    if (!candidate || !job || !amount) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
        received: body,
      });
    }

    if (amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Amount must be greater than zero.",
      });
    }

    const success = Math.random() < 0.8;

    const payment = await createPayment({
      candidate,
      job,
      amount,
      status: success ? "success" : "failed",
      transactionId: crypto.randomUUID(),
    });

    return res.status(201).json({
      success,
      payment,
      message: success
        ? "Payment processed successfully."
        : "Payment failed. Please try again.",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getPaymentsController = async (req, res) => {
  try {
    const payments = await getPayments();

    return res.json(payments);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  createPaymentController,
  getPaymentsController,
};